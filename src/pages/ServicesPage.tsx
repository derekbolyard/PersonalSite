import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  TrendingUp, 
  AlertTriangle,
  Code,
  Zap,
  Target,
  ArrowRight,
  Star,
  Calendar,
  FileText,
  Users,
  Award,
  BarChart3
} from 'lucide-react';

export default function ServicesPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookCall = () => {
    // Replace with actual Calendly link
    window.open('https://calendly.com/derekbolyard', '_blank', 'noopener,noreferrer');
  };

  const handleEmailContact = () => {
    const subject = encodeURIComponent("Services Inquiry - Let's Discuss Your Project");
    const body = encodeURIComponent(
      "Hi Derek,\n\nI'm interested in your services for my project. Here are some details:\n\n" +
      "• Current stage: [MVP/Pre-launch/Post-launch]\n" +
      "• Tech stack: [Your stack]\n" +
      "• Main concerns: [Performance/Testing/Security/Other]\n" +
      "• Timeline: [When do you need this done?]\n\n" +
      "Let's schedule a call to discuss further.\n\nBest regards,"
    );
    window.location.href = `mailto:derekbolyard@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            {/* Problem Statement */}
            <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-sm font-medium mb-8">
              <AlertTriangle className="w-4 h-4 mr-2" />
              AI-coded MVPs crash at scale
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Your AI‑coded MVP will crash at{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                100 users
              </span>
              <br />
              <span className="text-4xl md:text-5xl text-gray-300">I stop that.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Fixed‑scope, fixed‑price hardening packages that turn shaky prototypes 
              into investor‑ready products.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleBookCall}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Repo Gut-Check
              </button>
              <button
                onClick={handleEmailContact}
                className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                <FileText className="w-5 h-5 mr-2" />
                Get Custom Quote
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">4 weeks</div>
              <div className="text-gray-400">Max delivery time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">Fixed price</div>
              <div className="text-gray-400">No surprises</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">70%+</div>
              <div className="text-gray-400">Test coverage</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">30 min</div>
              <div className="text-gray-400">Live debrief</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Packages */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Hardening Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing, clear deliverables, guaranteed timelines
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Flagship Package */}
            <div className="relative bg-white rounded-2xl shadow-xl border-2 border-blue-500 overflow-hidden">
              {/* Popular Badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 text-sm font-bold">
                MOST POPULAR
              </div>

              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Launch‑Ready Hardening</h3>
                    <p className="text-gray-600">Flagship Package</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    $2,500
                    <span className="text-lg text-gray-500 font-normal"> USD</span>
                  </div>
                  <p className="text-gray-600">Fixed price • ≤ 4 weeks delivery</p>
                </div>

                <div className="mb-8">
                  <p className="text-gray-700 mb-4 font-medium">
                    <strong>Who it's for:</strong> Founders preparing to demo to investors, 
                    onboard paying customers, or survive a Product Hunt spike.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-bold text-gray-900 text-lg">What you get:</h4>
                  {[
                    '≥ 70% critical‑path test coverage (unit + integration)',
                    'Automated CI pipeline (lint, SCA, security checks, deploy)',
                    'Basic observability stack (structured logs, alerts, dashboard)',
                    'Performance + cost audit with top‑3 "quick‑win" fixes',
                    '30‑minute live debrief & next‑step roadmap'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleBookCall}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Start Hardening Process
                </button>
              </div>
            </div>

            {/* Starter Package */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">MVP Health Check</h3>
                    <p className="text-gray-600">Starter Package</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    $499
                    <span className="text-lg text-gray-500 font-normal"> USD</span>
                  </div>
                  <p className="text-gray-600">Intro price • 1 day delivery</p>
                </div>

                <div className="mb-8">
                  <p className="text-gray-700 mb-6">
                    A one‑day static analysis & dependency audit capped with a 30‑minute 
                    teardown call and a priority‑ranked fix list.
                  </p>

                  <div className="space-y-3">
                    {[
                      'Complete codebase security scan',
                      'Dependency vulnerability audit',
                      'Performance bottleneck identification',
                      '30-minute live teardown call',
                      'Priority-ranked action plan'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleBookCall}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Health Check
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Proof of Impact</h2>
            <p className="text-xl text-gray-600">Real results from real projects</p>
          </div>

          {/* Before/After Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">92%</div>
              <div className="text-gray-600">Crash rate reduction</div>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">38%</div>
              <div className="text-gray-600">Infrastructure cost savings</div>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4x</div>
              <div className="text-gray-600">Faster deployment cycles</div>
            </div>
          </div>

          {/* Client Testimonial */}
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400 mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">Verified Client</span>
            </div>
            <blockquote className="text-xl text-gray-700 italic mb-6">
              "We closed our pre‑seed round right after Derek's hardening sprint. 
              Crash rate down 92%, infra cost down 38%. The investors were impressed 
              by our technical foundation."
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-gray-900">Sarah Chen</div>
                <div className="text-gray-600">Founder, TechFlow AI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Call Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Book a Free Repo Gut‑Check
          </h2>
          <p className="text-xl mb-8 opacity-90">
            3 slots/week • Zero obligation • Every call ends with one actionable next step
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Clock className="w-8 h-8 mx-auto mb-3 text-blue-300" />
                <div className="font-bold mb-2">15-30 Minutes</div>
                <div className="text-sm opacity-80">Quick but thorough</div>
              </div>
              <div>
                <Shield className="w-8 h-8 mx-auto mb-3 text-green-300" />
                <div className="font-bold mb-2">Zero Obligation</div>
                <div className="text-sm opacity-80">No pressure, just value</div>
              </div>
              <div>
                <Target className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
                <div className="font-bold mb-2">Actionable Insights</div>
                <div className="text-sm opacity-80">Leave with next steps</div>
              </div>
            </div>
          </div>

          <button
            onClick={handleBookCall}
            className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Schedule Your Free Call
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            {[
              {
                question: "Why fixed‑price?",
                answer: "You deserve certainty; I scope ruthlessly so you know the exact deliverables and timeline. No scope creep, no surprise bills."
              },
              {
                question: "Do you rewrite entire codebases?",
                answer: "No. I stabilise what exists and highlight the 20% of files causing 80% of risk. Full rebuilds are a separate engagement if needed."
              },
              {
                question: "What tech stacks do you cover?",
                answer: "Anything JavaScript/TypeScript, .NET, or Python‑based, plus common cloud platforms (Fly, Netlify, Vercel, AWS, DigitalOcean)."
              },
              {
                question: "How do you guarantee the timeline?",
                answer: "I only take on projects I can complete within the stated timeframe. If I can't deliver on time, you don't pay."
              },
              {
                question: "What if my codebase is too messy?",
                answer: "I've seen it all. The messier it is, the more value I can add. I'll prioritize the highest-impact fixes first."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Q: {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>A:</strong> {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog CTA */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Not Ready Yet?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Learn how to identify and fix the most common issues in AI-generated code
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center mb-4">
              <FileText className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold">Featured Article</h3>
            </div>
            <h4 className="text-xl font-semibold mb-4 text-blue-300">
              "7 Cost Bombs in AI‑Generated MVPs (and How to Defuse Them)"
            </h4>
            <p className="text-gray-300 mb-6">
              A deep dive into the most expensive mistakes I see in AI-generated codebases, 
              with practical fixes you can implement today.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg transition-colors">
              Read the Article
            </button>
          </div>
        </div>
      </section>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <ArrowRight className="w-5 h-5 transform -rotate-90" />
        </button>
      )}
    </div>
  );
}