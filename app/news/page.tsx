import { Calendar, Clock, User, Bell } from 'lucide-react'

export default function News() {
  const news = [
    {
      id: 1,
      title: "SPL 2024 Registration Opens",
      excerpt: "Team and individual registrations are now open for Saroj Premier League Under-19 tournament.",
      date: "2024-02-15",
      author: "SPL Committee",
      category: "Registration",
      featured: true
    },
    {
      id: 2,
      title: "Ekana Stadium Confirmed as Final Venue",
      excerpt: "The grand finale of SPL will be held at the prestigious Ekana Cricket Stadium in Lucknow.",
      date: "2024-02-10",
      author: "Tournament Director",
      category: "Venue",
      featured: true
    },
    {
      id: 3,
      title: "Prize Money Increased to ₹11 Lakhs",
      excerpt: "Winner prize money has been increased to ₹11,00,000 making it the biggest U19 tournament in UP.",
      date: "2024-02-08",
      author: "SPL Management",
      category: "Prize",
      featured: false
    },
    {
      id: 4,
      title: "50% Scholarship for All Participants",
      excerpt: "Every player participating in SPL will be eligible for 50% scholarship at Saroj International University.",
      date: "2024-02-05",
      author: "Academic Partner",
      category: "Scholarship",
      featured: false
    },
    {
      id: 5,
      title: "District Coordinators Appointed",
      excerpt: "Experienced cricket professionals have been appointed as district coordinators across UP.",
      date: "2024-02-01",
      author: "SPL Committee",
      category: "Management",
      featured: false
    }
  ]

  const announcements = [
    {
      title: "Registration Deadline Extended",
      message: "Team registration deadline extended to March 1st, 2024",
      type: "important",
      date: "2024-02-20"
    },
    {
      title: "Document Verification Process",
      message: "All players must upload Aadhaar and school ID during registration",
      type: "info",
      date: "2024-02-18"
    },
    {
      title: "Payment Gateway Update",
      message: "New payment options added for easier registration fee payment",
      type: "update",
      date: "2024-02-16"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary-600 mb-4">News & Announcements</h1>
            <p className="text-xl text-gray-600">Latest Updates from SPL Tournament</p>
          </div>

          {/* Important Announcements */}
          <div className="card mb-8">
            <div className="flex items-center mb-6">
              <Bell className="w-8 h-8 text-red-500 mr-3" />
              <h2 className="text-2xl font-semibold text-red-600">Important Announcements</h2>
            </div>
            
            <div className="space-y-4">
              {announcements.map((announcement, index) => (
                <div key={index} className={`p-4 rounded-lg border-l-4 ${
                  announcement.type === 'important' ? 'bg-red-50 border-red-400' :
                  announcement.type === 'info' ? 'bg-blue-50 border-blue-400' :
                  'bg-green-50 border-green-400'
                }`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold mb-1">{announcement.title}</h3>
                      <p className="text-gray-600 text-sm">{announcement.message}</p>
                    </div>
                    <span className="text-xs text-gray-500">{announcement.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured News */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {news.filter(item => item.featured).map((item) => (
              <div key={item.id} className="card">
                <div className="h-48 bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">SPL NEWS</span>
                </div>
                
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <User className="w-4 h-4 mr-1" />
                    {item.author}
                  </div>
                  <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* All News */}
          <div className="card">
            <h2 className="text-2xl font-semibold mb-6 text-primary-600">Latest News</h2>
            
            <div className="space-y-6">
              {news.map((item) => (
                <div key={item.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div className="flex items-center space-x-4 mb-2 md:mb-0">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        item.category === 'Registration' ? 'bg-green-100 text-green-600' :
                        item.category === 'Venue' ? 'bg-blue-100 text-blue-600' :
                        item.category === 'Prize' ? 'bg-gold-100 text-gold-600' :
                        item.category === 'Scholarship' ? 'bg-purple-100 text-purple-600' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {item.category}
                      </span>
                      
                      {item.featured && (
                        <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-4 text-gray-500 text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(item.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {item.author}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 hover:text-primary-600 cursor-pointer">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.excerpt}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="card mt-8 text-center bg-gradient-to-r from-primary-50 to-gold-50">
            <h2 className="text-2xl font-semibold mb-4 text-primary-600">Stay Updated</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to get the latest news and announcements about SPL tournament
            </p>
            
            <div className="max-w-md mx-auto flex space-x-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary">Subscribe</button>
            </div>
            
            <p className="text-xs text-gray-500 mt-4">
              We'll only send important tournament updates. No spam.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}