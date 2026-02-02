import { Trophy, Users, Calendar, MapPin, Award, GraduationCap } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary-600 mb-4">
              About Saroj Premier League
            </h1>
            <p className="text-xl text-gray-600">
              Uttar Pradesh's Premier Cricket Tournament for Under-19 Students
            </p>
          </div>

          {/* Overview */}
          <div className="card mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary-600">Tournament Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Saroj Premier League (SPL) is a prestigious Under-19 cricket tournament 
              organized by Saroj Educational Group in partnership with Saroj International University. 
              This statewide tournament is exclusively designed for Class 12 students across Uttar Pradesh, 
              providing them with a platform to showcase their cricketing talent while pursuing their education.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With a duration of one month, SPL features simultaneous district-level matches 
              culminating in a grand finale at the iconic Ekana Cricket Stadium in Lucknow.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="card text-center">
              <Trophy className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">₹11,00,000 Prize</h3>
              <p className="text-gray-600 text-sm">
                Massive winner prize money for the champion team
              </p>
            </div>
            
            <div className="card text-center">
              <GraduationCap className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">50% Scholarship</h3>
              <p className="text-gray-600 text-sm">
                All participating players eligible for university scholarship
              </p>
            </div>
            
            <div className="card text-center">
              <Calendar className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">1 Month Duration</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive tournament spanning across the state
              </p>
            </div>
            
            <div className="card text-center">
              <MapPin className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Ekana Stadium Final</h3>
              <p className="text-gray-600 text-sm">
                Grand finale at Lucknow's premier cricket venue
              </p>
            </div>
            
            <div className="card text-center">
              <Users className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Statewide Participation</h3>
              <p className="text-gray-600 text-sm">
                Teams from all districts of Uttar Pradesh
              </p>
            </div>
            
            <div className="card text-center">
              <Award className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Professional Standards</h3>
              <p className="text-gray-600 text-sm">
                Tournament conducted with professional cricket standards
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="card">
              <h2 className="text-xl font-semibold mb-4 text-primary-600">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To provide a premier platform for young cricketers in Uttar Pradesh 
                to showcase their talent, develop their skills, and pursue their 
                dreams while maintaining focus on their academic excellence.
              </p>
            </div>
            
            <div className="card">
              <h2 className="text-xl font-semibold mb-4 text-gold-600">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To become the most prestigious Under-19 cricket tournament in India, 
                nurturing future cricket stars while promoting education and 
                sportsmanship among the youth.
              </p>
            </div>
          </div>

          {/* Organizers */}
          <div className="card mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-primary-600">Organizers</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gold-600">Saroj Educational Group</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  A leading educational institution committed to providing quality education 
                  and holistic development opportunities for students across various disciplines.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-primary-600">Saroj International University</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Academic partner offering scholarships and educational opportunities 
                  to tournament participants, bridging sports and academics.
                </p>
              </div>
            </div>
          </div>

          {/* Tournament Highlights */}
          <div className="card">
            <h2 className="text-2xl font-semibold mb-6 text-primary-600">Why Participate in SPL?</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gold-500 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Educational Benefits:</strong> 50% scholarship opportunity at Saroj International University
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Professional Exposure:</strong> Play at professional venues with standard equipment
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gold-500 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Skill Development:</strong> Learn from experienced coaches and mentors
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Network Building:</strong> Connect with fellow cricketers and sports professionals
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gold-500 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Recognition:</strong> State-level recognition and media coverage
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}