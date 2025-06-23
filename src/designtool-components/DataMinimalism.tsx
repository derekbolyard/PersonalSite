import React from 'react';
import { AlertTriangle, CheckCircle, XCircle, TrendingUp, Calendar } from 'lucide-react';

const DataMinimalism = () => {
  return (
    <div className="min-h-screen bg-white font-mono">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">AuditTool</h1>
            <button className="text-data-blue hover:underline font-medium">
              New Scan
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Key Metrics */}
        <div className="grid grid-cols-4 gap-16 mb-16">
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">78</div>
            <div className="text-sm text-gray-600">Accessibility Score</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">24</div>
            <div className="text-sm text-gray-600">Pages Scanned</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">156</div>
            <div className="text-sm text-gray-600">Total Issues</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">89</div>
            <div className="text-sm text-gray-600">Issues Resolved</div>
          </div>
        </div>

        {/* Issues Table */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-8">Issues Requiring Attention</h2>
          
          <div className="border border-gray-200">
            {/* Table Header */}
            <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
              <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-600">
                <div className="col-span-1">Priority</div>
                <div className="col-span-5">Issue Description</div>
                <div className="col-span-2">Affected Elements</div>
                <div className="col-span-2">WCAG Level</div>
                <div className="col-span-2">Action</div>
              </div>
            </div>

            {/* Table Rows */}
            {[
              {
                priority: 'critical',
                description: 'Images missing alternative text',
                elements: 23,
                wcag: 'AA',
                color: 'data-red',
                icon: XCircle
              },
              {
                priority: 'warning',
                description: 'Insufficient color contrast ratio',
                elements: 45,
                wcag: 'AA',
                color: 'data-orange',
                icon: AlertTriangle
              },
              {
                priority: 'info',
                description: 'Form inputs without proper labels',
                elements: 12,
                wcag: 'A',
                color: 'data-blue',
                icon: CheckCircle
              },
              {
                priority: 'warning',
                description: 'Missing heading structure hierarchy',
                elements: 8,
                wcag: 'AA',
                color: 'data-orange',
                icon: AlertTriangle
              },
              {
                priority: 'critical',
                description: 'Interactive elements not keyboard accessible',
                elements: 15,
                wcag: 'A',
                color: 'data-red',
                icon: XCircle
              }
            ].map((issue, index) => (
              <div key={index} className="border-b border-gray-200 px-6 py-4 hover:bg-gray-50">
                <div className="grid grid-cols-12 gap-4 items-center text-sm">
                  <div className="col-span-1">
                    <div className={`w-3 h-3 rounded-full bg-${issue.color}`}></div>
                  </div>
                  <div className="col-span-5">
                    <div className="font-medium text-gray-900">{issue.description}</div>
                  </div>
                  <div className="col-span-2">
                    <span className="font-mono">{issue.elements}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="font-mono text-gray-600">WCAG {issue.wcag}</span>
                  </div>
                  <div className="col-span-2">
                    <button className="text-data-blue hover:underline">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Tracking */}
        <div className="grid grid-cols-2 gap-16">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Score Progression</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">Current Score</span>
                <span className="font-mono text-lg font-bold">78</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">Previous Score</span>
                <span className="font-mono text-lg">66</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-gray-600">Change</span>
                <span className="font-mono text-lg text-data-green">+12</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Recent Scan History</h3>
            <div className="space-y-3">
              {[
                { url: 'homepage.example.com', score: 82, date: '2024-01-15' },
                { url: 'about.example.com', score: 76, date: '2024-01-14' },
                { url: 'contact.example.com', score: 91, date: '2024-01-12' },
                { url: 'products.example.com', score: 68, date: '2024-01-10' },
              ].map((scan, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{scan.url}</div>
                    <div className="text-xs text-gray-500 font-mono">{scan.date}</div>
                  </div>
                  <div className="font-mono text-sm font-bold">{scan.score}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataMinimalism;