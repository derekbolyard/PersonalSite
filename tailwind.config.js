/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
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
      },
      boxShadow: {
        'brutal': '8px 8px 0px 0px #000000',
        'pro-brutal': '4px 4px 0px 0px #1e293b',
        'lab': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'soft': '0 8px 32px rgba(0, 0, 0, 0.12)',
      },
      borderWidth: {
        '6': '6px',
      }
    },
  },
  plugins: [],
};
