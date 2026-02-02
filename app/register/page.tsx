'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import TeamRegistrationForm from '@/components/TeamRegistrationForm'
import IndividualRegistrationForm from '@/components/IndividualRegistrationForm'

export default function RegisterPage() {
  const searchParams = useSearchParams()
  const [registrationType, setRegistrationType] = useState<'team' | 'individual'>('team')

  useEffect(() => {
    const type = searchParams.get('type')
    if (type === 'individual') {
      setRegistrationType('individual')
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary-600 mb-4">
              SPL Registration
            </h1>
            <p className="text-gray-600">
              Register for Saroj Premier League Under-19 Cricket Tournament
            </p>
          </div>

          {/* Registration Type Selector */}
          <div className="card mb-8">
            <h2 className="text-xl font-semibold mb-4">Select Registration Type</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => setRegistrationType('team')}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  registrationType === 'team'
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-300 hover:border-primary-300'
                }`}
              >
                <h3 className="font-semibold text-primary-600">Team Registration</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Already have a team? Register with complete squad
                </p>
                <p className="text-sm font-medium text-primary-600 mt-2">
                  Fee: ₹11,000
                </p>
              </button>
              <button
                onClick={() => setRegistrationType('individual')}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  registrationType === 'individual'
                    ? 'border-gold-500 bg-gold-50'
                    : 'border-gray-300 hover:border-gold-300'
                }`}
              >
                <h3 className="font-semibold text-gold-600">Individual Registration</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Don't have a team? We'll assign you to a district team
                </p>
                <p className="text-sm font-medium text-gold-600 mt-2">
                  Fee: ₹1,000
                </p>
              </button>
            </div>
          </div>

          {/* Registration Form */}
          {registrationType === 'team' ? (
            <TeamRegistrationForm />
          ) : (
            <IndividualRegistrationForm />
          )}
        </div>
      </div>
    </div>
  )
}