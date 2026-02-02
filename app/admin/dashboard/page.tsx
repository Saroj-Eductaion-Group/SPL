'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Users, Trophy, CreditCard, Calendar, CheckCircle, XCircle, Clock } from 'lucide-react'

interface DashboardStats {
  totalTeams: number
  totalPlayers: number
  totalPayments: number
  pendingApprovals: number
  approvedTeams: number
  rejectedTeams: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
      return
    }
    loadDashboardData()
  }, [])

  const loadDashboardData = async () => {
    try {
      const response = await fetch('/api/admin/dashboard')
      const data = await response.json()
      setStats(data)
    } catch (error) {
      console.error('Failed to load dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    router.push('/admin/login')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-primary-600">SPL Admin Dashboard</h1>
              <p className="text-gray-600">Tournament Management System</p>
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
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center">
              <Trophy className="h-8 w-8 text-gold-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Teams</p>
                <p className="text-2xl font-bold text-gray-900">{stats?.totalTeams || 0}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-primary-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Players</p>
                <p className="text-2xl font-bold text-gray-900">{stats?.totalPlayers || 0}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <CreditCard className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Payments</p>
                <p className="text-2xl font-bold text-gray-900">₹{((stats?.totalPayments || 0) / 100000).toFixed(1)}L</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-orange-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending Approvals</p>
                <p className="text-2xl font-bold text-gray-900">{stats?.pendingApprovals || 0}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Status */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Approved Teams</p>
                <p className="text-3xl font-bold text-green-600">{stats?.approvedTeams || 0}</p>
              </div>
              <CheckCircle className="h-12 w-12 text-green-500" />
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Teams</p>
                <p className="text-3xl font-bold text-orange-600">{stats?.pendingApprovals || 0}</p>
              </div>
              <Clock className="h-12 w-12 text-orange-500" />
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Rejected Teams</p>
                <p className="text-3xl font-bold text-red-600">{stats?.rejectedTeams || 0}</p>
              </div>
              <XCircle className="h-12 w-12 text-red-500" />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <button
            onClick={() => router.push('/admin/teams')}
            className="card hover:shadow-lg transition-shadow text-left"
          >
            <Trophy className="h-8 w-8 text-primary-500 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Manage Teams</h3>
            <p className="text-gray-600 text-sm">Approve, reject, and manage team registrations</p>
          </button>

          <button
            onClick={() => router.push('/admin/players')}
            className="card hover:shadow-lg transition-shadow text-left"
          >
            <Users className="h-8 w-8 text-gold-500 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Manage Players</h3>
            <p className="text-gray-600 text-sm">Verify documents and manage individual players</p>
          </button>

          <button
            onClick={() => router.push('/admin/fixtures')}
            className="card hover:shadow-lg transition-shadow text-left"
          >
            <Calendar className="h-8 w-8 text-green-500 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Fixtures</h3>
            <p className="text-gray-600 text-sm">Create and manage tournament fixtures</p>
          </button>

          <button
            onClick={() => router.push('/admin/reports')}
            className="card hover:shadow-lg transition-shadow text-left"
          >
            <CreditCard className="h-8 w-8 text-purple-500 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Reports</h3>
            <p className="text-gray-600 text-sm">Export team lists, payments, and analytics</p>
          </button>
        </div>
      </div>
    </div>
  )
}