import React from 'react';
import { Heart, Sparkles, CheckCircle2, AlertCircle, Users, Target, ArrowRight, Star } from 'lucide-react';

const FriendlyApproachable = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 font-body">
      {/* Decorative Elements - Hidden on mobile */}
      <div className="hidden lg:block absolute top-20 left-10 text-orange-400 opacity-60">
        <Sparkles size={24} />
      </div>
      <div className="hidden lg:block absolute top-40 right-20 text-amber-400 opacity-60">
        <Star size={20} />
      </div>
      <div className="hidden lg:block absolute top-60 left-1/4 text-orange-300 opacity-40">
        <Heart size={16} />
      </div>
      <div className="hidden lg:block absolute bottom-40 right-10 text-amber-300 opacity-50">
        <Sparkles size={28} />
      </div>

      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-orange-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-orange-400 to-amber-500 rounded-3xl flex items-center justify-center shadow-lg">
                <Heart className="text-white" size={24} />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Audit<span className="text-orange-500">Tool</span>
                </h1>
                <p className="text-sm sm:text-base text-gray-600">Making accessibility simple and approachable</p>
              </div>
            </div>
            <button className="bg-gradient-to-r from-orange-400 to-amber-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl hover:shadow-lg transition-all duration-300 font-semibold flex items-center text-sm sm:text-base">
              Start a new scan
              <ArrowRight className="ml-2" size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Welcome Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex space-x-2">
              <Sparkles className="text-orange-400" size={24} />
              <Target className="text-amber-500" size={24} />
              <Sparkles className="text-orange-400" size={24} />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
            Your accessibility journey starts here
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Turn any website into an accessible experience for everyone. 
            We'll guide you through each step with clear, actionable insights.
          </p>
        </div>

        {/* Main Input Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-12 shadow-xl border border-orange-100 mb-12 sm:mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="mb-6 sm:mb-8">
              <label htmlFor="website-url" className="block text-lg font-semibold text-gray-700 mb-4">
                Enter your website URL to get started:
              </label>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  type="url"
                  id="website-url"
                  placeholder="https://your-website.com"
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border-2 border-orange-200 rounded-2xl focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all"
                />
                <button className="bg-gradient-to-r from-orange-400 to-amber-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap">
                  Scan
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 sm:mb-8">
              <div className="flex items-center">
                <input type="checkbox" id="include-subpages" className="mr-3 w-5 h-5 text-orange-500 rounded focus:ring-orange-400" />
                <label htmlFor="include-subpages" className="text-gray-700 font-medium">Include subpages</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="detailed-report" className="mr-3 w-5 h-5 text-orange-500 rounded focus:ring-orange-400" />
                <label htmlFor="detailed-report" className="text-gray-700 font-medium">Detailed report</label>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500 mb-4">Try these example websites:</p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {['GitHub', 'Wikipedia', 'Medium', 'Shopify', 'WordPress'].map((example) => (
                  <button
                    key={example}
                    className="px-3 sm:px-4 py-2 bg-orange-100 text-orange-700 rounded-xl hover:bg-orange-200 transition-colors font-medium text-sm"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Current Results Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Score Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg border border-orange-100 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <CheckCircle2 className="text-white" size={24} />
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">78</h3>
            <p className="text-gray-600 font-semibold mb-2">Accessibility Score</p>
            <p className="text-sm text-gray-500">You're doing great! Keep it up.</p>
            <div className="mt-4 bg-gray-100 rounded-full h-3">
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-3 rounded-full" style={{ width: '78%' }}></div>
            </div>
          </div>

          {/* People Helped */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg border border-orange-100 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Users className="text-white" size={24} />
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">2.4K</h3>
            <p className="text-gray-600 font-semibold mb-2">People Helped</p>
            <p className="text-sm text-gray-500">Estimated users who benefit from your improvements.</p>
          </div>

          {/* Issues Fixed */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg border border-orange-100 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Target className="text-white" size={24} />
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">89</h3>
            <p className="text-gray-600 font-semibold mb-2">Issues Resolved</p>
            <p className="text-sm text-gray-500">Amazing progress! You're making a difference.</p>
          </div>
        </div>

        {/* Issues to Fix */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-10 shadow-lg border border-orange-100 mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Let's make your site even better</h3>
            <p className="text-base sm:text-lg text-gray-600">Here are some friendly suggestions to improve accessibility</p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {[
              {
                title: 'Add descriptions to your images',
                description: 'Help people using screen readers understand your visual content. It\'s easier than you think!',
                count: 23,
                color: 'from-red-400 to-pink-400',
                bgColor: 'bg-red-50',
                borderColor: 'border-red-200'
              },
              {
                title: 'Make your text easier to read',
                description: 'Improve color contrast so everyone can read your content comfortably.',
                count: 45,
                color: 'from-orange-400 to-yellow-400',
                bgColor: 'bg-orange-50',
                borderColor: 'border-orange-200'
              },
              {
                title: 'Label your form fields clearly',
                description: 'Make it crystal clear what information you\'re asking for in forms.',
                count: 12,
                color: 'from-blue-400 to-cyan-400',
                bgColor: 'bg-blue-50',
                borderColor: 'border-blue-200'
              }
            ].map((issue, index) => (
              <div key={index} className={`${issue.bgColor} ${issue.borderColor} border-2 rounded-2xl p-6 sm:p-8`}>
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-2 sm:gap-4">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-800">{issue.title}</h4>
                      <span className={`px-3 sm:px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${issue.color} text-white self-start`}>
                        {issue.count} items
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">{issue.description}</p>
                    <button className="bg-white/80 hover:bg-white text-gray-700 px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-colors font-semibold shadow-sm border border-gray-200 text-sm sm:text-base">
                      Show me how to fix this →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-10 shadow-lg border border-orange-100">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">Your recent scans</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { name: 'Homepage', score: 82, time: '2 hours ago', status: 'Improved!' },
              { name: 'About Page', score: 76, time: '1 day ago', status: 'Good progress' },
              { name: 'Contact Form', score: 91, time: '3 days ago', status: 'Excellent!' },
            ].map((scan, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-gray-800 text-base sm:text-lg">{scan.name}</h4>
                  <div className="text-xl sm:text-2xl font-bold text-gray-800">{scan.score}</div>
                </div>
                <div className="mb-3">
                  <div className="bg-gray-100 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${scan.score}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">{scan.time}</span>
                  <span className="text-green-600 font-semibold">{scan.status}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <p className="text-gray-600 mb-4 sm:mb-6">Ready to scan another page?</p>
            <button className="bg-gradient-to-r from-orange-400 to-amber-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300">
              Start New Scan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendlyApproachable;