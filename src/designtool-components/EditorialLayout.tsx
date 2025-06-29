import React from 'react';
import { BookOpen, PenTool, Eye, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

const EditorialLayout = () => {
  return (
    <div className="min-h-screen bg-editorial-cream font-body">
      {/* Header */}
      <header className="bg-white border-b-2 border-editorial-gold">
        <div className="max-w-4xl mx-auto px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-editorial-charcoal rounded-sm flex items-center justify-center">
                <BookOpen className="text-editorial-gold" size={24} />
              </div>
              <div>
                <h1 className="text-3xl font-editorial text-editorial-charcoal">
                  AuditTool
                </h1>
                <p className="text-sm text-gray-600 italic">Professional Accessibility Review</p>
              </div>
            </div>
            <button className="bg-editorial-burgundy text-white px-6 py-3 rounded-sm hover:bg-opacity-90 transition-colors font-medium">
              New Analysis
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* Lead Article Style */}
        <article className="mb-16">
          <header className="mb-8 text-center border-b border-editorial-gold pb-8">
            <h1 className="text-5xl font-editorial text-editorial-charcoal mb-4 leading-tight">
              Accessibility Analysis Report
            </h1>
            <p className="text-xl text-gray-600 italic max-w-2xl mx-auto leading-relaxed">
              A comprehensive review of your website's accessibility compliance, 
              highlighting areas of excellence and opportunities for improvement.
            </p>
            <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-gray-500">
              <span>Published Today</span>
              <span>•</span>
              <span>5 min read</span>
              <span>•</span>
              <span>Technical Analysis</span>
            </div>
          </header>

          {/* Key Statistics - Editorial Style */}
          <div className="grid grid-cols-3 gap-8 mb-12 text-center">
            <div className="border-l-4 border-editorial-gold pl-6">
              <div className="text-4xl font-editorial text-editorial-charcoal mb-2">78</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">Accessibility Score</div>
              <p className="text-xs text-gray-500 mt-2 italic">Above industry average</p>
            </div>
            <div className="border-l-4 border-editorial-burgundy pl-6">
              <div className="text-4xl font-editorial text-editorial-charcoal mb-2">24</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">Pages Reviewed</div>
              <p className="text-xs text-gray-500 mt-2 italic">Comprehensive coverage</p>
            </div>
            <div className="border-l-4 border-gray-400 pl-6">
              <div className="text-4xl font-editorial text-editorial-charcoal mb-2">156</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">Issues Identified</div>
              <p className="text-xs text-gray-500 mt-2 italic">Actionable improvements</p>
            </div>
          </div>

          {/* Main Content - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Article */}
            <div className="lg:col-span-2">
              <section className="mb-12">
                <h2 className="text-3xl font-editorial text-editorial-charcoal mb-6 border-b border-gray-300 pb-3">
                  Executive Summary
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    Our comprehensive accessibility audit reveals a website that demonstrates 
                    strong foundational accessibility practices while presenting several 
                    opportunities for enhancement. The overall accessibility score of 78 
                    places your site above the industry median.
                  </p>
                  
                  <h3 className="text-2xl font-editorial text-editorial-charcoal mb-4">
                    Critical Findings
                  </h3>
                  
                  <div className="space-y-8">
                    {[
                      {
                        title: 'Image Alternative Text Deficiency',
                        description: 'Twenty-three images across the site lack proper alternative text descriptions, potentially excluding users who rely on screen readers.',
                        impact: 'High',
                        recommendation: 'Implement descriptive alt text for all informational images.',
                        icon: AlertCircle,
                        color: 'editorial-burgundy'
                      },
                      {
                        title: 'Color Contrast Optimization',
                        description: 'Forty-five text elements fall below WCAG AA contrast standards, particularly in secondary navigation and footer areas.',
                        impact: 'Medium',
                        recommendation: 'Adjust color values to meet minimum 4.5:1 contrast ratio.',
                        icon: Eye,
                        color: 'editorial-gold'
                      },
                      {
                        title: 'Form Accessibility Enhancement',
                        description: 'Twelve form inputs require improved labeling and error messaging for optimal screen reader compatibility.',
                        impact: 'Medium',
                        recommendation: 'Associate labels with inputs and provide clear error instructions.',
                        icon: CheckCircle,
                        color: 'green-600'
                      }
                    ].map((finding, index) => (
                      <div key={index} className="border-l-4 border-gray-300 pl-6 py-4">
                        <div className="flex items-start space-x-4">
                          <finding.icon className={`text-${finding.color} mt-1`} size={20} />
                          <div className="flex-1">
                            <h4 className="text-xl font-editorial text-editorial-charcoal mb-3">
                              {finding.title}
                            </h4>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              {finding.description}
                            </p>
                            <div className="bg-gray-50 p-4 rounded-sm border-l-2 border-editorial-gold">
                              <p className="text-sm text-gray-600 italic">
                                <strong>Recommendation:</strong> {finding.recommendation}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Progress Sidebar */}
              <div className="bg-white p-6 shadow-editorial mb-8 border-t-4 border-editorial-gold">
                <h3 className="text-xl font-editorial text-editorial-charcoal mb-6">
                  Progress Metrics
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-gray-700">Overall Compliance</span>
                      <span className="text-lg font-editorial text-editorial-charcoal">78%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2">
                      <div className="bg-editorial-gold h-2 transition-all duration-1000" style={{ width: '78%' }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">+12 point improvement this quarter</p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-gray-700">Issues Resolved</span>
                      <span className="text-lg font-editorial text-editorial-charcoal">57%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2">
                      <div className="bg-editorial-burgundy h-2 transition-all duration-1000" style={{ width: '57%' }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">89 of 156 total issues addressed</p>
                  </div>
                </div>
              </div>

              {/* Recent Reviews */}
              <div className="bg-white p-6 shadow-editorial border-t-4 border-editorial-burgundy">
                <h3 className="text-xl font-editorial text-editorial-charcoal mb-6">
                  Recent Reviews
                </h3>
                
                <div className="space-y-4">
                  {[
                    { page: 'Homepage Analysis', score: 82, date: 'Jan 15, 2024' },
                    { page: 'About Section Review', score: 76, date: 'Jan 14, 2024' },
                    { page: 'Contact Form Audit', score: 91, date: 'Jan 12, 2024' },
                  ].map((review, index) => (
                    <article key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <h4 className="font-medium text-editorial-charcoal mb-2">{review.page}</h4>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{review.date}</span>
                        <span className="font-editorial text-lg text-editorial-charcoal">{review.score}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default EditorialLayout;