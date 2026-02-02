import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="max-w-md w-full">
        <div className="card text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Payment Successful!
          </h1>
          <p className="text-gray-600 mb-6">
            Your SPL registration payment has been processed successfully. 
            You will receive a confirmation email shortly.
          </p>
          <div className="space-y-3">
            <Link href="/" className="btn-primary block">
              Back to Home
            </Link>
            <Link href="/register?type=team" className="btn-primary block">
              Register Team (₹11,000)
            </Link>
            <Link href="/register?type=individual" className="btn-gold block">
              Register Individual (₹1,000)
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}