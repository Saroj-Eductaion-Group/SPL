import Link from 'next/link'
import { Trophy, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Trophy className="w-8 h-8 text-gold-400" />
              <div>
                <div className="text-xl font-bold">SPL Under-19</div>
                <div className="text-sm text-gray-400">Saroj Premier League</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Uttar Pradesh's premier cricket tournament for Class 12 students, 
              organized by Saroj Educational Group.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                About SPL
              </Link>
              <Link href="/tournament-format" className="block text-gray-400 hover:text-white transition-colors">
                Tournament Format
              </Link>
              <Link href="/eligibility" className="block text-gray-400 hover:text-white transition-colors">
                Eligibility & Rules
              </Link>
              <Link href="/schedule" className="block text-gray-400 hover:text-white transition-colors">
                Schedule
              </Link>
            </div>
          </div>

          {/* Registration */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Registration</h3>
            <div className="space-y-2">
              <Link href="/register?type=team" className="block text-gray-400 hover:text-white transition-colors">
                Team Registration
              </Link>
              <Link href="/register?type=individual" className="block text-gray-400 hover:text-white transition-colors">
                Individual Registration
              </Link>
              <Link href="/prizes" className="block text-gray-400 hover:text-white transition-colors">
                Prize Money
              </Link>
              <Link href="/scholarships" className="block text-gray-400 hover:text-white transition-colors">
                Scholarships
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gold-400" />
                <span className="text-gray-400 text-sm">info@splcricket.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gold-400" />
                <span className="text-gray-400 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gold-400" />
                <span className="text-gray-400 text-sm">Lucknow, Uttar Pradesh</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Saroj Premier League. All rights reserved. | 
            <span className="text-gold-400"> Organized by Saroj Educational Group</span>
          </p>
        </div>
      </div>
    </footer>
  )
}