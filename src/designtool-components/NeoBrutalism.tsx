import React from 'react';
import { AlertTriangle, CheckCircle, XCircle, Eye, Zap } from 'lucide-react';

const NeoBrutalism = () => {
  return (
    <div className="min-h-screen bg-white font-display">
      {/* Header */}
      <div className="bg-black text-white p-8 border-b-8 border-brutal-red">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-black mb-4 tracking-tight">
            AUDIT<span className="text-electric">TOOL</span>
          </h1>
          <p className="text-xl font-bold">ACCESSIBILITY AUDIT DASHBOARD</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        {/* Main Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Score Card */}
          <div className="bg-black text-white p-8 border-8 border-electric shadow-brutal transform -rotate-1">
            <div className="text-center">
              <h2 className="text-2xl font-black mb-4">OVERALL SCORE</h2>
              <div className="text-8xl font-black text-electric mb-2">78</div>
              <div className="text-xl font-bold">OUT OF 100</div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-neon-green text-black p-8 border-8 border-black shadow-brutal transform rotate-1">
            <h3 className="text-2xl font-black mb-6">QUICK STATS</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-bold">PAGES SCANNED:</span>
                <span className="text-2xl font-black">24</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold">ISSUES FOUND:</span>
                <span className="text-2xl font-black">156</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold">FIXED:</span>
                <span className="text-2xl font-black">89</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="bg-brutal-red text-white p-8 border-8 border-black shadow-brutal flex items-center justify-center">
            <button className="bg-white text-black px-8 py-4 text-2xl font-black border-4 border-black hover:bg-electric hover:text-black transition-colors">
              <Zap className="inline mr-2" size={32} />
              NEW SCAN
            </button>
          </div>
        </div>

        {/* Issues Section */}
        <div className="bg-white border-8 border-black shadow-brutal p-8 mb-8">
          <h2 className="text-4xl font-black mb-8 border-b-4 border-black pb-4">
            CRITICAL ISSUES
          </h2>
          
          <div className="space-y-6">
            {[
              { type: 'critical', icon: XCircle, title: 'MISSING ALT TEXT', count: 23, color: 'brutal-red' },
              { type: 'warning', icon: AlertTriangle, title: 'LOW CONTRAST', count: 45, color: 'yellow-400' },
              { type: 'success', icon: CheckCircle, title: 'KEYBOARD NAVIGATION', count: 12, color: 'neon-green' },
            ].map((issue, index) => (
              <div key={index} className={`bg-${issue.color} text-black p-6 border-4 border-black flex items-center justify-between`}>
                <div className="flex items-center">
                  <issue.icon size={32} className="mr-4" />
                  <div>
                    <h3 className="text-2xl font-black">{issue.title}</h3>
                    <p className="font-bold">AFFECTS {issue.count} ELEMENTS</p>
                  </div>
                </div>
                <button className="bg-black text-white px-6 py-3 font-black border-4 border-white hover:bg-white hover:text-black transition-colors">
                  FIX NOW
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Scans */}
        <div className="bg-electric text-black border-8 border-black shadow-brutal p-8">
          <h2 className="text-4xl font-black mb-8">RECENT SCANS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['homepage.com', 'about.com', 'contact.com'].map((url, index) => (
              <div key={index} className="bg-white border-4 border-black p-6">
                <div className="flex items-center mb-4">
                  <Eye size={24} className="mr-2" />
                  <span className="font-black text-lg">{url}</span>
                </div>
                <div className="text-sm font-bold mb-2">SCANNED: 2 HOURS AGO</div>
                <div className="text-3xl font-black">SCORE: 82</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeoBrutalism;