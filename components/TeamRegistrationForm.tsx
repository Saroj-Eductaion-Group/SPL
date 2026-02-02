'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Plus, Trash2 } from 'lucide-react'

interface Player {
  name: string
  dateOfBirth: string
  phone: string
  aadhaarNo: string
}

interface TeamFormData {
  teamName: string
  district: string
  schoolCollege: string
  coachName: string
  coachPhone: string
  managerName: string
  managerPhone: string
  players: Player[]
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

export default function TeamRegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<TeamFormData>()
  const [players, setPlayers] = useState<Player[]>([
    { name: '', dateOfBirth: '', phone: '', aadhaarNo: '' }
  ])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const addPlayer = () => {
    if (players.length < 15) {
      setPlayers([...players, { name: '', dateOfBirth: '', phone: '', aadhaarNo: '' }])
    }
  }

  const removePlayer = (index: number) => {
    if (players.length > 1) {
      setPlayers(players.filter((_, i) => i !== index))
    }
  }

  const updatePlayer = (index: number, field: keyof Player, value: string) => {
    const updatedPlayers = [...players]
    updatedPlayers[index][field] = value
    setPlayers(updatedPlayers)
  }

  const onSubmit = async (data: TeamFormData) => {
    setIsSubmitting(true)
    try {
      const formData = { ...data, players }
      const response = await fetch('/api/register/team', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        const result = await response.json()
        // Redirect to payment page
        window.location.href = `/payment?teamId=${result.teamId}`
      }
    } catch (error) {
      console.error('Registration failed:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Team Details */}
      <div className="card">
        <h2 className="text-xl font-semibold mb-6 text-primary-600">Team Details</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="form-label">Team Name *</label>
            <input
              {...register('teamName', { required: 'Team name is required' })}
              className="form-input"
              placeholder="Enter team name"
            />
            {errors.teamName && (
              <p className="text-red-500 text-sm mt-1">{errors.teamName.message}</p>
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

          <div>
            <label className="form-label">Coach Name</label>
            <input
              {...register('coachName')}
              className="form-input"
              placeholder="Enter coach name"
            />
          </div>

          <div>
            <label className="form-label">Coach Phone</label>
            <input
              {...register('coachPhone')}
              className="form-input"
              placeholder="Enter coach phone number"
            />
          </div>

          <div>
            <label className="form-label">Manager Name</label>
            <input
              {...register('managerName')}
              className="form-input"
              placeholder="Enter manager name"
            />
          </div>

          <div>
            <label className="form-label">Manager Phone</label>
            <input
              {...register('managerPhone')}
              className="form-input"
              placeholder="Enter manager phone number"
            />
          </div>
        </div>
      </div>

      {/* Players */}
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-primary-600">
            Players ({players.length}/15)
          </h2>
          <button
            type="button"
            onClick={addPlayer}
            disabled={players.length >= 15}
            className="btn-primary flex items-center space-x-2 disabled:opacity-50"
          >
            <Plus className="w-4 h-4" />
            <span>Add Player</span>
          </button>
        </div>

        <div className="space-y-6">
          {players.map((player, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Player {index + 1}</h3>
                {players.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removePlayer(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Full Name *</label>
                  <input
                    value={player.name}
                    onChange={(e) => updatePlayer(index, 'name', e.target.value)}
                    className="form-input"
                    placeholder="Enter player name"
                    required
                  />
                </div>
                
                <div>
                  <label className="form-label">Date of Birth *</label>
                  <input
                    type="date"
                    value={player.dateOfBirth}
                    onChange={(e) => updatePlayer(index, 'dateOfBirth', e.target.value)}
                    className="form-input"
                    required
                  />
                </div>
                
                <div>
                  <label className="form-label">Mobile Number *</label>
                  <input
                    value={player.phone}
                    onChange={(e) => updatePlayer(index, 'phone', e.target.value)}
                    className="form-input"
                    placeholder="Enter mobile number"
                    required
                  />
                </div>
                
                <div>
                  <label className="form-label">Aadhaar Number *</label>
                  <input
                    value={player.aadhaarNo}
                    onChange={(e) => updatePlayer(index, 'aadhaarNo', e.target.value)}
                    className="form-input"
                    placeholder="Enter Aadhaar number"
                    required
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Submit */}
      <div className="card">
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Registration Fee: <span className="font-semibold text-primary-600">₹11,000</span>
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary disabled:opacity-50"
          >
            {isSubmitting ? 'Processing...' : 'Proceed to Payment'}
          </button>
        </div>
      </div>
    </form>
  )
}