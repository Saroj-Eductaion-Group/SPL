'use client'

import { useEffect, useState } from 'react'
import { FileCheck, Users, Eye } from 'lucide-react'

interface Player {
  id: string
  name: string
  district: string
  schoolCollege: string
  role: string
  isIndividual: boolean
  teamAssigned: boolean
  createdAt: string
}

export default function AdminPlayers() {
  const [players, setPlayers] = useState<Player[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('ALL')

  useEffect(() => {
    loadPlayers()
  }, [])

  const loadPlayers = async () => {
    try {
      const response = await fetch('/api/admin/players')
      const data = await response.json()
      setPlayers(data)
    } catch (error) {
      console.error('Failed to load players:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredPlayers = players.filter(player => {
    if (filter === 'INDIVIDUAL') return player.isIndividual && !player.teamAssigned
    if (filter === 'ASSIGNED') return player.isIndividual && player.teamAssigned
    if (filter === 'TEAM_PLAYERS') return !player.isIndividual
    return true
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary-600">Player Management</h1>
          <p className="text-gray-600">Manage individual players and team assignments</p>
        </div>

        {/* Filters */}
        <div className="mb-6">
          <div className="flex space-x-4">
            {[
              { key: 'ALL', label: 'All Players' },
              { key: 'INDIVIDUAL', label: 'Unassigned Individual' },
              { key: 'ASSIGNED', label: 'Assigned Individual' },
              { key: 'TEAM_PLAYERS', label: 'Team Players' }
            ].map(filterOption => (
              <button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key)}
                className={`px-4 py-2 rounded-lg ${
                  filter === filterOption.key 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {filterOption.label} ({players.filter(p => {
                  if (filterOption.key === 'INDIVIDUAL') return p.isIndividual && !p.teamAssigned
                  if (filterOption.key === 'ASSIGNED') return p.isIndividual && p.teamAssigned
                  if (filterOption.key === 'TEAM_PLAYERS') return !p.isIndividual
                  return true
                }).length})
              </button>
            ))}
          </div>
        </div>

        {/* Players Table */}
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Player</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">District</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPlayers.map(player => (
                  <tr key={player.id}>
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{player.name}</div>
                        <div className="text-sm text-gray-500">{player.schoolCollege}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{player.district}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{player.role}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        player.isIndividual ? 'bg-gold-100 text-gold-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {player.isIndividual ? 'Individual' : 'Team Player'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        player.isIndividual && !player.teamAssigned ? 'bg-orange-100 text-orange-800' :
                        player.teamAssigned ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {player.isIndividual && !player.teamAssigned ? 'Unassigned' :
                         player.teamAssigned ? 'Assigned' : 'In Team'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="w-4 h-4" />
                      </button>
                      {player.isIndividual && !player.teamAssigned && (
                        <button className="text-green-600 hover:text-green-900">
                          <Users className="w-4 h-4" />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}