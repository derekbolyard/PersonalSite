import React from 'react';
import { Heart, Star, Sparkles, CheckCircle, AlertTriangle, Users, Target, Zap } from 'lucide-react';

const PlayfulWhimsical = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-playful-mint to-playful-yellow font-playful">
      {/* Floating decorative elements */}
      <div className="fixed top-20 left-10 text-playful-pink animate-bounce-slow opacity-60">
        <Star size={24} />
      </div>
      <div className="fixed top-40 right-20 text-playful-purple animate-pulse opacity-60">
        <Heart size={20} />
      </div>
      <div className="fixed bottom-40 left-20 text-playful-coral animate-wiggle opacity-60">
        <Sparkles size={28} />
      </div>

      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b-4 border-playful-pink">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-r from-playful-pink to-playful-purple rounded-3xl flex items-center justify-center shadow-playful animate-bounce-slow">
                <Heart className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  Audit<span className="text-playful-pink">Tool</span> ✨
                </h1>
                <p className="text-playful-purple font-medium">Making accessibility fun and easy! 🎉</p>
              </div>
            </div>
            <button className="bg-gradient-to-r from-playful-pink to-playful-purple text-white px-8 py-4 rounded-3xl hover:shadow-playful transition-all duration-300 font-bold text-lg animate-pulse">
              🚀 Start New Scan
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Fun Stats */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Your Awesome Progress! 🎊
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Look how amazing you're doing! Every improvement makes the web better for everyone 💖
          </p>
        </div>

        {/* Colorful Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-playful-pink to-playful-coral rounded-3xl p-8 text-white shadow-playful transform hover:scale-105 transition-transform">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-slow">
                <CheckCircle size={32} />
              </div>
              <div className="text-5xl font-bold mb-2">78</div>
              <div className="text-xl font-semibold">Accessibility Score</div>
              <div className="text-sm opacity-90 mt-2">You're doing great! 🌟</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-playful-purple to-playful-pink rounded-3xl p-8 text-white shadow-playful transform hover:scale-105 transition-transform">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Users size={32} />
              </div>
              <div className="text-5xl font-bold mb-2">2.4K</div>
              <div className="text-xl font-semibold">People Helped</div>
              <div className="text-sm opacity-90 mt-2">Amazing impact! 💪</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-playful-mint to-playful-yellow rounded-3xl p-8 text-gray-800 shadow-playful transform hover:scale-105 transition-transform">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-4 animate-wiggle">
                <Target size={32} />
              </div>
              <div className="text-5xl font-bold mb-2">89</div>
              <div className="text-xl font-semibold">Issues Fixed</div>
              <div className="text-sm opacity-90 mt-2">Keep it up! 🎯</div>
            </div>
          </div>
        </div>

        {/* Fun Issues Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-playful mb-16">
          <div className="text-center mb-10">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Let's Fix These Together! 🛠️
            </h3>
            <p className="text-xl text-gray-600">
              Don't worry, we'll make it super easy and fun! ✨
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: '🖼️ Images need descriptions',
                description: 'Help everyone understand your awesome images!',
                count: 23,
                color: 'from-playful-pink to-playful-coral',
                bgColor: 'bg-pink-50',
                emoji: '🎨'
              },
              {
                title: '🌈 Make text easier to read',
                description: 'Boost those colors so everyone can enjoy your content!',
                count: 45,
                color: 'from-playful-purple to-playful-pink',
                bgColor: 'bg-purple-50',
                emoji: '👀'
              },
              {
                title: '📝 Label your forms clearly',
                description: 'Make forms super friendly and easy to use!',
                count: 12,
                color: 'from-playful-mint to-playful-yellow',
                bgColor: 'bg-green-50',
                emoji: '✍️'
              }
            ].map((issue, index) => (
              <div key={index} className={`${issue.bgColor} rounded-3xl p-8 border-4 border-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{issue.emoji}</span>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-800">{issue.title}</h4>
                        <span className={`px-4 py-2 rounded-full text-white font-bold bg-gradient-to-r ${issue.color} text-sm`}>
                          {issue.count} items to fix! 🎯
                        </span>
                      </div>
                    </div>
                    <p className="text-lg text-gray-700 mb-6">{issue.description}</p>
                    <button className={`bg-gradient-to-r ${issue.color} text-white px-8 py-4 rounded-2xl font-bold hover:shadow-playful transition-all transform hover:scale-105`}>
                      Let's Fix This! 🚀
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Scans with Fun Design */}
        <div className="bg-gradient-to-r from-playful-purple to-playful-pink rounded-3xl p-10 text-white shadow-playful">
          <div className="text-center mb-10">
            <h3 className="text-4xl font-bold mb-4">Your Recent Adventures! 🗺️</h3>
            <p className="text-xl opacity-90">Check out all the awesome progress you've made!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Homepage', score: 82, time: '2 hours ago', emoji: '🏠', status: 'Improved!' },
              { name: 'About Page', score: 76, time: '1 day ago', emoji: '👋', status: 'Good work!' },
              { name: 'Contact Form', score: 91, time: '3 days ago', emoji: '📞', status: 'Excellent!' },
            ].map((scan, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all transform hover:scale-105">
                <div className="text-center">
                  <div className="text-4xl mb-4">{scan.emoji}</div>
                  <div className="text-3xl font-bold mb-2">{scan.score}</div>
                  <div className="font-semibold mb-2">{scan.name}</div>
                  <div className="text-sm opacity-80 mb-3">{scan.time}</div>
                  <div className="bg-white/20 rounded-full px-3 py-1 text-sm font-bold">
                    {scan.status}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="bg-white text-playful-purple px-10 py-4 rounded-3xl font-bold text-xl hover:shadow-lg transition-all transform hover:scale-105">
              🎉 Scan Another Page!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayfulWhimsical;