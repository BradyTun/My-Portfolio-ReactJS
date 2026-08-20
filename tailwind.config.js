/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // Quiet product-ledger palette used by the semantic CSS layer.
      colors: {
        canvas: '#FAF7EF',
        surface: {
          DEFAULT: '#E9E3D8',
          alt: '#090A08',
        },
        ink: {
          DEFAULT: '#0D0E0B',
          muted: '#42433D',
          faint: '#5D5D56',
          ghost: '#B9B2A5',
        },
        accent: {
          DEFAULT: '#C83F26',
          dark: '#922615',
          light: '#E98470',
        },
      },

      // ── Typography ───────────────────────────────────────────────────────────
      // Newsreader adds editorial warmth; Instrument Sans carries everything else.
      fontFamily: {
        display: ['Newsreader', 'Georgia', 'serif'],
        sans: ['"Instrument Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"Instrument Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },

      // ── Letter Spacing ───────────────────────────────────────────────────────
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em',
        tight: '-0.01em',
        normal: '0em',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.16em',
        'ultra-wide': '0.22em',
      },

      // ── Spacing (generous scale) ─────────────────────────────────────────────
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        34: '8.5rem',
        38: '9.5rem',
        100: '25rem',
        112: '28rem',
        128: '32rem',
        144: '36rem',
      },

      // ── Easing ───────────────────────────────────────────────────────────────
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'expo-in-out': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
      },

      // ── Animations ───────────────────────────────────────────────────────────
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'fadeIn 0.7s ease',
        'line-expand': 'lineExpand 1s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        lineExpand: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
      },
    },
  },
  plugins: [],
}
