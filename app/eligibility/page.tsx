import { AlertCircle, CheckCircle, XCircle } from 'lucide-react'

export default function Eligibility() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary-600 mb-4">Eligibility & Rules</h1>
            <p className="text-xl text-gray-600">Tournament Guidelines and Requirements</p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-primary-600 flex items-center">
              <CheckCircle className="w-6 h-6 mr-2" />
              Eligibility Criteria
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-green-600">Player Requirements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    Must be Under-19 years of age
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    Currently enrolled in Class 12
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    Resident of Uttar Pradesh
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    Valid Aadhaar Card required
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-600">Team Requirements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    Minimum 11, Maximum 15 players
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    All players from same district
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    Coach and Manager details
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    Registration fee: ₹11,000
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-red-600 flex items-center">
              <XCircle className="w-6 h-6 mr-2" />
              Disqualification Criteria
            </h2>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <XCircle className="w-4 h-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Age Fraud:</strong> Providing false age documents will lead to immediate disqualification</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-4 h-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Fake Documents:</strong> Submission of forged or invalid documents</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-4 h-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Misconduct:</strong> Unsporting behavior or violation of tournament rules</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-4 h-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Incomplete Registration:</strong> Missing required documents or information</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gold-600">Tournament Rules</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Match Rules</h3>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• Each match will be 20 overs per side</li>
                  <li>• Powerplay for first 6 overs (only 2 fielders outside 30-yard circle)</li>
                  <li>• Maximum 4 overs per bowler</li>
                  <li>• DLS method will be used for rain-affected matches</li>
                  <li>• No ball and wide ball penalties as per ICC rules</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Player Substitution</h3>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• Maximum 2 player changes allowed between matches</li>
                  <li>• Substitute players must be from the same district</li>
                  <li>• Changes must be approved by tournament committee</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Equipment & Dress Code</h3>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• Standard cricket whites or colored clothing</li>
                  <li>• Protective gear mandatory (helmet, pads, gloves)</li>
                  <li>• Only leather balls will be used</li>
                  <li>• Bat specifications as per ICC guidelines</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold mb-6 text-orange-600 flex items-center">
              <AlertCircle className="w-6 h-6 mr-2" />
              Important Notes
            </h2>
            
            <div className="bg-orange-50 p-6 rounded-lg">
              <ul className="space-y-3 text-gray-700">
                <li>• Registration fee is non-refundable once payment is completed</li>
                <li>• Tournament committee decisions are final and binding</li>
                <li>• Players must carry original documents during matches</li>
                <li>• Medical certificate may be required if requested</li>
                <li>• All participants are covered under tournament insurance</li>
                <li>• Weather conditions may affect match schedules</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}