/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'retro': ['Orbitron', 'monospace'],
        'playful': ['Poppins', 'system-ui', 'sans-serif'],
        'editorial': ['Crimson Text', 'Georgia', 'serif'],
        'code': ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        'electric': '#00FFFF',
        'neon-green': '#39FF14',
        'brutal-red': '#FF0040',
        'lab-blue': '#4A90E2',
        'lab-teal': '#50C878',
        'warm-peach': '#FFCBA4',
        'soft-lavender': '#E6E6FA',
        'data-red': '#DC2626',
        'data-orange': '#EA580C',
        'data-green': '#16A34A',
        'data-blue': '#2563EB',
        // Modern Minimalist
        'minimal-gray': '#F8F9FA',
        'minimal-dark': '#2D3748',
        'minimal-accent': '#4299E1',
        // Playful & Whimsical
        'playful-pink': '#FF6B9D',
        'playful-yellow': '#FFD93D',
        'playful-purple': '#A78BFA',
        'playful-mint': '#6EE7B7',
        'playful-coral': '#FCA5A5',
        // Sleek Dark Mode
        'dark-bg': '#0F172A',
        'dark-surface': '#1E293B',
        'dark-border': '#334155',
        'dark-accent': '#06B6D4',
        'dark-text': '#F1F5F9',
        // 80s Retro
        'retro-pink': '#FF007F',
        'retro-cyan': '#00FFFF',
        'retro-purple': '#8A2BE2',
        'retro-yellow': '#FFFF00',
        'retro-orange': '#FF4500',
        // Editorial
        'editorial-cream': '#FDF6E3',
        'editorial-charcoal': '#2F2F2F',
        'editorial-gold': '#D4AF37',
        'editorial-burgundy': '#800020',
        // VS Code Style
        'vscode-bg': '#1E1E1E',
        'vscode-sidebar': '#252526',
        'vscode-border': '#3E3E42',
        'vscode-blue': '#007ACC',
        'vscode-green': '#4EC9B0',
        'vscode-orange': '#CE9178',
        'vscode-purple': '#C586C0',
      },
      boxShadow: {
        'brutal': '8px 8px 0px 0px #000000',
        'pro-brutal': '4px 4px 0px 0px #1e293b',
        'lab': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'soft': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'minimal': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'playful': '0 8px 25px rgba(255, 107, 157, 0.3)',
        'dark': '0 4px 20px rgba(0, 0, 0, 0.5)',
        'retro': '4px 4px 0px #FF007F, 8px 8px 0px #00FFFF',
        'editorial': '0 2px 8px rgba(0, 0, 0, 0.15)',
        'vscode': '0 2px 8px rgba(0, 0, 0, 0.6)',
      },
      borderWidth: {
        '6': '6px',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
};