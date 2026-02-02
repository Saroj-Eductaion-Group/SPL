import { Award, Users, Star, Trophy } from 'lucide-react'

export default function Sponsors() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary-600 mb-4">Our Sponsors</h1>
            <p className="text-xl text-gray-600">Partners Supporting Youth Cricket Excellence</p>
          </div>

          {/* Title Sponsor */}
          <div className="card mb-8 text-center bg-gradient-to-r from-gold-400 to-gold-600 text-white">
            <Trophy className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Title Sponsor</h2>
            <div className="bg-white p-8 rounded-lg mx-auto max-w-md">
              <div className="h-24 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-500 font-semibold">SAROJ INTERNATIONAL UNIVERSITY</span>
              </div>
              <p className="text-gray-600 text-sm">Academic Partner & Title Sponsor</p>
            </div>
          </div>

          {/* Official Partners */}
          <div className="card mb-8">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-primary-500 mr-3" />
              <h2 className="text-2xl font-semibold text-primary-600">Official Partners</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-500 font-medium">SPORTS BRAND</span>
                </div>
                <h3 className="font-semibold mb-2">Official Kit Partner</h3>
                <p className="text-sm text-gray-600">Providing cricket equipment and team jerseys</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-500 font-medium">TECH COMPANY</span>
                </div>
                <h3 className="font-semibold mb-2">Technology Partner</h3>
                <p className="text-sm text-gray-600">Live streaming and digital solutions</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-500 font-medium">MEDIA HOUSE</span>
                </div>
                <h3 className="font-semibold mb-2">Media Partner</h3>
                <p className="text-sm text-gray-600">Tournament coverage and broadcasting</p>
              </div>
            </div>
          </div>

          {/* Associate Sponsors */}
          <div className="card mb-8">
            <div className="flex items-center mb-6">
              <Star className="w-8 h-8 text-gold-500 mr-3" />
              <h2 className="text-2xl font-semibold text-gold-600">Associate Sponsors</h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4">
              {[1,2,3,4,5,6,7,8].map((item) => (
                <div key={item} className="text-center p-4 border border-gray-200 rounded-lg">
                  <div className="h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-gray-400 text-sm">SPONSOR {item}</span>
                  </div>
                  <p className="text-xs text-gray-600">Associate Partner</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sponsorship Benefits */}
          <div className="card mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-primary-600">Sponsorship Benefits</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gold-600">Brand Visibility</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Logo placement on team jerseys</li>
                  <li>• Stadium branding and banners</li>
                  <li>• Website and digital presence</li>
                  <li>• Live streaming brand integration</li>
                  <li>• Social media promotion</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary-600">Marketing Opportunities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Product sampling at venues</li>
                  <li>• Corporate hospitality packages</li>
                  <li>• Player endorsement opportunities</li>
                  <li>• Award ceremony participation</li>
                  <li>• Media interview opportunities</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sponsorship Packages */}
          <div className="card mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-primary-600">Sponsorship Packages</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-2 border-gold-400 rounded-lg p-6 text-center">
                <Award className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gold-600 mb-2">Title Sponsor</h3>
                <div className="text-3xl font-bold text-gold-600 mb-4">₹50L+</div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Tournament naming rights</li>
                  <li>• Maximum brand visibility</li>
                  <li>• VIP hospitality</li>
                  <li>• Media partnerships</li>
                </ul>
              </div>
              
              <div className="border-2 border-primary-400 rounded-lg p-6 text-center">
                <Trophy className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary-600 mb-2">Official Partner</h3>
                <div className="text-3xl font-bold text-primary-600 mb-4">₹20L+</div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Category exclusivity</li>
                  <li>• Stadium branding</li>
                  <li>• Digital presence</li>
                  <li>• Hospitality packages</li>
                </ul>
              </div>
              
              <div className="border-2 border-green-400 rounded-lg p-6 text-center">
                <Star className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-600 mb-2">Associate</h3>
                <div className="text-3xl font-bold text-green-600 mb-4">₹5L+</div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Logo placement</li>
                  <li>• Website listing</li>
                  <li>• Social media mentions</li>
                  <li>• Networking opportunities</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact for Sponsorship */}
          <div className="card text-center">
            <h2 className="text-2xl font-semibold mb-4 text-primary-600">Become a Sponsor</h2>
            <p className="text-gray-600 mb-6">
              Join us in supporting youth cricket and building the future of sports in Uttar Pradesh
            </p>
            
            <div className="bg-primary-50 p-6 rounded-lg max-w-md mx-auto">
              <h3 className="font-semibold mb-3">Sponsorship Inquiries</h3>
              <p className="text-sm text-gray-600 mb-2">Email: sponsors@splcricket.com</p>
              <p className="text-sm text-gray-600 mb-4">Phone: +91 98765 43213</p>
              <button className="btn-primary">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}