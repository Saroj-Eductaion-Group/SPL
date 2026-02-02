import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary-600 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">Get in touch with SPL Tournament Team</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="card">
              <h2 className="text-2xl font-semibold mb-6 text-primary-600">Tournament Office</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">
                      Saroj Educational Group<br />
                      Lucknow, Uttar Pradesh<br />
                      India - 226001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone Numbers</h3>
                    <p className="text-gray-600">
                      Main Office: +91 98765 43210<br />
                      Registration Help: +91 98765 43211<br />
                      Technical Support: +91 98765 43212
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email Addresses</h3>
                    <p className="text-gray-600">
                      General: info@splcricket.com<br />
                      Registration: register@splcricket.com<br />
                      Support: support@splcricket.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-semibold mb-6 text-gold-600">Send Message</h2>
              
              <form className="space-y-4">
                <div>
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-input" placeholder="Enter your name" />
                </div>

                <div>
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-input" placeholder="Enter your email" />
                </div>

                <div>
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-input" placeholder="Enter your phone" />
                </div>

                <div>
                  <label className="form-label">Subject</label>
                  <select className="form-input">
                    <option>Select subject</option>
                    <option>Registration Query</option>
                    <option>Payment Issue</option>
                    <option>Technical Support</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="form-label">Message</label>
                  <textarea 
                    className="form-input" 
                    rows={4} 
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-semibold mb-2">24/7 Helpline</h3>
              <p className="text-sm text-gray-600">
                Call us anytime for urgent queries during tournament period
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="font-semibold mb-2">Quick Response</h3>
              <p className="text-sm text-gray-600">
                Email responses within 24 hours on business days
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Visit Office</h3>
              <p className="text-sm text-gray-600">
                Walk-in consultations available during office hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}