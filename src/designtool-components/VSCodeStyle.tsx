import React, { useState } from 'react';
import { Terminal, FileText, Settings, Search, GitBranch, Play, Bug, Folder, File } from 'lucide-react';

const VSCodeStyle = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', name: 'accessibility-dashboard.js', icon: FileText },
    { id: 'issues', name: 'critical-issues.json', icon: Bug },
    { id: 'settings', name: 'audit-config.json', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-vscode-bg text-white font-code flex">
      {/* Sidebar */}
      <div className="w-64 bg-vscode-sidebar border-r border-vscode-border flex flex-col">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-vscode-border">
          <div className="flex items-center space-x-3">
            <Terminal className="text-vscode-blue" size={20} />
            <span className="font-semibold">AUDITTOOL</span>
          </div>
        </div>

        {/* File Explorer */}
        <div className="flex-1 p-4">
          <div className="text-xs uppercase tracking-wider text-gray-400 mb-4">Explorer</div>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <Folder className="text-vscode-blue" size={16} />
              <span>accessibility-audit</span>
            </div>
            
            <div className="ml-4 space-y-1">
              {[
                { name: 'dashboard.js', icon: FileText, color: 'vscode-green' },
                { name: 'issues.json', icon: Bug, color: 'vscode-orange' },
                { name: 'config.json', icon: Settings, color: 'vscode-purple' },
                { name: 'reports/', icon: Folder, color: 'vscode-blue' },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white cursor-pointer py-1">
                  <item.icon className={`text-${item.color}`} size={14} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="mt-8 p-3 bg-vscode-bg rounded border border-vscode-border">
            <div className="text-xs text-gray-400 mb-2">SCAN STATUS</div>
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-vscode-green">Ready</span>
            </div>
            <div className="text-xs text-gray-400 mt-2">Last scan: 2 hours ago</div>
          </div>
        </div>

        {/* Bottom Panel */}
        <div className="p-4 border-t border-vscode-border">
          <div className="flex items-center space-x-4 text-xs text-gray-400">
            <div className="flex items-center space-x-1">
              <GitBranch size={12} />
              <span>main</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-vscode-green rounded-full"></div>
              <span>Connected</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Tab Bar */}
        <div className="bg-vscode-sidebar border-b border-vscode-border">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 text-sm border-r border-vscode-border hover:bg-vscode-bg transition-colors ${
                  activeTab === tab.id ? 'bg-vscode-bg text-white' : 'text-gray-400'
                }`}
              >
                <tab.icon size={14} />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Editor Content */}
        <div className="flex-1 p-6">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Code-style Header */}
              <div className="font-mono text-sm">
                <div className="text-vscode-purple">// Accessibility Dashboard</div>
                <div className="text-vscode-green">// Generated: {new Date().toISOString()}</div>
                <div className="text-gray-400">// Status: Active</div>
              </div>

              {/* Metrics in Code Format */}
              <div className="bg-vscode-sidebar p-6 rounded border border-vscode-border">
                <div className="font-mono text-sm space-y-2">
                  <div className="text-vscode-blue">const</div>
                  <div className="ml-4">
                    <span className="text-vscode-orange">accessibilityScore</span>
                    <span className="text-white"> = </span>
                    <span className="text-vscode-green">78</span>
                    <span className="text-gray-400">; // Out of 100</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-vscode-orange">pagesScanned</span>
                    <span className="text-white"> = </span>
                    <span className="text-vscode-green">24</span>
                    <span className="text-gray-400">; // Total pages</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-vscode-orange">issuesFound</span>
                    <span className="text-white"> = </span>
                    <span className="text-vscode-green">156</span>
                    <span className="text-gray-400">; // Total issues</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-vscode-orange">issuesResolved</span>
                    <span className="text-white"> = </span>
                    <span className="text-vscode-green">89</span>
                    <span className="text-gray-400">; // Fixed issues</span>
                  </div>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">Overall Progress</span>
                    <span className="text-vscode-green font-mono">78%</span>
                  </div>
                  <div className="w-full bg-vscode-sidebar h-2 rounded">
                    <div className="bg-vscode-green h-2 rounded transition-all duration-1000" style={{ width: '78%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">Issues Resolved</span>
                    <span className="text-vscode-orange font-mono">57%</span>
                  </div>
                  <div className="w-full bg-vscode-sidebar h-2 rounded">
                    <div className="bg-vscode-orange h-2 rounded transition-all duration-1000" style={{ width: '57%' }}></div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 bg-vscode-blue hover:bg-blue-600 px-4 py-2 rounded text-sm transition-colors">
                  <Play size={14} />
                  <span>Run New Scan</span>
                </button>
                <button className="flex items-center space-x-2 bg-vscode-sidebar hover:bg-gray-600 px-4 py-2 rounded text-sm border border-vscode-border transition-colors">
                  <Search size={14} />
                  <span>Search Issues</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'issues' && (
            <div className="space-y-4">
              <div className="font-mono text-sm text-vscode-purple">
                // critical-issues.json
              </div>
              
              <div className="bg-vscode-sidebar p-6 rounded border border-vscode-border font-mono text-sm">
                <div className="space-y-4">
                  <div className="text-white">{'{'}</div>
                  <div className="ml-4">
                    <div className="text-vscode-orange">"issues"</div>
                    <span className="text-white">: [</span>
                  </div>
                  
                  {[
                    { type: 'missing_alt_text', count: 23, severity: 'critical' },
                    { type: 'low_contrast', count: 45, severity: 'warning' },
                    { type: 'form_labels', count: 12, severity: 'info' },
                  ].map((issue, index) => (
                    <div key={index} className="ml-8 border-l border-gray-600 pl-4">
                      <div className="text-white">{'{'}</div>
                      <div className="ml-4">
                        <div>
                          <span className="text-vscode-orange">"type"</span>
                          <span className="text-white">: </span>
                          <span className="text-vscode-green">"{issue.type}"</span>
                          <span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="text-vscode-orange">"count"</span>
                          <span className="text-white">: </span>
                          <span className="text-vscode-blue">{issue.count}</span>
                          <span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="text-vscode-orange">"severity"</span>
                          <span className="text-white">: </span>
                          <span className="text-vscode-green">"{issue.severity}"</span>
                        </div>
                      </div>
                      <div className="text-white">{'}'}{index < 2 ? ',' : ''}</div>
                    </div>
                  ))}
                  
                  <div className="ml-4 text-white">]</div>
                  <div className="text-white">{'}'}</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-4">
              <div className="font-mono text-sm text-vscode-purple">
                // audit-config.json
              </div>
              
              <div className="bg-vscode-sidebar p-6 rounded border border-vscode-border font-mono text-sm">
                <div className="space-y-2">
                  <div className="text-white">{'{'}</div>
                  <div className="ml-4">
                    <div>
                      <span className="text-vscode-orange">"wcag_level"</span>
                      <span className="text-white">: </span>
                      <span className="text-vscode-green">"AA"</span>
                      <span className="text-white">,</span>
                    </div>
                    <div>
                      <span className="text-vscode-orange">"include_warnings"</span>
                      <span className="text-white">: </span>
                      <span className="text-vscode-blue">true</span>
                      <span className="text-white">,</span>
                    </div>
                    <div>
                      <span className="text-vscode-orange">"scan_depth"</span>
                      <span className="text-white">: </span>
                      <span className="text-vscode-blue">3</span>
                      <span className="text-white">,</span>
                    </div>
                    <div>
                      <span className="text-vscode-orange">"output_format"</span>
                      <span className="text-white">: </span>
                      <span className="text-vscode-green">"json"</span>
                    </div>
                  </div>
                  <div className="text-white">{'}'}</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Status Bar */}
        <div className="bg-vscode-blue px-4 py-2 text-xs flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span>Ln 1, Col 1</span>
            <span>UTF-8</span>
            <span>JavaScript</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Issues: 156</span>
            <span>Warnings: 45</span>
            <span>Errors: 23</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VSCodeStyle;