import React, { useState } from 'react';
import { Palette, Eye, Heart, Zap, Shield, Target, Copy, Check, ArrowRight, Code, Sparkles, Bot, FileText, Building2, Gamepad2, Laptop, Paintbrush, Users } from 'lucide-react';
import { tailwindConfigs } from './utils/tailwind-configs';
import { getAIPrompt } from './utils/ai-prompts';

const DesignComparison = () => {
  const [selectedDesign, setSelectedDesign] = useState<DesignKey>('friendly-approachable');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedConfig, setCopiedConfig] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  const categories = {
    all: {
      name: 'All Styles',
      icon: Palette,
      description: 'Browse all available design styles'
    },
    business: {
      name: 'Business & Professional',
      icon: Building2,
      description: 'Styles for corporate, B2B, and professional services'
    },
    creative: {
      name: 'Creative & Artistic',
      icon: Paintbrush,
      description: 'Bold, expressive styles for creative agencies and artists'
    },
    technical: {
      name: 'Technical & Developer',
      icon: Laptop,
      description: 'Styles for tech products, tools, and developer-focused sites'
    },
    friendly: {
      name: 'User-Friendly & Approachable',
      icon: Users,
      description: 'Welcoming styles that build trust and reduce anxiety'
    },
    entertainment: {
      name: 'Entertainment & Gaming',
      icon: Gamepad2,
      description: 'Fun, energetic styles for entertainment and gaming'
    }
  };

  const designs = {
    'friendly-approachable': {
      ...tailwindConfigs['friendly-approachable'],
      colors: ['bg-gradient-to-br from-orange-400 to-amber-500', 'bg-orange-100', 'bg-amber-50'],
      personality: 'Encouraging, supportive, human-centered',
      bestFor: 'Building trust, reducing anxiety, first-time users',
      vibe: '😊 "We\'re here to help you succeed!"',
      pros: ['Reduces intimidation', 'Builds emotional connection', 'Encourages engagement'],
      cons: ['May seem less professional', 'Could appear too casual for enterprise'],
      category: 'friendly',
      preview: {
        headerBg: 'bg-gradient-to-br from-orange-50 to-amber-50',
        cardBg: 'bg-white/90 backdrop-blur-sm',
        buttonBg: 'bg-gradient-to-r from-orange-400 to-amber-500',
        textColor: 'text-gray-800',
        accentColor: 'text-orange-500'
      }
    },
    'human-centric': {
      ...tailwindConfigs['human-centric'],
      colors: ['bg-gradient-to-br from-blue-400 to-purple-500', 'bg-blue-50', 'bg-indigo-50'],
      personality: 'Empathetic, caring, supportive',
      bestFor: 'Healthcare, education, social causes, user onboarding',
      vibe: '💙 "We understand and care about your journey."',
      pros: ['Builds emotional connection', 'Reduces anxiety', 'Encourages trust'],
      cons: ['May seem too soft for some industries', 'Could lack authority'],
      category: 'friendly',
      preview: {
        headerBg: 'bg-gradient-to-br from-blue-50 to-indigo-50',
        cardBg: 'bg-white/70 backdrop-blur-sm',
        buttonBg: 'bg-gradient-to-r from-blue-500 to-purple-600',
        textColor: 'text-gray-800',
        accentColor: 'text-blue-500'
      }
    },
    'modern-minimalist': {
      ...tailwindConfigs['modern-minimalist'],
      colors: ['bg-minimal-gray', 'bg-white', 'bg-gray-100'],
      personality: 'Sophisticated, premium, refined',
      bestFor: 'Luxury brands, high-end services, premium positioning',
      vibe: '✨ "Less is more, elegance is everything."',
      pros: ['Premium feel', 'Timeless design', 'Focuses attention'],
      cons: ['May seem cold', 'Less personality', 'Can be boring'],
      category: 'business',
      preview: {
        headerBg: 'bg-white',
        cardBg: 'bg-white',
        buttonBg: 'bg-minimal-accent',
        textColor: 'text-minimal-dark',
        accentColor: 'text-minimal-accent'
      }
    },
    'professional-brutalism': {
      ...tailwindConfigs['professional-brutalism'],
      colors: ['bg-slate-900', 'bg-blue-600', 'bg-gray-100'],
      personality: 'Confident, direct, no-nonsense',
      bestFor: 'B2B sales, enterprise clients, establishing authority',
      vibe: '💼 "We mean business and deliver results."',
      pros: ['Builds credibility', 'Stands out from competition', 'Appeals to decision-makers'],
      cons: ['Can feel intimidating', 'Less approachable', 'May overwhelm some users'],
      category: 'business',
      preview: {
        headerBg: 'bg-gray-50',
        cardBg: 'bg-white',
        buttonBg: 'bg-slate-900',
        textColor: 'text-slate-900',
        accentColor: 'text-blue-600'
      }
    },
    'clean-lab': {
      ...tailwindConfigs['clean-lab'],
      colors: ['bg-white', 'bg-blue-50', 'bg-gray-50'],
      personality: 'Analytical, trustworthy, methodical',
      bestFor: 'Technical audiences, detailed reporting, compliance',
      vibe: '🔬 "Precise, accurate, scientifically sound."',
      pros: ['Builds technical trust', 'Easy to scan', 'Professional appearance'],
      cons: ['Can feel sterile', 'Less emotional appeal', 'May seem boring'],
      category: 'technical',
      preview: {
        headerBg: 'bg-gray-50',
        cardBg: 'bg-white',
        buttonBg: 'bg-blue-600',
        textColor: 'text-gray-900',
        accentColor: 'text-blue-600'
      }
    },
    'data-minimalism': {
      ...tailwindConfigs['data-minimalism'],
      colors: ['bg-white', 'bg-gray-50', 'bg-gray-100'],
      personality: 'Analytical, precise, no-nonsense',
      bestFor: 'Analytics tools, developer tools, data-heavy applications',
      vibe: '📊 "Just the facts, clearly presented."',
      pros: ['Excellent information density', 'Appeals to technical users', 'Fast to scan'],
      cons: ['Can feel cold', 'Less engaging', 'May intimidate non-technical users'],
      category: 'technical',
      preview: {
        headerBg: 'bg-white',
        cardBg: 'bg-white',
        buttonBg: 'bg-gray-800',
        textColor: 'text-gray-900',
        accentColor: 'text-blue-600'
      }
    },
    'vscode-style': {
      ...tailwindConfigs['vscode-style'],
      colors: ['bg-vscode-bg', 'bg-vscode-sidebar', 'bg-vscode-blue'],
      personality: 'Technical, familiar, functional',
      bestFor: 'Developer tools, code editors, technical products',
      vibe: '💻 "Familiar, functional, and developer-friendly."',
      pros: ['Familiar to developers', 'Highly functional', 'Professional'],
      cons: ['Limited appeal', 'Can seem intimidating', 'Very technical'],
      category: 'technical',
      preview: {
        headerBg: 'bg-vscode-sidebar',
        cardBg: 'bg-vscode-bg',
        buttonBg: 'bg-vscode-blue',
        textColor: 'text-white',
        accentColor: 'text-vscode-green'
      }
    },
    'sleek-dark-mode': {
      ...tailwindConfigs['sleek-dark-mode'],
      colors: ['bg-dark-bg', 'bg-dark-surface', 'bg-dark-accent'],
      personality: 'Modern, sophisticated, high-tech',
      bestFor: 'Tech products, gaming, modern applications',
      vibe: '🌙 "Sleek, modern, and effortlessly cool."',
      pros: ['Modern appeal', 'Reduces eye strain', 'Premium feel'],
      cons: ['Not suitable for all audiences', 'Accessibility challenges', 'Can feel cold'],
      category: 'technical',
      preview: {
        headerBg: 'bg-dark-surface',
        cardBg: 'bg-dark-surface',
        buttonBg: 'bg-dark-accent',
        textColor: 'text-dark-text',
        accentColor: 'text-dark-accent'
      }
    },
    'editorial-layout': {
      ...tailwindConfigs['editorial-layout'],
      colors: ['bg-editorial-cream', 'bg-white', 'bg-editorial-gold'],
      personality: 'Sophisticated, readable, authoritative',
      bestFor: 'Publications, content-heavy sites, blogs',
      vibe: '📰 "Timeless elegance meets modern readability."',
      pros: ['Excellent readability', 'Professional appearance', 'Content-focused'],
      cons: ['Can seem traditional', 'Less interactive', 'May appear dated'],
      category: 'business',
      preview: {
        headerBg: 'bg-white',
        cardBg: 'bg-editorial-cream',
        buttonBg: 'bg-editorial-burgundy',
        textColor: 'text-editorial-charcoal',
        accentColor: 'text-editorial-gold'
      }
    },
    'refined-brutalism': {
      ...tailwindConfigs['refined-brutalism'],
      colors: ['bg-gradient-to-r from-blue-600 to-purple-600', 'bg-white', 'bg-gray-100'],
      personality: 'Adaptable, modern, premium',
      bestFor: 'Agencies wanting brand flexibility, premium positioning',
      vibe: '🎨 "Bold yet refined - your brand, your way."',
      pros: ['Highly customizable', 'Premium feel', 'Memorable design'],
      cons: ['More complex', 'Requires brand decisions', 'Can be overwhelming'],
      category: 'creative',
      preview: {
        headerBg: 'bg-gray-100',
        cardBg: 'bg-white',
        buttonBg: 'bg-gradient-to-r from-blue-600 to-purple-600',
        textColor: 'text-gray-900',
        accentColor: 'text-blue-600'
      }
    },
    'neo-brutalism': {
      ...tailwindConfigs['neo-brutalism'],
      colors: ['bg-black', 'bg-electric', 'bg-neon-green'],
      personality: 'Bold, rebellious, attention-grabbing',
      bestFor: 'Creative agencies, disruptive brands, making a statement',
      vibe: '⚡ "Break the rules, demand attention!"',
      pros: ['Extremely memorable', 'Stands out completely', 'Appeals to creative audiences'],
      cons: ['Can be overwhelming', 'Not suitable for conservative brands', 'Accessibility concerns'],
      category: 'creative',
      preview: {
        headerBg: 'bg-white',
        cardBg: 'bg-black',
        buttonBg: 'bg-yellow-400',
        textColor: 'text-white',
        accentColor: 'text-yellow-400'
      }
    },
    'playful-whimsical': {
      ...tailwindConfigs['playful-whimsical'],
      colors: ['bg-playful-pink', 'bg-playful-yellow', 'bg-playful-mint'],
      personality: 'Fun, energetic, joyful',
      bestFor: 'Creative agencies, children\'s products, youth brands',
      vibe: '🎉 "Life\'s too short for boring design!"',
      pros: ['Highly engaging', 'Memorable', 'Appeals to younger audiences'],
      cons: ['Not suitable for serious industries', 'Can be overwhelming', 'May seem unprofessional'],
      category: 'entertainment',
      preview: {
        headerBg: 'bg-gradient-to-br from-playful-mint to-playful-yellow',
        cardBg: 'bg-white/90 backdrop-blur-sm',
        buttonBg: 'bg-gradient-to-r from-playful-pink to-playful-purple',
        textColor: 'text-gray-800',
        accentColor: 'text-playful-pink'
      }
    },
    'eighties-retro': {
      ...tailwindConfigs['eighties-retro'],
      colors: ['bg-retro-pink', 'bg-retro-cyan', 'bg-retro-purple'],
      personality: 'Nostalgic, bold, energetic',
      bestFor: 'Entertainment, gaming, creative projects',
      vibe: '🕺 "Totally radical and absolutely electric!"',
      pros: ['Extremely memorable', 'Appeals to nostalgia', 'High energy'],
      cons: ['Very niche appeal', 'Can be overwhelming', 'Not suitable for serious business'],
      category: 'entertainment',
      preview: {
        headerBg: 'bg-black',
        cardBg: 'bg-retro-purple',
        buttonBg: 'bg-retro-yellow',
        textColor: 'text-white',
        accentColor: 'text-retro-cyan'
      }
    }
  };

  type DesignKey = keyof typeof designs; 
  const currentDesign = designs[selectedDesign];
  const currentPrompt = getAIPrompt(selectedDesign);

  // Filter designs by category
  const filteredDesigns = selectedCategory === 'all' 
    ? Object.entries(designs)
    : Object.entries(designs).filter(([key, design]) => design.category === selectedCategory);

  const copyConfigToClipboard = async () => {
    const configString = `module.exports = {
  theme: {
    extend: ${JSON.stringify(currentDesign.config, null, 6).replace(/"/g, "'")}
  }
}`;
    
    try {
      await navigator.clipboard.writeText(configString);
      setCopiedConfig(true);
      setTimeout(() => setCopiedConfig(false), 2000);
    } catch (err) {
      console.error('Failed to copy config:', err);
    }
  };

  const copyPromptToClipboard = async () => {
    if (!currentPrompt) return;
    
    const promptString = `# ${currentPrompt.style} Design Style

## Main Prompt:
${currentPrompt.prompt}

## Key Implementation Notes:
${currentPrompt.additionalInstructions.map(instruction => `• ${instruction}`).join('\n')}

## Essential CSS Classes:
${currentPrompt.keyElements.map(element => `• ${element}`).join('\n')}

## Tailwind Config:
\`\`\`javascript
module.exports = {
  theme: {
    extend: ${JSON.stringify(currentDesign.config, null, 6).replace(/"/g, "'")}
  }
}
\`\`\``;
    
    try {
      await navigator.clipboard.writeText(promptString);
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 2000);
    } catch (err) {
      console.error('Failed to copy prompt:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative z-0">
      {/* Hero Section */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="text-center">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Palette className="text-purple-500" size={32} />
                <Sparkles className="text-blue-500" size={24} />
                <Eye className="text-green-500" size={28} />
              </div>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Choose Your Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Personality</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each design style creates a different emotional response and serves different business goals. 
              Browse by category to find the perfect match for your project.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Category Filter */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Browse by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {Object.entries(categories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`p-3 sm:p-4 rounded-xl border-2 transition-all text-center ${
                  selectedCategory === key
                    ? 'border-blue-500 bg-blue-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <category.icon 
                  className={`mx-auto mb-2 ${selectedCategory === key ? 'text-blue-600' : 'text-gray-600'}`} 
                  size={20} 
                />
                <div className={`text-xs sm:text-sm font-medium ${selectedCategory === key ? 'text-blue-900' : 'text-gray-700'}`}>
                  {category.name}
                </div>
              </button>
            ))}
          </div>
          
          {selectedCategory !== 'all' && (
            <div className="mt-4 text-center">
              <p className="text-gray-600 text-sm sm:text-base">
                {categories[selectedCategory].description}
              </p>
            </div>
          )}
        </div>

        {/* Style Selector Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {filteredDesigns.map(([key, design]) => (
            <button
              key={key}
              onClick={() => setSelectedDesign(key as DesignKey)}
              className={`group relative p-6 sm:p-8 rounded-2xl border-2 transition-all text-left overflow-hidden ${
                selectedDesign === key
                  ? 'border-blue-500 bg-blue-50 shadow-xl scale-105'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg hover:scale-102'
              }`}
            >
              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  selectedDesign === key 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {categories[design.category]?.name || 'Other'}
                </span>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full bg-gradient-to-br from-gray-900 to-transparent"></div>
              </div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg sm:text-xl text-gray-900 pr-16">{design.name}</h3>
                  {selectedDesign === key && (
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center absolute top-0 right-0">
                      <Check className="text-white" size={16} />
                    </div>
                  )}
                </div>
                
                <div className="flex space-x-2 mb-4">
                  {design.colors.map((color, index) => (
                    <div key={index} className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg ${color} border border-gray-300 shadow-sm`}></div>
                  ))}
                </div>
                
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{design.description}</p>
                
                <div className="text-base sm:text-lg font-medium text-gray-700 mb-3">{design.vibe}</div>
                
                <div className="text-xs sm:text-sm text-gray-500">
                  <strong>Best for:</strong> {design.bestFor}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Design Deep Dive */}
        <div className="space-y-6 sm:space-y-8">
          {/* Live Preview */}
          <div className={`${currentDesign.preview.headerBg} rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-lg`}>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
              Live Preview: {currentDesign.name}
            </h2>
            
            {/* Mini Dashboard Preview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className={`${currentDesign.preview.cardBg} rounded-2xl p-4 sm:p-6 ${selectedDesign === 'professional-brutalism' ? 'border-4 border-black shadow-pro-brutal' : selectedDesign === 'neo-brutalism' ? 'border-4 border-black' : 'shadow-lg'}`}>
                <h3 className={`text-base sm:text-lg font-bold ${currentDesign.preview.textColor} mb-2`}>
                  Accessibility Score
                </h3>
                <div className={`text-3xl sm:text-4xl font-black ${currentDesign.preview.accentColor} mb-2`}>78</div>
                <p className="text-gray-600 text-sm">Great progress!</p>
              </div>
              
              <div className={`${currentDesign.preview.cardBg} rounded-2xl p-4 sm:p-6 ${selectedDesign === 'professional-brutalism' ? 'border-4 border-black shadow-pro-brutal' : selectedDesign === 'neo-brutalism' ? 'border-4 border-black' : 'shadow-lg'}`}>
                <h3 className={`text-base sm:text-lg font-bold ${currentDesign.preview.textColor} mb-2`}>
                  Issues Found
                </h3>
                <div className={`text-3xl sm:text-4xl font-black ${currentDesign.preview.accentColor} mb-2`}>23</div>
                <p className="text-gray-600 text-sm">Ready to fix</p>
              </div>
              
              <div className={`${currentDesign.preview.cardBg} rounded-2xl p-4 sm:p-6 ${selectedDesign === 'professional-brutalism' ? 'border-4 border-black shadow-pro-brutal' : selectedDesign === 'neo-brutalism' ? 'border-4 border-black' : 'shadow-lg'} sm:col-span-2 lg:col-span-1`}>
                <button className={`w-full ${currentDesign.preview.buttonBg} text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-bold ${selectedDesign === 'professional-brutalism' ? 'border-2 border-white' : selectedDesign === 'neo-brutalism' ? 'border-4 border-black text-black' : ''} hover:shadow-lg transition-all text-sm sm:text-base`}>
                  {selectedDesign === 'neo-brutalism' ? 'SCAN NOW!' : 'Start New Scan'}
                </button>
              </div>
            </div>
          </div>

          {/* Analysis & Implementation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Personality Analysis */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                <Heart className="mr-2 sm:mr-3 text-pink-500" size={24} />
                Design Psychology
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Category</h4>
                  <div className="flex items-center space-x-2">
                    {React.createElement(categories[currentDesign.category]?.icon || Palette, { 
                      size: 16, 
                      className: "text-blue-600" 
                    })}
                    <span className="text-blue-600 font-medium">{categories[currentDesign.category]?.name}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Emotional Impact</h4>
                  <p className="text-gray-600 text-sm sm:text-base">{currentDesign.personality}</p>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Perfect For</h4>
                  <p className="text-gray-600 text-sm sm:text-base">{currentDesign.bestFor}</p>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Brand Voice</h4>
                  <p className="text-gray-600 text-base sm:text-lg font-medium">{currentDesign.vibe}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 sm:mt-6">
                  <div>
                    <h5 className="font-semibold text-green-700 mb-2 text-sm sm:text-base">✅ Strengths</h5>
                    <ul className="text-xs sm:text-sm space-y-1">
                      {currentDesign.pros.map((pro, index) => (
                        <li key={index} className="text-gray-700">• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-orange-700 mb-2 text-sm sm:text-base">⚠️ Consider</h5>
                    <ul className="text-xs sm:text-sm space-y-1">
                      {currentDesign.cons.map((con, index) => (
                        <li key={index} className="text-gray-700">• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Implementation Guide */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center">
                  <Code className="mr-2 sm:mr-3 text-blue-500" size={24} />
                  Implementation
                </h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setShowPrompt(!showPrompt)}
                    className="px-3 sm:px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors font-medium text-sm flex items-center"
                  >
                    <Bot className="mr-1" size={16} />
                    {showPrompt ? 'Hide' : 'AI'} Prompt
                  </button>
                  <button
                    onClick={() => setShowCode(!showCode)}
                    className="px-3 sm:px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors font-medium text-sm"
                  >
                    {showCode ? 'Hide' : 'Show'} Code
                  </button>
                </div>
              </div>

              {showPrompt && currentPrompt ? (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-800 flex items-center">
                      <Bot className="mr-2 text-purple-500" size={20} />
                      AI Prompt for {currentPrompt.style}
                    </h4>
                    <button
                      onClick={copyPromptToClipboard}
                      className="p-2 bg-purple-100 hover:bg-purple-200 rounded text-purple-700 transition-colors"
                      title="Copy AI prompt"
                    >
                      {copiedPrompt ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                  
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
                    <p className="text-sm text-purple-800 font-medium mb-2">Copy this prompt to your AI assistant:</p>
                    <div className="bg-white border border-purple-200 rounded p-3 text-sm text-gray-700 max-h-48 overflow-y-auto">
                      {currentPrompt.prompt}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2 text-sm">Key Instructions:</h5>
                      <ul className="text-xs space-y-1">
                        {currentPrompt.additionalInstructions.slice(0, 4).map((instruction, index) => (
                          <li key={index} className="text-gray-600">• {instruction}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2 text-sm">Essential Classes:</h5>
                      <div className="flex flex-wrap gap-1">
                        {currentPrompt.keyElements.slice(0, 3).map((element, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-mono">
                            {element.split(' ')[0]}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : showCode ? (
                <div>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    Add this to your <code className="bg-gray-100 px-2 py-1 rounded text-xs sm:text-sm">tailwind.config.js</code>:
                  </p>
                  
                  <div className="relative">
                    <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm max-h-64">
                      <code>{`module.exports = {
  theme: {
    extend: ${JSON.stringify(currentDesign.config, null, 6).replace(/"/g, "'")}
  }
}`}</code>
                    </pre>
                    <button
                      onClick={copyConfigToClipboard}
                      className="absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded text-white transition-colors"
                      title="Copy configuration"
                    >
                      {copiedConfig ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <h4 className="font-semibold text-blue-800 mb-2 text-sm sm:text-base">Implementation Notes</h4>
                    <p className="text-blue-700 text-xs sm:text-sm">{currentDesign.notes}</p>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs sm:text-sm text-gray-600 mb-4">
                      Want to see this style in action? Check out the full implementation:
                    </p>
                    <button 
                      onClick={() => {
                        // This would trigger navigation to the actual style
                        const event = new CustomEvent('navigate-to-style', { detail: selectedDesign });
                        window.dispatchEvent(event);
                      }}
                      className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all font-medium text-sm sm:text-base"
                    >
                      View Full Implementation
                      <ArrowRight className="ml-2" size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Category-Based Recommendations */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Choose by Your Industry</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-sm">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🏢</div>
                <h4 className="font-bold mb-2 text-sm sm:text-base">Corporate & B2B</h4>
                <p className="text-xs sm:text-sm text-gray-600">Choose <strong>Professional Brutalism</strong> or <strong>Modern Minimalist</strong></p>
              </div>
              
              <div className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-sm">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🎨</div>
                <h4 className="font-bold mb-2 text-sm sm:text-base">Creative Agencies</h4>
                <p className="text-xs sm:text-sm text-gray-600">Choose <strong>Neo-Brutalism</strong> or <strong>Refined Brutalism</strong></p>
              </div>
              
              <div className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-sm">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">💻</div>
                <h4 className="font-bold mb-2 text-sm sm:text-base">Tech & SaaS</h4>
                <p className="text-xs sm:text-sm text-gray-600">Choose <strong>Sleek Dark Mode</strong> or <strong>VS Code Style</strong></p>
              </div>
              
              <div className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-sm">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🏥</div>
                <h4 className="font-bold mb-2 text-sm sm:text-base">Healthcare & Education</h4>
                <p className="text-xs sm:text-sm text-gray-600">Choose <strong>Human-Centric</strong> or <strong>Friendly & Approachable</strong></p>
              </div>
              
              <div className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-sm">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🎮</div>
                <h4 className="font-bold mb-2 text-sm sm:text-base">Gaming & Entertainment</h4>
                <p className="text-xs sm:text-sm text-gray-600">Choose <strong>80s Retro</strong> or <strong>Playful & Whimsical</strong></p>
              </div>
              
              <div className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-sm">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">📰</div>
                <h4 className="font-bold mb-2 text-sm sm:text-base">Publishing & Content</h4>
                <p className="text-xs sm:text-sm text-gray-600">Choose <strong>Editorial Layout</strong> or <strong>Clean Lab</strong></p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                <strong>Not sure?</strong> Consider your primary audience and the action you want them to take.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <button 
                  onClick={() => {
                    setSelectedCategory('friendly');
                    setSelectedDesign('friendly-approachable');
                  }}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium text-sm sm:text-base"
                >
                  👥 Prioritize User Comfort
                </button>
                <button 
                  onClick={() => {
                    setSelectedCategory('business');
                    setSelectedDesign('professional-brutalism');
                  }}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium text-sm sm:text-base"
                >
                  💪 Show Authority & Results
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignComparison;