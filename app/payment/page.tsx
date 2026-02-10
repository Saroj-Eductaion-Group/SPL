'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function PaymentPage() {
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false)
  
  const registrationId = searchParams.get('registrationId')
  const amount = searchParams.get('amount')
  const email = searchParams.get('email')
  const phone = searchParams.get('phone')
  const name = searchParams.get('name')
  const type = searchParams.get('type')

  const handlePayment = async () => {
    setLoading(true)
    try {
      // Initiate Easebuzz payment
      const response = await fetch('/api/payment/initiate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          registrationId,
          amount: parseInt(amount || '0'),
          email,
          phone,
          name,
          registrationType: type
        })
      })
      
      const data = await response.json()
      
      if (data.success && data.paymentUrl) {
        // Redirect to Easebuzz payment page
        window.location.href = data.paymentUrl
      } else {
        alert(data.error || 'Payment initiation failed. Please try again.')
      }
    } catch (error) {
      console.error('Payment failed:', error)
      alert('Payment initiation failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-blue-600 mb-4">
                Complete Payment
              </h1>
              <p className="text-gray-600">
                Complete your SPL registration by making the payment
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Registration Details</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Registration ID:</span>
                    <span className="font-medium">{registrationId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Registration Type:</span>
                    <span className="font-medium">
                      {type === 'team' ? 'Team Registration' : 'Individual Registration'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Name:</span>
                    <span className="font-medium">{name}</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total Amount:</span>
                  <span className="text-2xl font-bold text-blue-600">
                    ₹{parseInt(amount || '0').toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={handlePayment}
                disabled={loading}
                className="w-full bg-blue-600 text-white py-4 text-lg rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? 'Processing...' : 'Pay Now'}
              </button>

              <div className="text-center text-sm text-gray-600">
                <p>Secure payment powered by Easebuzz</p>
                <p className="mt-2">
                  By proceeding, you agree to the SPL terms and conditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}