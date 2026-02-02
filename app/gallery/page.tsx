import { Camera, Play, Download, Eye } from 'lucide-react'

export default function Gallery() {
  const photos = [
    { id: 1, title: "Tournament Launch", category: "Events", src: "/images/launch.jpg" },
    { id: 2, title: "Team Registration", category: "Registration", src: "/images/registration.jpg" },
    { id: 3, title: "Practice Session", category: "Training", src: "/images/practice.jpg" },
    { id: 4, title: "District Match", category: "Matches", src: "/images/district.jpg" },
    { id: 5, title: "Player Action", category: "Matches", src: "/images/action.jpg" },
    { id: 6, title: "Award Ceremony", category: "Events", src: "/images/awards.jpg" },
    { id: 7, title: "Team Celebration", category: "Matches", src: "/images/celebration.jpg" },
    { id: 8, title: "Coaching Session", category: "Training", src: "/images/coaching.jpg" }
  ]

  const videos = [
    { id: 1, title: "SPL 2024 Promo", duration: "2:30", thumbnail: "/videos/promo.jpg" },
    { id: 2, title: "Best Catches Compilation", duration: "5:45", thumbnail: "/videos/catches.jpg" },
    { id: 3, title: "Final Match Highlights", duration: "8:20", thumbnail: "/videos/final.jpg" },
    { id: 4, title: "Player Interviews", duration: "12:15", thumbnail: "/videos/interviews.jpg" }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary-600 mb-4">Gallery</h1>
            <p className="text-xl text-gray-600">Capturing the Spirit of SPL Tournament</p>
          </div>

          {/* Photo Gallery */}
          <div className="card mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Camera className="w-8 h-8 text-primary-500 mr-3" />
                <h2 className="text-2xl font-semibold text-primary-600">Photo Gallery</h2>
              </div>
              
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-primary-500 text-white rounded-lg text-sm">All</button>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-300">Events</button>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-300">Matches</button>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-300">Training</button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {photos.map((photo) => (
                <div key={photo.id} className="group relative overflow-hidden rounded-lg bg-gray-200 aspect-square">
                  <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                    <Camera className="w-12 h-12 text-white opacity-50" />
                  </div>
                  
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                      <button className="p-2 bg-white rounded-full hover:bg-gray-100">
                        <Eye className="w-4 h-4 text-gray-700" />
                      </button>
                      <button className="p-2 bg-white rounded-full hover:bg-gray-100">
                        <Download className="w-4 h-4 text-gray-700" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-medium text-sm">{photo.title}</h3>
                    <p className="text-gray-300 text-xs">{photo.category}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-6">
              <button className="btn-primary">Load More Photos</button>
            </div>
          </div>

          {/* Video Gallery */}
          <div className="card mb-8">
            <div className="flex items-center mb-6">
              <Play className="w-8 h-8 text-gold-500 mr-3" />
              <h2 className="text-2xl font-semibold text-gold-600">Video Gallery</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videos.map((video) => (
                <div key={video.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg bg-gray-200 aspect-video mb-3">
                    <div className="w-full h-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                      <Play className="w-12 h-12 text-white opacity-50" />
                    </div>
                    
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Play className="w-6 h-6 text-gray-700 ml-1" />
                      </div>
                    </div>
                    
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
                      {video.duration}
                    </div>
                  </div>
                  
                  <h3 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                    {video.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Live Stream Section */}
          <div className="card mb-8 text-center bg-gradient-to-r from-red-50 to-pink-50">
            <div className="flex items-center justify-center mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-2"></div>
              <h2 className="text-2xl font-semibold text-red-600">Live Stream</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Watch SPL matches live during the tournament period
            </p>
            
            <div className="bg-white p-8 rounded-lg max-w-2xl mx-auto">
              <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center text-white">
                  <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Live Stream Will Start During Tournament</p>
                  <p className="text-sm opacity-75">March 1 - March 24, 2024</p>
                </div>
              </div>
              
              <div className="flex justify-center space-x-4">
                <button className="btn-primary">Set Reminder</button>
                <button className="btn-gold">Subscribe for Updates</button>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="card text-center">
            <h2 className="text-2xl font-semibold mb-4 text-primary-600">Follow SPL on Social Media</h2>
            <p className="text-gray-600 mb-6">
              Get real-time updates, behind-the-scenes content, and exclusive photos
            </p>
            
            <div className="flex justify-center space-x-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-2 mx-auto">
                  <span className="text-white font-bold">f</span>
                </div>
                <p className="text-sm text-gray-600">Facebook</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-2 mx-auto">
                  <span className="text-white font-bold">📷</span>
                </div>
                <p className="text-sm text-gray-600">Instagram</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mb-2 mx-auto">
                  <span className="text-white font-bold">T</span>
                </div>
                <p className="text-sm text-gray-600">Twitter</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-2 mx-auto">
                  <span className="text-white font-bold">▶</span>
                </div>
                <p className="text-sm text-gray-600">YouTube</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}