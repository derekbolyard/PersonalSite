import React from 'react';
import { Zap, Eye, TrendingUp, Star, Gamepad2, Radio } from 'lucide-react';

const EightiesRetro = () => {
  return (
    <div className="min-h-screen bg-black text-white font-retro overflow-hidden relative">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 0, 127, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 127, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Neon Border */}
      <div className="fixed inset-0 border-4 border-retro-cyan pointer-events-none"></div>

      {/* Header */}
      <div className="relative z-10 bg-gradient-to-r from-retro-purple to-retro-pink border-b-4 border-retro-cyan">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-retro-cyan border-4 border-retro-pink flex items-center justify-center shadow-retro animate-pulse">
                <Zap className="text-black" size={32} />
              </div>
              <div>
                <h1 className="text-4xl font-black tracking-wider">
                  AUDIT<span className="text-retro-cyan">TOOL</span>
                </h1>
                <p className="text-retro-yellow font-bold text-lg">RADICAL ACCESSIBILITY SCANNER</p>
              </div>
            </div>
            <button className="bg-retro-yellow text-black px-8 py-4 font-black text-xl border-4 border-retro-pink shadow-retro hover:bg-retro-orange transition-colors">
              <Radio className="inline mr-2" size={24} />
              SCAN NOW!
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Neon Stats */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-retro-pink to-retro-cyan animate-pulse">
            TOTALLY AWESOME STATS!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-retro-pink to-retro-purple border-4 border-retro-cyan p-8 shadow-retro transform hover:scale-105 transition-transform">
            <div className="text-center">
              <div className="w-20 h-20 bg-retro-yellow border-4 border-black rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <TrendingUp className="text-black" size={32} />
              </div>
              <div className="text-6xl font-black text-retro-yellow mb-4">78</div>
              <div className="text-xl font-black text-white">ACCESSIBILITY SCORE</div>
              <div className="text-retro-cyan font-bold mt-2">RADICAL!</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-retro-cyan to-retro-purple border-4 border-retro-pink p-8 shadow-retro transform hover:scale-105 transition-transform">
            <div className="text-center">
              <div className="w-20 h-20 bg-retro-orange border-4 border-black rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Eye className="text-black" size={32} />
              </div>
              <div className="text-6xl font-black text-retro-yellow mb-4">24</div>
              <div className="text-xl font-black text-white">PAGES SCANNED</div>
              <div className="text-retro-pink font-bold mt-2">TUBULAR!</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-retro-yellow to-retro-orange border-4 border-retro-purple p-8 shadow-retro transform hover:scale-105 transition-transform">
            <div className="text-center">
              <div className="w-20 h-20 bg-retro-pink border-4 border-black rounded-full flex items-center justify-center mx-auto mb-6 animate-spin">
                <Star className="text-black" size={32} />
              </div>
              <div className="text-6xl font-black text-black mb-4">156</div>
              <div className="text-xl font-black text-black">ISSUES FOUND</div>
              <div className="text-retro-purple font-bold mt-2">GNARLY!</div>
            </div>
          </div>
        </div>

        {/* Issues Section */}
        <div className="bg-retro-purple border-8 border-retro-cyan p-10 mb-16 shadow-retro">
          <h2 className="text-4xl font-black text-center mb-10 text-retro-yellow">
            CRITICAL ISSUES TO FIX!
          </h2>
          
          <div className="space-y-6">
            {[
              { title: 'MISSING ALT TEXT', count: 23, color: 'retro-pink', bgColor: 'retro-cyan' },
              { title: 'LOW CONTRAST RATIOS', count: 45, color: 'retro-yellow', bgColor: 'retro-purple' },
              { title: 'FORM LABEL ISSUES', count: 12, color: 'retro-cyan', bgColor: 'retro-pink' },
            ].map((issue, index) => (
              <div key={index} className={`bg-${issue.bgColor} border-6 border-${issue.color} p-8 flex items-center justify-between shadow-retro`}>
                <div className="flex items-center">
                  <div className={`w-16 h-16 bg-${issue.color} border-4 border-black flex items-center justify-center mr-8`}>
                    <Gamepad2 className="text-black" size={24} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-black">{issue.title}</h3>
                    <p className="text-xl font-bold text-black">{issue.count} ELEMENTS AFFECTED</p>
                  </div>
                </div>
                <button className="bg-black text-retro-yellow px-8 py-4 font-black text-xl border-4 border-retro-yellow hover:bg-retro-yellow hover:text-black transition-colors">
                  FIX IT!
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Scans */}
        <div className="bg-gradient-to-r from-retro-pink to-retro-cyan border-8 border-retro-yellow p-10 shadow-retro">
          <h2 className="text-4xl font-black text-center mb-10 text-black">
            RECENT SCAN HISTORY
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { url: 'HOMEPAGE.COM', score: 82, status: 'EXCELLENT!' },
              { url: 'ABOUT.COM', score: 76, status: 'GOOD JOB!' },
              { url: 'CONTACT.COM', score: 91, status: 'AWESOME!' },
            ].map((scan, index) => (
              <div key={index} className="bg-black border-4 border-retro-purple p-6 text-center shadow-retro">
                <div className="text-retro-cyan font-black text-xl mb-4">{scan.url}</div>
                <div className="text-6xl font-black text-retro-yellow mb-4">{scan.score}</div>
                <div className="text-retro-pink font-bold text-lg">{scan.status}</div>
                <div className="mt-4 w-full bg-retro-purple h-2">
                  <div 
                    className="bg-retro-yellow h-2 transition-all duration-1000" 
                    style={{ width: `${scan.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EightiesRetro;