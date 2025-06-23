import React from 'react';
import { AlertTriangle, CheckCircle, XCircle, Eye, Zap, BarChart3, Shield } from 'lucide-react';

const ProfessionalBrutalism = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-display">
      {/* Header */}
      <div className="bg-slate-900 text-white p-4 sm:p-8 border-b-4 border-blue-600">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-black mb-2 sm:mb-3 tracking-tight">
            AUDIT<span className="text-blue-400">TOOL</span>
          </h1>
          <p className="text-base sm:text-lg font-bold text-gray-300">PROFESSIONAL ACCESSIBILITY AUDITING</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 sm:p-8">
        {/* Main Dashboard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {/* Score Card */}
          <div className="sm:col-span-2 bg-white p-6 sm:p-8 border-4 border-slate-900 shadow-pro-brutal">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h2 className="text-lg sm:text-xl font-black mb-2 text-slate-900">ACCESSIBILITY SCORE</h2>
                <div className="text-5xl sm:text-6xl font-black text-blue-600 mb-1">78</div>
                <div className="text-sm font-bold text-gray-600">OUT OF 100 POINTS</div>
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 border-4 border-slate-900 flex items-center justify-center">
                <BarChart3 size={32} className="text-white" />
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-blue-50 p-4 sm:p-6 border-4 border-slate-900 shadow-pro-brutal">
            <h3 className="text-base sm:text-lg font-black mb-3 sm:mb-4 text-slate-900">PAGES SCANNED</h3>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 mb-1">24</div>
            <div className="text-xs sm:text-sm font-bold text-gray-600">ACROSS 3 DOMAINS</div>
          </div>

          {/* Action Button */}
          <div className="bg-slate-900 text-white p-4 sm:p-6 border-4 border-slate-900 shadow-pro-brutal flex items-center justify-center">
            <button className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-black border-2 border-white hover:bg-blue-700 transition-colors w-full">
              <Zap className="inline mr-2" size={16} />
              NEW SCAN
            </button>
          </div>
        </div>

        {/* Issues Section */}
        <div className="bg-white border-4 border-slate-900 shadow-pro-brutal p-4 sm:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center">
              <Shield className="mr-2 sm:mr-3 text-blue-600" size={24} />
              CRITICAL ISSUES
            </h2>
            <div className="text-xs sm:text-sm font-bold text-gray-600">REQUIRES IMMEDIATE ATTENTION</div>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            {[
              { 
                type: 'critical', 
                icon: XCircle, 
                title: 'MISSING ALTERNATIVE TEXT', 
                description: 'Images without alt attributes affect screen reader accessibility',
                count: 23, 
                color: 'red-600',
                bgColor: 'red-50',
                borderColor: 'red-600'
              },
              { 
                type: 'warning', 
                icon: AlertTriangle, 
                title: 'INSUFFICIENT COLOR CONTRAST', 
                description: 'Text contrast ratios below WCAG AA compliance standards',
                count: 45, 
                color: 'orange-600',
                bgColor: 'orange-50',
                borderColor: 'orange-600'
              },
              { 
                type: 'info', 
                icon: CheckCircle, 
                title: 'FORM LABELING ISSUES', 
                description: 'Input fields missing proper labels for assistive technology',
                count: 12, 
                color: 'blue-600',
                bgColor: 'blue-50',
                borderColor: 'blue-600'
              },
            ].map((issue, index) => (
              <div key={index} className={`bg-${issue.bgColor} border-l-4 sm:border-l-8 border-${issue.borderColor} p-4 sm:p-6 flex flex-col sm:flex-row items-start justify-between gap-4`}>
                <div className="flex items-start w-full">
                  <div className={`p-2 sm:p-3 bg-white border-2 border-${issue.borderColor} mr-3 sm:mr-6 flex-shrink-0`}>
                    <issue.icon size={20} className={`text-${issue.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-1">{issue.title}</h3>
                    <p className="text-sm font-medium text-gray-700 mb-2">{issue.description}</p>
                    <div className="text-sm font-bold text-gray-600">AFFECTS {issue.count} ELEMENTS</div>
                  </div>
                </div>
                <button className={`bg-${issue.color} text-white px-4 sm:px-6 py-2 sm:py-3 font-black border-2 border-slate-900 hover:bg-slate-900 transition-colors whitespace-nowrap text-sm sm:text-base`}>
                  REVIEW
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Recent Scans */}
          <div className="bg-slate-100 border-4 border-slate-900 shadow-pro-brutal p-4 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-slate-900">RECENT ACTIVITY</h2>
            <div className="space-y-3 sm:space-y-4">
              {[
                { url: 'homepage.example.com', score: 82, time: '2 hours ago', status: 'improved' },
                { url: 'about.example.com', score: 76, time: '1 day ago', status: 'stable' },
                { url: 'contact.example.com', score: 91, time: '3 days ago', status: 'excellent' },
              ].map((scan, index) => (
                <div key={index} className="bg-white border-2 border-slate-900 p-3 sm:p-4 flex items-center justify-between">
                  <div className="flex items-center min-w-0 flex-1">
                    <Eye size={16} className="mr-2 sm:mr-3 text-blue-600 flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="font-black text-slate-900 text-sm sm:text-base truncate">{scan.url}</div>
                      <div className="text-xs sm:text-sm font-medium text-gray-600">{scan.time}</div>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-xl sm:text-2xl font-black text-slate-900">{scan.score}</div>
                    <div className="text-xs font-bold text-gray-600">SCORE</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Overview */}
          <div className="bg-white border-4 border-slate-900 shadow-pro-brutal p-4 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-slate-900">PROGRESS TRACKING</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2 sm:mb-3">
                  <span className="font-black text-slate-900 text-sm sm:text-base">OVERALL COMPLIANCE</span>
                  <span className="text-xl sm:text-2xl font-black text-blue-600">78%</span>
                </div>
                <div className="w-full bg-gray-200 border-2 border-slate-900 h-3 sm:h-4">
                  <div className="bg-blue-600 h-full border-r-2 border-slate-900" style={{ width: '78%' }}></div>
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-600 mt-2">+12 points improvement this month</p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2 sm:mb-3">
                  <span className="font-black text-slate-900 text-sm sm:text-base">ISSUES RESOLVED</span>
                  <span className="text-xl sm:text-2xl font-black text-green-600">57%</span>
                </div>
                <div className="w-full bg-gray-200 border-2 border-slate-900 h-3 sm:h-4">
                  <div className="bg-green-600 h-full border-r-2 border-slate-900" style={{ width: '57%' }}></div>
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-600 mt-2">89 of 156 total issues addressed</p>
              </div>

              <div className="bg-slate-50 border-2 border-slate-900 p-3 sm:p-4 mt-4 sm:mt-6">
                <h4 className="font-black text-slate-900 mb-2 text-sm sm:text-base">NEXT PRIORITY</h4>
                <p className="text-xs sm:text-sm font-medium text-gray-700">Focus on image alt text to achieve 85+ score</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalBrutalism;