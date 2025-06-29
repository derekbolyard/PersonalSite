import React from 'react';
import { BarChart3, Shield, Zap, Eye, TrendingUp, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const SleekDarkMode = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-dark-text font-body">
      {/* Header */}
      <div className="bg-dark-surface/80 backdrop-blur-sm border-b border-dark-border">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-dark-accent to-cyan-400 rounded-xl flex items-center justify-center shadow-dark">
                <Shield className="text-dark-bg" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-dark-text">
                  Audit<span className="text-dark-accent">Tool</span>
                </h1>
                <p className="text-sm text-gray-400">Advanced Accessibility Analytics</p>
              </div>
            </div>
            <button className="bg-gradient-to-r from-dark-accent to-cyan-400 text-dark-bg px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              <Zap className="inline mr-2" size={16} />
              New Scan
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Dashboard Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-dark-surface rounded-2xl p-6 border border-dark-border shadow-dark">
            <div className="flex items-center justify-between mb-4">
              <BarChart3 className="text-dark-accent" size={24} />
              <span className="text-xs text-gray-400 uppercase tracking-wider">Score</span>
            </div>
            <div className="text-3xl font-bold text-dark-text mb-2">78</div>
            <div className="text-sm text-gray-400">Accessibility Rating</div>
            <div className="mt-3 flex items-center text-xs text-green-400">
              <TrendingUp size={12} className="mr-1" />
              +12 this month
            </div>
          </div>

          <div className="bg-dark-surface rounded-2xl p-6 border border-dark-border shadow-dark">
            <div className="flex items-center justify-between mb-4">
              <Eye className="text-cyan-400" size={24} />
              <span className="text-xs text-gray-400 uppercase tracking-wider">Pages</span>
            </div>
            <div className="text-3xl font-bold text-dark-text mb-2">24</div>
            <div className="text-sm text-gray-400">Scanned</div>
          </div>

          <div className="bg-dark-surface rounded-2xl p-6 border border-dark-border shadow-dark">
            <div className="flex items-center justify-between mb-4">
              <AlertTriangle className="text-yellow-400" size={24} />
              <span className="text-xs text-gray-400 uppercase tracking-wider">Issues</span>
            </div>
            <div className="text-3xl font-bold text-dark-text mb-2">156</div>
            <div className="text-sm text-gray-400">Total Found</div>
          </div>

          <div className="bg-dark-surface rounded-2xl p-6 border border-dark-border shadow-dark">
            <div className="flex items-center justify-between mb-4">
              <CheckCircle className="text-green-400" size={24} />
              <span className="text-xs text-gray-400 uppercase tracking-wider">Fixed</span>
            </div>
            <div className="text-3xl font-bold text-dark-text mb-2">89</div>
            <div className="text-sm text-gray-400">Resolved</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Issues List */}
          <div className="lg:col-span-2">
            <div className="bg-dark-surface rounded-2xl border border-dark-border shadow-dark">
              <div className="p-6 border-b border-dark-border">
                <h2 className="text-xl font-bold text-dark-text mb-2">Critical Issues</h2>
                <p className="text-gray-400">Issues requiring immediate attention</p>
              </div>
              
              <div className="divide-y divide-dark-border">
                {[
                  {
                    icon: XCircle,
                    title: 'Missing alternative text for images',
                    description: 'Images without alt attributes affect screen reader accessibility',
                    count: 23,
                    severity: 'critical',
                    color: 'red-400'
                  },
                  {
                    icon: AlertTriangle,
                    title: 'Insufficient color contrast',
                    description: 'Text contrast ratios below WCAG AA standards',
                    count: 45,
                    severity: 'warning',
                    color: 'yellow-400'
                  },
                  {
                    icon: CheckCircle,
                    title: 'Form labeling improvements',
                    description: 'Input fields could benefit from better labeling',
                    count: 12,
                    severity: 'info',
                    color: 'blue-400'
                  }
                ].map((issue, index) => (
                  <div key={index} className="p-6 hover:bg-dark-bg/50 transition-colors">
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-lg bg-${issue.color}/10 border border-${issue.color}/20`}>
                        <issue.icon className={`text-${issue.color}`} size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-dark-text">{issue.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${issue.color}/10 text-${issue.color} border border-${issue.color}/20`}>
                            {issue.count} affected
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">{issue.description}</p>
                        <button className="text-dark-accent hover:text-cyan-300 text-sm font-medium transition-colors">
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
          <div className="space-y-8">
            {/* Progress */}
            <div className="bg-dark-surface rounded-2xl p-6 border border-dark-border shadow-dark">
              <h3 className="text-lg font-bold text-dark-text mb-6">Progress Overview</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-3">
                    <span className="text-gray-400">Accessibility Score</span>
                    <span className="text-dark-text font-semibold">78%</span>
                  </div>
                  <div className="w-full bg-dark-bg rounded-full h-2">
                    <div className="bg-gradient-to-r from-dark-accent to-cyan-400 h-2 rounded-full transition-all duration-1000" style={{ width: '78%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-3">
                    <span className="text-gray-400">Issues Resolved</span>
                    <span className="text-dark-text font-semibold">57%</span>
                  </div>
                  <div className="w-full bg-dark-bg rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full transition-all duration-1000" style={{ width: '57%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Scans */}
            <div className="bg-dark-surface rounded-2xl p-6 border border-dark-border shadow-dark">
              <h3 className="text-lg font-bold text-dark-text mb-6">Recent Scans</h3>
              
              <div className="space-y-4">
                {[
                  { url: 'homepage.example.com', score: 82, time: '2 hours ago', trend: 'up' },
                  { url: 'about.example.com', score: 76, time: '1 day ago', trend: 'stable' },
                  { url: 'contact.example.com', score: 91, time: '3 days ago', trend: 'up' },
                ].map((scan, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-dark-bg/30 rounded-lg border border-dark-border/50 hover:border-dark-accent/30 transition-colors">
                    <div className="flex-1">
                      <div className="font-medium text-dark-text text-sm">{scan.url}</div>
                      <div className="text-xs text-gray-400">{scan.time}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-dark-accent">{scan.score}</div>
                      <div className="text-xs text-gray-400">score</div>
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

export default SleekDarkMode;