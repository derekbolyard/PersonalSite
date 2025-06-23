import React from 'react';
import { AlertTriangle, CheckCircle, XCircle, Search, BarChart3, Settings } from 'lucide-react';

const CleanLab = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-body">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-lab-blue rounded-lg flex items-center justify-center">
                <Search className="text-white" size={16} />
              </div>
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">AuditTool</h1>
            </div>
            <button className="bg-lab-blue text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm sm:text-base">
              New Scan
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lab border border-gray-100">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className="text-xs sm:text-sm font-medium text-gray-600">Overall Score</h3>
              <BarChart3 size={16} className="text-lab-blue" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">78</div>
            <div className="text-xs sm:text-sm text-gray-500">+5 from last scan</div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lab border border-gray-100">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className="text-xs sm:text-sm font-medium text-gray-600">Pages Scanned</h3>
              <Search size={16} className="text-lab-teal" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">24</div>
            <div className="text-xs sm:text-sm text-gray-500">Across 3 domains</div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lab border border-gray-100">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className="text-xs sm:text-sm font-medium text-gray-600">Issues Found</h3>
              <AlertTriangle size={16} className="text-orange-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">156</div>
            <div className="text-xs sm:text-sm text-gray-500">23 critical</div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lab border border-gray-100">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className="text-xs sm:text-sm font-medium text-gray-600">Issues Resolved</h3>
              <CheckCircle size={16} className="text-green-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">89</div>
            <div className="text-xs sm:text-sm text-gray-500">57% completion</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Issues List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lab border border-gray-100">
              <div className="p-4 sm:p-6 border-b border-gray-100">
                <h2 className="text-base sm:text-lg font-semibold text-gray-900">Critical Issues</h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Issues requiring immediate attention</p>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { 
                    type: 'critical', 
                    icon: XCircle, 
                    title: 'Missing alternative text for images', 
                    count: 23, 
                    color: 'red',
                    description: 'Images without alt attributes affect screen reader users'
                  },
                  { 
                    type: 'warning', 
                    icon: AlertTriangle, 
                    title: 'Insufficient color contrast', 
                    count: 45, 
                    color: 'orange',
                    description: 'Text contrast ratios below WCAG AA standards'
                  },
                  { 
                    type: 'info', 
                    icon: Settings, 
                    title: 'Missing form labels', 
                    count: 12, 
                    color: 'blue',
                    description: 'Form inputs without proper labeling'
                  },
                ].map((issue, index) => (
                  <div key={index} className="p-4 sm:p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className={`p-2 rounded-lg bg-${issue.color}-50 flex-shrink-0`}>
                        <issue.icon size={16} className={`text-${issue.color}-500`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                          <h3 className="text-sm font-medium text-gray-900">{issue.title}</h3>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full bg-${issue.color}-50 text-${issue.color}-700 self-start`}>
                            {issue.count} affected
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 mb-3">{issue.description}</p>
                        <button className="text-xs sm:text-sm font-medium text-lab-blue hover:text-blue-600">
                          View details →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Chart */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lab border border-gray-100">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Progress Overview</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Accessibility Score</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-lab-blue h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Issues Resolved</span>
                    <span className="font-medium">57%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-lab-teal h-2 rounded-full" style={{ width: '57%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Scans */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lab border border-gray-100">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Recent Scans</h3>
              <div className="space-y-3">
                {[
                  { url: 'homepage.example.com', score: 82, time: '2 hours ago' },
                  { url: 'about.example.com', score: 76, time: '1 day ago' },
                  { url: 'contact.example.com', score: 91, time: '3 days ago' },
                ].map((scan, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium text-gray-900 truncate">{scan.url}</div>
                      <div className="text-xs text-gray-500">{scan.time}</div>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-sm font-semibold text-gray-900">{scan.score}</div>
                      <div className="text-xs text-gray-500">score</div>
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

export default CleanLab;