export interface TailwindConfig {
  name: string;
  description: string;
  config: {
    fontFamily?: Record<string, string[]>;
    colors?: Record<string, string>;
    boxShadow?: Record<string, string>;
    borderWidth?: Record<string, string>;
    [key: string]: any;
  };
  notes: string;
}

export const tailwindConfigs: Record<string, TailwindConfig> = {
  'friendly-approachable': {
    name: 'Friendly & Approachable',
    description: 'Warm, welcoming design with soft gradients and rounded corners',
    config: {
      fontFamily: {
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // No custom colors needed - uses standard Tailwind orange/amber palette
      },
      boxShadow: {
        'soft': '0 8px 32px rgba(0, 0, 0, 0.12)',
      },
    },
    notes: 'This style primarily uses standard Tailwind utilities with orange/amber color schemes, rounded-3xl borders, and soft shadows. Focus on gradients (from-orange-400 to-amber-500), generous padding, and backdrop-blur effects.'
  },
  
  'professional-brutalism': {
    name: 'Professional Brutalism',
    description: 'Bold, authoritative design with strong contrasts and geometric shapes',
    config: {
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Uses standard Tailwind slate/blue palette
      },
      boxShadow: {
        'pro-brutal': '4px 4px 0px 0px #1e293b',
      },
      borderWidth: {
        '6': '6px',
      },
    },
    notes: 'Combines brutalist elements with professional restraint. Uses slate-900 backgrounds, blue-600 accents, thick borders (border-4, border-6), and geometric shadows. Typography should be bold (font-black) with strong hierarchy.'
  },

  'refined-brutalism': {
    name: 'Refined Brutalism',
    description: 'Sophisticated brutalism with customizable color schemes and premium feel',
    config: {
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Customizable - uses standard Tailwind color palette
      },
      boxShadow: {
        'brutal': '8px 8px 0px 0px #000000',
      },
      borderWidth: {
        '6': '6px',
      },
    },
    notes: 'Features a dynamic color scheme system. Implement color scheme switching with CSS custom properties or JavaScript. Uses thick borders, dramatic shadows, and allows brand customization while maintaining brutalist principles.'
  },

  'clean-lab': {
    name: 'Clean Lab',
    description: 'Scientific, precise design focused on clarity and data presentation',
    config: {
      fontFamily: {
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'lab-blue': '#4A90E2',
        'lab-teal': '#50C878',
      },
      boxShadow: {
        'lab': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
    },
    notes: 'Emphasizes whitespace, subtle shadows, and clean typography. Uses primarily white backgrounds with subtle gray accents. Custom lab-blue and lab-teal provide scientific credibility while maintaining approachability.'
  },

  'neo-brutalism': {
    name: 'Neo-Brutalism',
    description: 'Extreme brutalist design with electric colors and maximum visual impact',
    config: {
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'electric': '#00FFFF',
        'neon-green': '#39FF14',
        'brutal-red': '#FF0040',
      },
      boxShadow: {
        'brutal': '8px 8px 0px 0px #000000',
      },
      borderWidth: {
        '6': '6px',
        '8': '8px',
      },
    },
    notes: 'Maximum impact design with electric colors, thick black borders, and dramatic shadows. Uses font-black weights, high contrast, and intentionally jarring color combinations. Not for the faint of heart!'
  },

  'human-centric': {
    name: 'Human-Centric',
    description: 'Empathetic design focused on user comfort and emotional connection',
    config: {
      fontFamily: {
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Uses standard Tailwind blue/purple gradients
      },
      boxShadow: {
        'soft': '0 8px 32px rgba(0, 0, 0, 0.12)',
      },
    },
    notes: 'Focuses on gradients (blue to purple), soft shadows, and generous whitespace. Uses backdrop-blur effects, rounded corners (rounded-3xl), and encouraging copy. Similar to Friendly but with cooler color palette.'
  },

  'data-minimalism': {
    name: 'Data Minimalism',
    description: 'Minimal, data-focused design with monospace typography and clean tables',
    config: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
      },
      colors: {
        'data-red': '#DC2626',
        'data-orange': '#EA580C',
        'data-green': '#16A34A',
        'data-blue': '#2563EB',
      },
    },
    notes: 'Emphasizes typography hierarchy, data tables, and monospace fonts. Uses minimal color (primarily black/white/gray) with semantic colors for data visualization. Focus on information density and scanability.'
  },
};