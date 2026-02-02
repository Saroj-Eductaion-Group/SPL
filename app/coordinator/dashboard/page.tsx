'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Users, FileCheck, Trophy, Calendar } from 'lucide-react'

export default function CoordinatorDashboard() {
  const [stats, setStats] = useState({
    districtTeams: 12,
    pendingVerifications: 5,
    approvedTeams: 8,
    individualPlayers: 15
  })
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('coordinatorToken')
    if (!token) {
      router.push('/coordinator/login')
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('coordinatorToken')
    router.push('/coordinator/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gold-600">Coordinator Dashboard</h1>
              <p className="text-gray-600">District Team Management</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-gold-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">District Teams</p>
                <p className="text-2xl font-bold text-gray-900">{stats.districtTeams}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <FileCheck className="h-8 w-8 text-orange-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending Verifications</p>
                <p className="text-2xl font-bold text-gray-900">{stats.pendingVerifications}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <Trophy className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Approved Teams</p>
                <p className="text-2xl font-bold text-gray-900">{stats.approvedTeams}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-primary-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Individual Players</p>
                <p className="text-2xl font-bold text-gray-900">{stats.individualPlayers}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card hover:shadow-lg transition-shadow text-center">
            <Users className="h-8 w-8 text-gold-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Manage Teams</h3>
            <p className="text-gray-600 text-sm mb-4">View and manage district teams</p>
            <button className="btn-gold">View Teams</button>
          </div>

          <div className="card hover:shadow-lg transition-shadow text-center">
            <FileCheck className="h-8 w-8 text-primary-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Verify Documents</h3>
            <p className="text-gray-600 text-sm mb-4">Review player documents</p>
            <button className="btn-primary">Verify Now</button>
          </div>

          <div className="card hover:shadow-lg transition-shadow text-center">
            <Trophy className="h-8 w-8 text-green-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Individual Players</h3>
            <p className="text-gray-600 text-sm mb-4">Assign players to teams</p>
            <button className="btn-primary">Manage Players</button>
          </div>

          <div className="card hover:shadow-lg transition-shadow text-center">
            <Calendar className="h-8 w-8 text-purple-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Match Results</h3>
            <p className="text-gray-600 text-sm mb-4">Update match results</p>
            <button className="btn-primary">Update Results</button>
          </div>
        </div>
      </div>
    </div>
  )
}