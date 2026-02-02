'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    Razorpay: any
  }
}

export default function PaymentPage() {
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [paymentData, setPaymentData] = useState<any>(null)

  const teamId = searchParams.get('teamId')
  const playerId = searchParams.get('playerId')

  useEffect(() => {
    loadPaymentData()
  }, [teamId, playerId])

  const loadPaymentData = async () => {
    try {
      const endpoint = teamId ? `/api/payment/team?id=${teamId}` : `/api/payment/individual?id=${playerId}`
      const response = await fetch(endpoint)
      const data = await response.json()
      setPaymentData(data)
    } catch (error) {
      console.error('Failed to load payment data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handlePayment = async () => {
    try {
      // Create Razorpay order
      const orderResponse = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: paymentData.amount,
          teamId,
          playerId
        })
      })
      
      const order = await orderResponse.json()

      // Initialize Razorpay
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: 'INR',
        name: 'SPL Registration',
        description: teamId ? 'Team Registration Fee' : 'Individual Registration Fee',
        order_id: order.id,
        handler: async (response: any) => {
          // Verify payment
          const verifyResponse = await fetch('/api/payment/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              teamId,
              playerId
            })
          })

          if (verifyResponse.ok) {
            window.location.href = '/payment/success'
          } else {
            window.location.href = '/payment/failed'
          }
        },
        prefill: {
          name: paymentData.name,
          email: paymentData.email,
          contact: paymentData.phone
        },
        theme: {
          color: '#3b82f6'
        }
      }

      const rzp = new window.Razorpay(options)
      rzp.open()
    } catch (error) {
      console.error('Payment failed:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p>Loading payment details...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="card">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-primary-600 mb-4">
                Complete Payment
              </h1>
              <p className="text-gray-600">
                Complete your SPL registration by making the payment
              </p>
            </div>

            {paymentData && (
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-lg font-semibold mb-4">Registration Details</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Registration Type:</span>
                      <span className="font-medium">
                        {teamId ? 'Team Registration' : 'Individual Registration'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Name:</span>
                      <span className="font-medium">{paymentData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>District:</span>
                      <span className="font-medium">{paymentData.district}</span>
                    </div>
                    {teamId && (
                      <div className="flex justify-between">
                        <span>Registration ID:</span>
                        <span className="font-medium">{paymentData.registrationId}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-primary-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total Amount:</span>
                    <span className="text-2xl font-bold text-primary-600">
                      ₹{paymentData.amount.toLocaleString()}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  className="w-full btn-primary py-4 text-lg"
                >
                  Pay Now
                </button>

                <div className="text-center text-sm text-gray-600">
                  <p>Secure payment powered by Razorpay</p>
                  <p className="mt-2">
                    By proceeding, you agree to the SPL terms and conditions
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Load Razorpay script */}
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    </div>
  )
}