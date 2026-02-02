import Link from 'next/link'
import { XCircle } from 'lucide-react'

export default function PaymentFailed() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="max-w-md w-full">
        <div className="card text-center">
          <XCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Payment Failed
          </h1>
          <p className="text-gray-600 mb-6">
            Your payment could not be processed. Please try again or contact support.
          </p>
          <div className="space-y-3">
            <Link href="/register" className="btn-primary block">
              Try Registration Again
            </Link>
            <Link href="/contact" className="btn-gold block">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}