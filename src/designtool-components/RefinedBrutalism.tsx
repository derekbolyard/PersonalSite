import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, XCircle, Eye, Zap, BarChart3, Shield, TrendingUp, Palette } from 'lucide-react';

const RefinedBrutalism = () => {
  const [colorScheme, setColorScheme] = useState('modern');

  const colorSchemes = {
    modern: {
      name: 'Modern Tech',
      primary: 'blue-600',
      secondary: 'purple-600',
      accent: 'indigo-500',
      success: 'emerald-500',
      warning: 'amber-500',
      danger: 'red-600',
      headerBg: 'bg-slate-900',
      headerBorder: 'border-blue-600',
      primaryText: 'text-blue-600',
      accentText: 'text-purple-600'
    },
    warm: {
      name: 'Warm Professional',
      primary: 'orange-600',
      secondary: 'red-600',
      accent: 'yellow-500',
      success: 'green-600',
      warning: 'amber-600',
      danger: 'red-700',
      headerBg: 'bg-gray-900',
      headerBorder: 'border-orange-500',
      primaryText: 'text-orange-600',
      accentText: 'text-red-600'
    },
    cool: {
      name: 'Cool Corporate',
      primary: 'teal-600',
      secondary: 'cyan-600',
      accent: 'blue-500',
      success: 'green-600',
      warning: 'yellow-600',
      danger: 'red-600',
      headerBg: 'bg-slate-800',
      headerBorder: 'border-teal-500',
      primaryText: 'text-teal-600',
      accentText: 'text-cyan-600'
    },
    monochrome: {
      name: 'Monochrome',
      primary: 'gray-800',
      secondary: 'gray-600',
      accent: 'gray-700',
      success: 'green-600',
      warning: 'yellow-600',
      danger: 'red-600',
      headerBg: 'bg-black',
      headerBorder: 'border-gray-600',
      primaryText: 'text-gray-800',
      accentText: 'text-gray-600'
    }
  };

  const scheme = colorSchemes[colorScheme];

  return (
    <div className="min-h-screen bg-gray-100 font-display">
      {/* Color Scheme Selector */}
      <div className="bg-white border-b-4 border-black p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Palette size={24} className="text-gray-600" />
            <span className="font-black text-lg">COLOR SCHEME:</span>
          </div>
          <div className="flex space-x-2">
            {Object.entries(colorSchemes).map(([key, schemeData]) => (
              <button
                key={key}
                onClick={() => setColorScheme(key)}
                className={`px-4 py-2 font-bold border-2 border-black transition-colors ${
                  colorScheme === key 
                    ? `bg-${schemeData.primary} text-white` 
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                {schemeData.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <div className={`${scheme.headerBg} text-white p-8 border-b-6 ${scheme.headerBorder}`}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-black mb-3 tracking-tight">
            AUDIT<span className={`text-${scheme.primary}`}>TOOL</span>
          </h1>
          <p className="text-xl font-bold text-gray-300">REFINED ACCESSIBILITY AUDITING</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        {/* Main Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* Score Card */}
          <div className="bg-black text-white p-8 border-6 border-black shadow-brutal transform -rotate-1 hover:rotate-0 transition-transform">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <BarChart3 size={32} className={`text-${scheme.primary} mr-3`} />
                <h2 className="text-2xl font-black">SCORE</h2>
              </div>
              <div className={`text-7xl font-black text-${scheme.primary} mb-2`}>78</div>
              <div className="text-lg font-bold">ACCESSIBILITY RATING</div>
              <div className="mt-4 flex items-center justify-center text-sm font-bold">
                <TrendingUp size={16} className={`text-${scheme.success} mr-2`} />
                <span className={`text-${scheme.success}`}>+12 THIS MONTH</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white text-black p-8 border-6 border-black shadow-brutal transform rotate-1 hover:rotate-0 transition-transform">
            <h3 className="text-2xl font-black mb-6 border-b-4 border-black pb-2">SITE OVERVIEW</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">PAGES SCANNED:</span>
                <span className="text-3xl font-black">24</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">TOTAL ISSUES:</span>
                <span className={`text-3xl font-black text-${scheme.danger}`}>156</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">RESOLVED:</span>
                <span className={`text-3xl font-black text-${scheme.success}`}>89</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className={`bg-${scheme.primary} text-white p-8 border-6 border-black shadow-brutal flex items-center justify-center hover:bg-${scheme.secondary} transition-colors`}>
            <button className="bg-black text-white px-8 py-4 text-2xl font-black border-4 border-white hover:bg-white hover:text-black transition-all">
              <Zap className="inline mr-3" size={28} />
              SCAN NOW
            </button>
          </div>
        </div>

        {/* Issues Section */}
        <div className="bg-white border-6 border-black shadow-brutal p-8 mb-8">
          <div className="flex items-center justify-between mb-8 border-b-4 border-black pb-4">
            <h2 className="text-4xl font-black text-black flex items-center">
              <Shield className={`mr-4 text-${scheme.danger}`} size={36} />
              PRIORITY ISSUES
            </h2>
            <div className={`bg-${scheme.danger} text-white px-4 py-2 font-black border-2 border-black`}>
              NEEDS ATTENTION
            </div>
          </div>
          
          <div className="space-y-6">
            {[
              { 
                type: 'critical', 
                icon: XCircle, 
                title: 'MISSING ALT TEXT', 
                description: 'Images lack alternative text for screen readers',
                count: 23, 
                color: scheme.danger,
                bgColor: 'red-50'
              },
              { 
                type: 'warning', 
                icon: AlertTriangle, 
                title: 'LOW CONTRAST RATIOS', 
                description: 'Text contrast below WCAG standards',
                count: 45, 
                color: scheme.warning,
                bgColor: 'yellow-50'
              },
              { 
                type: 'info', 
                icon: CheckCircle, 
                title: 'FORM LABEL ISSUES', 
                description: 'Input fields missing proper labeling',
                count: 12, 
                color: scheme.primary,
                bgColor: 'blue-50'
              },
            ].map((issue, index) => (
              <div key={index} className={`bg-${issue.bgColor} border-l-8 border-${issue.color} p-6 border-4 border-black shadow-brutal`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`p-4 bg-${issue.color} border-4 border-black mr-6`}>
                      <issue.icon size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-black mb-2">{issue.title}</h3>
                      <p className="text-lg font-bold text-gray-700 mb-2">{issue.description}</p>
                      <div className="text-sm font-black text-gray-600">
                        AFFECTS <span className="text-lg">{issue.count}</span> ELEMENTS
                      </div>
                    </div>
                  </div>
                  <button className={`bg-black text-white px-8 py-4 font-black border-4 border-white hover:bg-${scheme.primary} hover:border-${scheme.primary} transition-all`}>
                    FIX IT
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Scans */}
          <div className="bg-black text-white border-6 border-black shadow-brutal p-8">
            <h2 className={`text-3xl font-black mb-8 text-${scheme.primary} border-b-4 border-${scheme.primary} pb-4`}>
              RECENT SCANS
            </h2>
            <div className="space-y-4">
              {[
                { url: 'homepage.com', score: 82, time: '2 hours ago', trend: 'up' },
                { url: 'about.com', score: 76, time: '1 day ago', trend: 'stable' },
                { url: 'contact.com', score: 91, time: '3 days ago', trend: 'up' },
              ].map((scan, index) => (
                <div key={index} className={`bg-white text-black border-4 border-${scheme.primary} p-6 flex items-center justify-between hover:bg-${scheme.primary} hover:text-white transition-colors`}>
                  <div className="flex items-center">
                    <Eye size={24} className="mr-4" />
                    <div>
                      <div className="font-black text-xl">{scan.url}</div>
                      <div className="text-sm font-bold opacity-70">{scan.time}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-black">{scan.score}</div>
                    <div className="text-sm font-bold">SCORE</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Section */}
          <div className={`bg-${scheme.accent} text-white border-6 border-black shadow-brutal p-8`}>
            <h2 className="text-3xl font-black mb-8 border-b-4 border-white pb-4">
              PROGRESS METER
            </h2>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-black text-xl">ACCESSIBILITY</span>
                  <span className="text-4xl font-black">78%</span>
                </div>
                <div className="w-full bg-black border-4 border-black h-6">
                  <div className={`bg-${scheme.primary} h-full border-r-4 border-black`} style={{ width: '78%' }}></div>
                </div>
                <p className="text-sm font-bold mt-3">IMPROVED +12 POINTS</p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-black text-xl">ISSUES FIXED</span>
                  <span className="text-4xl font-black">57%</span>
                </div>
                <div className="w-full bg-black border-4 border-black h-6">
                  <div className="bg-white h-full border-r-4 border-black" style={{ width: '57%' }}></div>
                </div>
                <p className="text-sm font-bold mt-3">89 OF 156 RESOLVED</p>
              </div>

              <div className="bg-black text-white border-4 border-white p-6 mt-8">
                <h4 className={`font-black text-lg mb-3 text-${scheme.primary}`}>NEXT TARGET:</h4>
                <p className="font-bold">Fix image alt text to reach 85+ score</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefinedBrutalism;