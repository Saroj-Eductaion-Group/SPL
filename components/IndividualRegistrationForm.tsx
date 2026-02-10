'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import DocumentUpload from '@/components/DocumentUpload'

interface IndividualFormData {
  name: string
  fatherName: string
  dateOfBirth: string
  phone: string
  alternatePhone: string
  schoolCollege: string
  district: string
  role: string
  position: string
  experience: string
  email: string
}

const districts = [
  'Agra', 'Aligarh', 'Allahabad', 'Ambedkar Nagar', 'Amethi', 'Amroha', 'Auraiya', 'Azamgarh',
  'Baghpat', 'Bahraich', 'Ballia', 'Balrampur', 'Banda', 'Barabanki', 'Bareilly', 'Basti',
  'Bhadohi', 'Bijnor', 'Budaun', 'Bulandshahr', 'Chandauli', 'Chitrakoot', 'Deoria', 'Etah',
  'Etawah', 'Faizabad', 'Farrukhabad', 'Fatehpur', 'Firozabad', 'Gautam Buddha Nagar', 'Ghaziabad',
  'Ghazipur', 'Gonda', 'Gorakhpur', 'Hamirpur', 'Hapur', 'Hardoi', 'Hathras', 'Jalaun', 'Jaunpur',
  'Jhasi', 'Kannauj', 'Kanpur Dehat', 'Kanpur Nagar', 'Kasganj', 'Kaushambi', 'Kheri', 'Kushinagar',
  'Lalitpur', 'Lucknow', 'Maharajganj', 'Mahoba', 'Mainpuri', 'Mathura', 'Mau', 'Meerut', 'Mirzapur',
  'Moradabad', 'Muzaffarnagar', 'Pilibhit', 'Pratapgarh', 'Raebareli', 'Rampur', 'Saharanpur',
  'Sambhal', 'Sant Kabir Nagar', 'Shahjahanpur', 'Shamli', 'Shravasti', 'Siddharthnagar', 'Sitapur',
  'Sonbhadra', 'Sultanpur', 'Unnao', 'Varanasi'
]

export default function IndividualRegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<IndividualFormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data: IndividualFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/register/individual', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      if (response.ok) {
        const result = await response.json()
        // Redirect to payment page with proper parameters
        const params = new URLSearchParams({
          registrationId: result.registrationId,
          amount: result.amount.toString(),
          email: data.email,
          phone: data.phone,
          name: data.name,
          type: 'individual'
        })
        window.location.href = `/payment?${params.toString()}`
      }
    } catch (error) {
      console.error('Registration failed:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Personal Details */}
      <div className="card">
        <h2 className="text-xl font-semibold mb-6 text-gold-600">Personal Details</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="form-label">Full Name *</label>
            <input
              {...register('name', { required: 'Name is required' })}
              className="form-input"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          
          <div>
            <label className="form-label">Father/Guardian Name *</label>
            <input
              {...register('fatherName', { required: 'Father/Guardian name is required' })}
              className="form-input"
              placeholder="Enter father/guardian name"
            />
            {errors.fatherName && (
              <p className="text-red-500 text-sm mt-1">{errors.fatherName.message}</p>
            )}
          </div>

          <div>
            <label className="form-label">Date of Birth *</label>
            <input
              type="date"
              {...register('dateOfBirth', { required: 'Date of birth is required' })}
              className="form-input"
            />
            {errors.dateOfBirth && (
              <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth.message}</p>
            )}
          </div>

          <div>
            <label className="form-label">Mobile Number *</label>
            <input
              {...register('phone', { required: 'Mobile number is required' })}
              className="form-input"
              placeholder="Enter mobile number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="form-label">Alternate Mobile Number</label>
            <input
              {...register('alternatePhone')}
              className="form-input"
              placeholder="Enter alternate mobile number"
            />
          </div>

          <div>
            <label className="form-label">Email ID *</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="form-input"
              placeholder="Enter email address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="form-label">District *</label>
            <select
              {...register('district', { required: 'District is required' })}
              className="form-input"
            >
              <option value="">Select District</option>
              {districts.map(district => (
                <option key={district} value={district}>{district}</option>
              ))}
            </select>
            {errors.district && (
              <p className="text-red-500 text-sm mt-1">{errors.district.message}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="form-label">School/College Name *</label>
            <input
              {...register('schoolCollege', { required: 'School/College name is required' })}
              className="form-input"
              placeholder="Enter school or college name"
            />
            {errors.schoolCollege && (
              <p className="text-red-500 text-sm mt-1">{errors.schoolCollege.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Playing Details */}
      <div className="card">
        <h2 className="text-xl font-semibold mb-6 text-gold-600">Playing Details</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="form-label">Preferred Playing Role *</label>
            <select
              {...register('role', { required: 'Playing role is required' })}
              className="form-input"
            >
              <option value="">Select Role</option>
              <option value="BATSMAN">Batsman</option>
              <option value="BOWLER">Bowler</option>
              <option value="ALL_ROUNDER">All-Rounder</option>
              <option value="WICKET_KEEPER">Wicket-Keeper</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
            )}
          </div>

          <div>
            <label className="form-label">Preferred Playing Position</label>
            <select
              {...register('position')}
              className="form-input"
            >
              <option value="">Select Position</option>
              <option value="TOP_ORDER">Top Order</option>
              <option value="MIDDLE_ORDER">Middle Order</option>
              <option value="FAST_BOWLER">Fast Bowler</option>
              <option value="SPINNER">Spinner</option>
              <option value="WICKET_KEEPER">Wicket-Keeper</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="form-label">Playing Experience</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  {...register('experience')}
                  value="SCHOOL"
                  className="text-gold-500"
                />
                <span>School Level</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  {...register('experience')}
                  value="DISTRICT"
                  className="text-gold-500"
                />
                <span>District Level</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  {...register('experience')}
                  value="ACADEMY"
                  className="text-gold-500"
                />
                <span>Academy</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  {...register('experience')}
                  value="NONE"
                  className="text-gold-500"
                />
                <span>None</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Document Upload */}
      <div className="card">
        <h2 className="text-xl font-semibold mb-6 text-gold-600">Document Upload (Mandatory)</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <DocumentUpload label="Aadhaar Card" required />
          <DocumentUpload label="School/College ID" required />
          <DocumentUpload label="Date of Birth Proof" required />
          <DocumentUpload label="Passport Size Photograph" required />
        </div>
      </div>

      {/* Consent & Declaration */}
      <div className="card">
        <h2 className="text-xl font-semibold mb-6 text-gold-600">Team Formation Consent</h2>
        <div className="bg-gold-50 p-4 rounded-lg mb-6">
          <h3 className="font-semibold mb-2">I understand that:</h3>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>• I do not currently have a team</li>
            <li>• SPL authorities will assign me to a district-level team</li>
            <li>• Team formation will be done based on district, role, and availability</li>
            <li>• SPL committee's decision will be final</li>
          </ul>
        </div>

        <div className="bg-primary-50 p-4 rounded-lg mb-6">
          <h3 className="font-semibold mb-2">Scholarship Acknowledgement:</h3>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>• Participation in SPL makes me eligible for 50% scholarship</li>
            <li>• Scholarship is applicable at Saroj International University</li>
            <li>• Admission is subject to university norms</li>
          </ul>
        </div>

        <div className="border border-gray-300 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Declaration:</h3>
          <p className="text-sm text-gray-700 mb-4">
            I hereby declare that all information provided is true and correct. 
            Age and eligibility criteria are fulfilled. Any false information may lead to disqualification.
          </p>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              required
              className="text-gold-500"
            />
            <span className="text-sm">I agree to the above terms and conditions</span>
          </label>
        </div>
      </div>

      {/* Submit */}
      <div className="card">
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Registration Fee: <span className="font-semibold text-gold-600">₹1,000</span>
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-gold disabled:opacity-50"
          >
            {isSubmitting ? 'Processing...' : 'Proceed to Payment'}
          </button>
        </div>
      </div>
    </form>
  )
}