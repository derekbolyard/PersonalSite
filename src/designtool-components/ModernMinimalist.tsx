import React from 'react';
import { BarChart3, TrendingUp, Users, CheckCircle, ArrowRight, Minus } from 'lucide-react';

const ModernMinimalist = () => {
  return (
    <div className="min-h-screen bg-minimal-gray font-body">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-2 h-8 bg-minimal-accent"></div>
              <h1 className="text-2xl font-light text-minimal-dark tracking-wide">AuditTool</h1>
            </div>
            <button className="text-minimal-accent hover:text-blue-600 transition-colors font-medium">
              New Scan
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-16 mb-24">
          <div className="text-center">
            <div className="text-6xl font-extralight text-minimal-dark mb-4">78</div>
            <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Accessibility Score</div>
          </div>
          <div className="text-center">
            <div className="text-6xl font-extralight text-minimal-dark mb-4">24</div>
            <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Pages Analyzed</div>
          </div>
          <div className="text-center">
            <div className="text-6xl font-extralight text-minimal-dark mb-4">156</div>
            <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Issues Identified</div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-light text-minimal-dark">Progress Overview</h2>
            <div className="w-12 h-px bg-gray-200"></div>
          </div>
          
          <div className="bg-white rounded-sm shadow-minimal p-12">
            <div className="space-y-12">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-light text-minimal-dark">Overall Compliance</span>
                  <span className="text-2xl font-light text-minimal-accent">78%</span>
                </div>
                <div className="w-full bg-gray-100 h-1">
                  <div className="bg-minimal-accent h-1 transition-all duration-1000" style={{ width: '78%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-light text-minimal-dark">Issues Resolved</span>
                  <span className="text-2xl font-light text-minimal-accent">57%</span>
                </div>
                <div className="w-full bg-gray-100 h-1">
                  <div className="bg-gray-400 h-1 transition-all duration-1000" style={{ width: '57%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Issues List */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-light text-minimal-dark">Priority Issues</h2>
            <div className="w-12 h-px bg-gray-200"></div>
          </div>

          <div className="space-y-1">
            {[
              { title: 'Images missing alternative text', count: 23, priority: 'High' },
              { title: 'Insufficient color contrast ratios', count: 45, priority: 'Medium' },
              { title: 'Form inputs without proper labels', count: 12, priority: 'Medium' },
              { title: 'Missing heading structure hierarchy', count: 8, priority: 'Low' },
            ].map((issue, index) => (
              <div key={index} className="bg-white hover:bg-gray-50 transition-colors border-l-2 border-transparent hover:border-minimal-accent">
                <div className="p-8 flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-minimal-dark mb-2">{issue.title}</h3>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <span>{issue.count} affected elements</span>
                      <span>•</span>
                      <span>{issue.priority} priority</span>
                    </div>
                  </div>
                  <button className="text-minimal-accent hover:text-blue-600 transition-colors">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-light text-minimal-dark">Recent Scans</h2>
            <div className="w-12 h-px bg-gray-200"></div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {[
              { url: 'homepage.example.com', score: 82, date: '2024-01-15' },
              { url: 'about.example.com', score: 76, date: '2024-01-14' },
              { url: 'contact.example.com', score: 91, date: '2024-01-12' },
            ].map((scan, index) => (
              <div key={index} className="bg-white shadow-minimal hover:shadow-lg transition-shadow p-8">
                <div className="text-center">
                  <div className="text-3xl font-light text-minimal-dark mb-4">{scan.score}</div>
                  <div className="text-sm font-medium text-gray-500 mb-2">{scan.url}</div>
                  <div className="text-xs text-gray-400">{scan.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernMinimalist;