import React from 'react';
import { Heart, Users, Shield, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

const HumanCentric = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 font-body">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-soft">
                <Heart className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">AuditTool</h1>
                <p className="text-sm text-gray-600">Making the web accessible for everyone</p>
              </div>
            </div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-2xl hover:shadow-lg transition-all duration-300 font-medium">
              Start New Scan
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Your Accessibility Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to help you create inclusive digital experiences that work for everyone. 
            Let's make the web a more accessible place, together.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-white/50 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="text-white" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">78</h3>
            <p className="text-gray-600 font-medium">Accessibility Score</p>
            <p className="text-sm text-gray-500 mt-2">Great progress! You're on the right track.</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-white/50 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">2.4K</h3>
            <p className="text-gray-600 font-medium">People Helped</p>
            <p className="text-sm text-gray-500 mt-2">Estimated users who benefit from your improvements.</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-white/50 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="text-white" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">89</h3>
            <p className="text-gray-600 font-medium">Issues Resolved</p>
            <p className="text-sm text-gray-500 mt-2">Amazing work! Keep up the momentum.</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Issues to Address */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-white/50">
            <div className="flex items-center mb-6">
              <Shield className="text-blue-500 mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-800">Let's Fix These Together</h3>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  title: 'Images need descriptions',
                  description: 'Help screen reader users understand your visual content',
                  count: 23,
                  impact: 'High',
                  color: 'from-red-400 to-pink-500',
                  bgColor: 'bg-red-50'
                },
                {
                  title: 'Text could be easier to read',
                  description: 'Improve contrast to help users with visual impairments',
                  count: 45,
                  impact: 'Medium',
                  color: 'from-orange-400 to-yellow-500',
                  bgColor: 'bg-orange-50'
                },
                {
                  title: 'Forms need better labels',
                  description: 'Make it clearer what information users should provide',
                  count: 12,
                  impact: 'Medium',
                  color: 'from-blue-400 to-cyan-500',
                  bgColor: 'bg-blue-50'
                }
              ].map((issue, index) => (
                <div key={index} className={`${issue.bgColor} rounded-2xl p-6 border border-white/50`}>
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-800">{issue.title}</h4>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${issue.color} text-white`}>
                      {issue.count} items
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{issue.description}</p>
                  <button className="bg-white/80 text-gray-700 px-6 py-2 rounded-xl hover:bg-white transition-colors font-medium">
                    Show me how to fix this
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Progress & Encouragement */}
          <div className="space-y-8">
            {/* Progress */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-white/50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Progress</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-700 font-medium">Overall Accessibility</span>
                    <span className="text-2xl font-bold text-gray-800">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-3 rounded-full transition-all duration-500" style={{ width: '78%' }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">You've improved by 12 points this month! 🎉</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-700 font-medium">Issues Resolved</span>
                    <span className="text-2xl font-bold text-gray-800">57%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-3 rounded-full transition-all duration-500" style={{ width: '57%' }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Great momentum! You're making a real difference.</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-white/50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Recent Scans</h3>
              
              <div className="space-y-4">
                {[
                  { url: 'Homepage', score: 82, time: '2 hours ago', trend: 'up' },
                  { url: 'About Page', score: 76, time: '1 day ago', trend: 'up' },
                  { url: 'Contact Form', score: 91, time: '3 days ago', trend: 'same' },
                ].map((scan, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/50 rounded-2xl border border-white/30">
                    <div>
                      <div className="font-semibold text-gray-800">{scan.url}</div>
                      <div className="text-sm text-gray-600">{scan.time}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-800">{scan.score}</div>
                      <div className="text-sm text-gray-600">accessibility score</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumanCentric;