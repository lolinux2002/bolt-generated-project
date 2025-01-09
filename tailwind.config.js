module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#6366f1',
          'primary-dark': '#4f46e5',
          secondary: '#10b981',
          'secondary-dark': '#0b815e',
          accent: '#f59e0b',
          'accent-dark': '#d97706',
          background: '#f8fafc',
          'background-dark': '#f1f5f9',
          text: '#1e293b',
          'text-light': '#475569',
          'text-lighter': '#64748b',
          'gradient-start': '#f0f4ff',
          'gradient-end': '#e6edff',
        },
        fontFamily: {
          sans: ['"Inter"', 'sans-serif'],
          display: ['"Poppins"', 'sans-serif'],
        },
        boxShadow: {
          'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
          'medium': '0 6px 12px -2px rgba(0, 0, 0, 0.08), 0 4px 8px -2px rgba(0, 0, 0, 0.06)',
          'hard': '0 8px 16px -3px rgba(0, 0, 0, 0.1), 0 6px 12px -3px rgba(0, 0, 0, 0.08)',
        },
        animation: {
          'fade-in': 'fadeIn 0.3s ease-in-out',
          'slide-up': 'slideUp 0.3s ease-in-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { transform: 'translateY(20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
        },
      },
    },
    plugins: [],
  }
