import { Trophy, Users, Calendar, MapPin } from 'lucide-react'

export default function TournamentFormat() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary-600 mb-4">Tournament Format</h1>
            <p className="text-xl text-gray-600">SPL Under-19 Cricket Tournament Structure</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="card">
              <Trophy className="w-12 h-12 text-gold-500 mb-4" />
              <h2 className="text-xl font-semibold mb-4">Tournament Structure</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• District Level Matches</li>
                <li>• Zonal Championships</li>
                <li>• State Level Semi-Finals</li>
                <li>• Grand Final at Ekana Stadium</li>
              </ul>
            </div>

            <div className="card">
              <Calendar className="w-12 h-12 text-primary-500 mb-4" />
              <h2 className="text-xl font-semibold mb-4">Match Format</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• 20 Overs per side</li>
                <li>• Powerplay: First 6 overs</li>
                <li>• Maximum 4 overs per bowler</li>
                <li>• DLS method for rain interruptions</li>
              </ul>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-primary-600">Tournament Phases</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary-500 pl-6">
                <h3 className="text-lg font-semibold mb-2">Phase 1: District Level (Week 1-2)</h3>
                <p className="text-gray-700 mb-2">All registered teams compete within their respective districts.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Round-robin format within districts</li>
                  <li>• Top 2 teams from each district qualify</li>
                  <li>• Matches conducted at local grounds</li>
                </ul>
              </div>

              <div className="border-l-4 border-gold-500 pl-6">
                <h3 className="text-lg font-semibold mb-2">Phase 2: Zonal Championships (Week 3)</h3>
                <p className="text-gray-700 mb-2">District winners compete in zonal championships.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 4 zones: East, West, North, South UP</li>
                  <li>• Knockout format</li>
                  <li>• Zone winners advance to state level</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold mb-2">Phase 3: State Level (Week 4)</h3>
                <p className="text-gray-700 mb-2">Final phase with semi-finals and grand finale.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Semi-finals: 4 zone winners</li>
                  <li>• Grand Final at Ekana Cricket Stadium</li>
                  <li>• Live streaming and media coverage</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card text-center">
              <Users className="w-8 h-8 text-primary-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Team Composition</h3>
              <p className="text-sm text-gray-600">15 players maximum per team</p>
            </div>

            <div className="card text-center">
              <MapPin className="w-8 h-8 text-gold-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Venues</h3>
              <p className="text-sm text-gray-600">District grounds + Ekana Stadium</p>
            </div>

            <div className="card text-center">
              <Trophy className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Prize Money</h3>
              <p className="text-sm text-gray-600">₹11,00,000 for winners</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}