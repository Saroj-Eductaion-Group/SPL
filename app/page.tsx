import Link from 'next/link'
import { Trophy, Users, Calendar, MapPin } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Saroj Premier League
            <span className="block text-gold-400">Under-19</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Uttar Pradesh's Premier Cricket Tournament for Class 12 Students
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="btn-gold">
              Register Now
            </Link>
            <Link href="/about" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tournament Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <Trophy className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">₹11,00,000</h3>
              <p className="text-gray-600">Winner Prize Money</p>
            </div>
            <div className="card text-center">
              <Users className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">50% Scholarship</h3>
              <p className="text-gray-600">For All Players</p>
            </div>
            <div className="card text-center">
              <Calendar className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">1 Month</h3>
              <p className="text-gray-600">Tournament Duration</p>
            </div>
            <div className="card text-center">
              <MapPin className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ekana Stadium</h3>
              <p className="text-gray-600">Final Venue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How to Register</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Team Registration</h3>
              <p className="text-gray-600 mb-4">Already have a team? Register directly with your complete squad.</p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li>• Up to 15 players</li>
                <li>• Coach & Manager details</li>
                <li>• Registration fee: ₹11,000</li>
              </ul>
              <Link href="/register?type=team" className="btn-primary">
                Register Team
              </Link>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-gold-600">Individual Registration</h3>
              <p className="text-gray-600 mb-4">Don't have a team? Register individually and we'll assign you to a district team.</p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li>• Individual player profile</li>
                <li>• District-wise team formation</li>
                <li>• Registration fee: ₹1,000</li>
              </ul>
              <Link href="/register?type=individual" className="btn-gold">
                Register Individual
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Links</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/tournament-format" className="card hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Tournament Format</h3>
              <p className="text-gray-600">Learn about the tournament structure and format</p>
            </Link>
            <Link href="/eligibility" className="card hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Eligibility & Rules</h3>
              <p className="text-gray-600">Check eligibility criteria and tournament rules</p>
            </Link>
            <Link href="/schedule" className="card hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold mb-2">District Schedule</h3>
              <p className="text-gray-600">View district-wise match schedules</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}