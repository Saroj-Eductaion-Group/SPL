import { Calendar, MapPin, Clock, Users } from 'lucide-react'

export default function Schedule() {
  const districts = [
    { name: 'Lucknow', teams: 8, venue: 'Lucknow Cricket Ground', date: '2024-03-01' },
    { name: 'Kanpur', teams: 6, venue: 'Kanpur Sports Complex', date: '2024-03-02' },
    { name: 'Agra', teams: 7, venue: 'Agra Cricket Stadium', date: '2024-03-03' },
    { name: 'Varanasi', teams: 5, venue: 'Varanasi Sports Ground', date: '2024-03-04' },
    { name: 'Allahabad', teams: 6, venue: 'Allahabad Cricket Club', date: '2024-03-05' },
    { name: 'Meerut', teams: 4, venue: 'Meerut Cricket Ground', date: '2024-03-06' },
    { name: 'Bareilly', teams: 5, venue: 'Bareilly Sports Complex', date: '2024-03-07' },
    { name: 'Ghaziabad', teams: 6, venue: 'Ghaziabad Cricket Stadium', date: '2024-03-08' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary-600 mb-4">District-wise Schedule</h1>
            <p className="text-xl text-gray-600">SPL Tournament Match Schedule Across Uttar Pradesh</p>
          </div>

          {/* Tournament Timeline */}
          <div className="card mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-primary-600">Tournament Timeline</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <Calendar className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                <h3 className="font-semibold text-primary-600 mb-2">Week 1-2</h3>
                <p className="text-sm text-gray-600">District Level Matches</p>
              </div>
              
              <div className="text-center p-4 bg-gold-50 rounded-lg">
                <Users className="w-8 h-8 text-gold-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gold-600 mb-2">Week 3</h3>
                <p className="text-sm text-gray-600">Zonal Championships</p>
              </div>
              
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <MapPin className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h3 className="font-semibold text-green-600 mb-2">Week 4</h3>
                <p className="text-sm text-gray-600">State Semi-Finals</p>
              </div>
              
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Clock className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <h3 className="font-semibold text-purple-600 mb-2">Final</h3>
                <p className="text-sm text-gray-600">Ekana Stadium</p>
              </div>
            </div>
          </div>

          {/* District Schedule */}
          <div className="card mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-primary-600">District Level Matches</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {districts.map((district, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-primary-600">{district.name}</h3>
                    <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded-full text-sm">
                      {district.teams} Teams
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{district.venue}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{new Date(district.date).toLocaleDateString()}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">9:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500">
                      Top 2 teams qualify for zonal championship
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Zonal Championships */}
          <div className="card mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gold-600">Zonal Championships</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gold-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gold-600 mb-2">East Zone</h3>
                <p className="text-sm text-gray-600 mb-3">Varanasi, Allahabad, Azamgarh</p>
                <div className="text-xs text-gray-500">
                  <p>Date: March 15-16</p>
                  <p>Venue: Varanasi</p>
                </div>
              </div>
              
              <div className="text-center p-6 bg-gold-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gold-600 mb-2">West Zone</h3>
                <p className="text-sm text-gray-600 mb-3">Agra, Mathura, Aligarh</p>
                <div className="text-xs text-gray-500">
                  <p>Date: March 15-16</p>
                  <p>Venue: Agra</p>
                </div>
              </div>
              
              <div className="text-center p-6 bg-gold-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gold-600 mb-2">North Zone</h3>
                <p className="text-sm text-gray-600 mb-3">Meerut, Bareilly, Moradabad</p>
                <div className="text-xs text-gray-500">
                  <p>Date: March 15-16</p>
                  <p>Venue: Meerut</p>
                </div>
              </div>
              
              <div className="text-center p-6 bg-gold-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gold-600 mb-2">Central Zone</h3>
                <p className="text-sm text-gray-600 mb-3">Lucknow, Kanpur, Unnao</p>
                <div className="text-xs text-gray-500">
                  <p>Date: March 15-16</p>
                  <p>Venue: Lucknow</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final Matches */}
          <div className="card">
            <h2 className="text-2xl font-semibold mb-6 text-green-600">State Level Finals</h2>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg text-center">
              <MapPin className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-600 mb-4">Ekana Cricket Stadium, Lucknow</h3>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Semi-Finals</h4>
                  <p className="text-gray-600 mb-1">March 22, 2024</p>
                  <p className="text-sm text-gray-500">10:00 AM & 3:00 PM</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Grand Final</h4>
                  <p className="text-gray-600 mb-1">March 24, 2024</p>
                  <p className="text-sm text-gray-500">2:00 PM</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Live Streaming:</strong> Available on SPL official website and social media channels
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}