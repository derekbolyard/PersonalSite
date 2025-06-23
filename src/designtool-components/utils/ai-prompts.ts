export interface AIPrompt {
  style: string;
  prompt: string;
  additionalInstructions: string[];
  keyElements: string[];
}

export const aiPrompts: Record<string, AIPrompt> = {
  'friendly-approachable': {
    style: 'Friendly & Approachable',
    prompt: `Create a warm, welcoming web interface with a friendly and approachable design aesthetic. Use soft orange and amber gradients, generous rounded corners (rounded-3xl), and gentle shadows. The design should feel encouraging and supportive, reducing user anxiety while building trust. Include soft backdrop blur effects, warm color palettes, and plenty of whitespace. Typography should be friendly but professional using Inter font family. Add subtle animations and hover states that feel welcoming rather than aggressive.`,
    additionalInstructions: [
      'Use orange-400 to amber-500 gradients for primary elements',
      'Apply rounded-3xl to most containers and buttons',
      'Include backdrop-blur-sm effects on cards',
      'Add soft shadows (shadow-lg, shadow-xl)',
      'Use encouraging, supportive copy throughout',
      'Implement gentle hover animations',
      'Ensure generous padding and spacing',
      'Include decorative elements like sparkles or hearts'
    ],
    keyElements: [
      'bg-gradient-to-r from-orange-400 to-amber-500',
      'rounded-3xl',
      'backdrop-blur-sm',
      'shadow-soft',
      'text-gray-800',
      'hover:shadow-lg transition-all duration-300'
    ]
  },

  'professional-brutalism': {
    style: 'Professional Brutalism',
    prompt: `Design a bold, authoritative interface that combines brutalist design principles with professional restraint. Use strong geometric shapes, thick borders (4-6px), and high contrast between elements. The color palette should center around slate-900 and blue-600 with clean whites. Typography should be bold (font-black) with clear hierarchy. Include dramatic shadows that offset elements, creating a sense of depth and authority. The design should feel confident and no-nonsense while maintaining professional credibility.`,
    additionalInstructions: [
      'Use slate-900 for primary dark elements',
      'Apply blue-600 for accent colors and CTAs',
      'Include thick borders (border-4, border-6)',
      'Add geometric shadows (shadow-pro-brutal)',
      'Use font-black for headings and important text',
      'Implement strong visual hierarchy',
      'Keep layouts geometric and structured',
      'Avoid rounded corners - use sharp edges'
    ],
    keyElements: [
      'bg-slate-900',
      'border-4 border-black',
      'shadow-pro-brutal',
      'font-black',
      'text-blue-600',
      'hover:bg-slate-800 transition-colors'
    ]
  },

  'refined-brutalism': {
    style: 'Refined Brutalism',
    prompt: `Create a sophisticated brutalist interface with customizable brand colors and premium feel. Combine bold brutalist elements (thick borders, dramatic shadows, strong typography) with refined color schemes that can adapt to different brands. Include a color scheme switcher and make the design feel premium while maintaining brutalist principles. Use gradients, sophisticated color combinations, and allow for brand customization. The design should be memorable and impactful while feeling polished.`,
    additionalInstructions: [
      'Implement dynamic color scheme switching',
      'Use thick borders (border-6) and dramatic shadows',
      'Include gradient backgrounds and accents',
      'Apply font-black typography with strong hierarchy',
      'Add hover effects that enhance the brutalist feel',
      'Make color schemes easily customizable',
      'Include premium touches like subtle animations',
      'Balance boldness with sophistication'
    ],
    keyElements: [
      'border-6 border-black',
      'shadow-brutal',
      'font-black',
      'bg-gradient-to-r from-blue-600 to-purple-600',
      'hover:rotate-0 transition-transform',
      'Dynamic color variables'
    ]
  },

  'clean-lab': {
    style: 'Clean Lab',
    prompt: `Design a scientific, precise interface focused on clarity and data presentation. Use primarily white backgrounds with subtle gray accents and minimal color (lab-blue #4A90E2 and lab-teal #50C878). The design should feel analytical and trustworthy, with excellent information hierarchy and clean typography. Include subtle shadows, plenty of whitespace, and organized data presentation. The aesthetic should appeal to technical audiences while remaining approachable.`,
    additionalInstructions: [
      'Use primarily white and light gray backgrounds',
      'Apply lab-blue (#4A90E2) and lab-teal (#50C878) sparingly',
      'Include subtle shadows (shadow-lab)',
      'Organize information in clear, scannable layouts',
      'Use clean typography with good hierarchy',
      'Add subtle borders and dividers',
      'Focus on data presentation and readability',
      'Keep decorative elements minimal'
    ],
    keyElements: [
      'bg-white',
      'text-lab-blue',
      'shadow-lab',
      'border border-gray-100',
      'rounded-xl',
      'text-gray-900'
    ]
  },

  'neo-brutalism': {
    style: 'Neo-Brutalism',
    prompt: `Create an extreme brutalist interface with electric colors and maximum visual impact. Use bold, jarring color combinations like electric cyan (#00FFFF), neon green (#39FF14), and brutal red (#FF0040) against black backgrounds. Include very thick borders (6-8px), dramatic shadows, and font-black typography. The design should be intentionally overwhelming and attention-grabbing, perfect for creative agencies or disruptive brands. Not for the faint of heart!`,
    additionalInstructions: [
      'Use electric colors: #00FFFF, #39FF14, #FF0040',
      'Apply very thick borders (border-6, border-8)',
      'Include dramatic black shadows',
      'Use font-black for all text',
      'Make elements intentionally jarring',
      'Use high contrast combinations',
      'Add bold, aggressive hover effects',
      'Keep accessibility in mind despite bold choices'
    ],
    keyElements: [
      'bg-black text-electric',
      'border-8 border-black',
      'shadow-brutal',
      'font-black',
      'text-neon-green',
      'bg-brutal-red'
    ]
  },

  'human-centric': {
    style: 'Human-Centric',
    prompt: `Design an empathetic, caring interface focused on user comfort and emotional connection. Use soft blue to purple gradients, gentle shadows, and rounded corners. The design should feel supportive and understanding, perfect for healthcare, education, or social causes. Include backdrop blur effects, soft color palettes, and encouraging copy. The aesthetic should reduce anxiety and build trust through warmth and approachability.`,
    additionalInstructions: [
      'Use blue to purple gradients for warmth',
      'Apply soft shadows and backdrop blur effects',
      'Include rounded corners (rounded-3xl)',
      'Use encouraging, empathetic copy',
      'Add gentle animations and transitions',
      'Focus on emotional connection',
      'Include plenty of whitespace',
      'Use soft, muted color palettes'
    ],
    keyElements: [
      'bg-gradient-to-br from-blue-50 to-indigo-50',
      'backdrop-blur-sm',
      'shadow-soft',
      'rounded-3xl',
      'text-blue-500',
      'bg-gradient-to-r from-blue-500 to-purple-600'
    ]
  },

  'data-minimalism': {
    style: 'Data Minimalism',
    prompt: `Create a minimal, data-focused interface with monospace typography and clean tables. Use primarily black, white, and gray with semantic colors only for data visualization (data-red, data-orange, data-green, data-blue). The design should emphasize information density, scanability, and precision. Include clean tables, monospace fonts (JetBrains Mono), and minimal decorative elements. Perfect for analytics tools and developer interfaces.`,
    additionalInstructions: [
      'Use JetBrains Mono for monospace typography',
      'Apply minimal color palette (black/white/gray)',
      'Include semantic colors only for data',
      'Focus on information density and hierarchy',
      'Use clean tables and data presentation',
      'Add subtle borders and dividers',
      'Keep decorative elements to absolute minimum',
      'Emphasize readability and scanning'
    ],
    keyElements: [
      'font-mono',
      'text-data-blue',
      'border border-gray-200',
      'bg-white',
      'text-gray-900',
      'hover:bg-gray-50'
    ]
  }
};

export const getAIPrompt = (styleId: string): AIPrompt | null => {
  return aiPrompts[styleId] || null;
};

export const getAllPrompts = (): AIPrompt[] => {
  return Object.values(aiPrompts);
};