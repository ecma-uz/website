/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
      },
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
          light: 'var(--color-primary-light)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          dark: 'var(--color-accent-dark)',
          light: 'var(--color-accent-light)',
        },
        success: {
          DEFAULT: 'var(--color-success)',
          dark: 'var(--color-success-dark)',
          light: 'var(--color-success-light)',
        },
        warning: {
          DEFAULT: 'var(--color-warning)',
          dark: 'var(--color-warning-dark)',
          light: 'var(--color-warning-light)',
        },
        error: {
          DEFAULT: 'var(--color-error)',
          dark: 'var(--color-error-dark)',
          light: 'var(--color-error-light)',
        },
        neutral: {
          50: 'var(--color-neutral-50)',
          100: 'var(--color-neutral-100)',
          200: 'var(--color-neutral-200)',
          300: 'var(--color-neutral-300)',
          400: 'var(--color-neutral-400)',
          500: 'var(--color-neutral-500)',
          600: 'var(--color-neutral-600)',
          700: 'var(--color-neutral-700)',
          800: 'var(--color-neutral-800)',
          900: 'var(--color-neutral-900)',
        },
      },
      borderRadius: {
        '4xl': 'var(--radius-4xl)',
        '5xl': 'var(--radius-5xl)',
      },
      maxWidth: {
        '2xl': 'var(--container-2xl)',
      },
      minHeight: {
        'title': '3.5rem',
        'subtitle': '3rem',
        'button': '2.5rem',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-control': {
          'max-width': '100%',
          'overflow': 'hidden',
          'text-overflow': 'ellipsis',
          'word-break': 'break-word',
        },
        '.text-control-tight': {
          'max-width': '100%',
          'overflow': 'hidden',
          'text-overflow': 'ellipsis',
          'word-break': 'break-word',
          'line-height': '1.25',
        },
        '.text-control-normal': {
          'max-width': '100%',
          'overflow': 'hidden',
          'text-overflow': 'ellipsis',
          'word-break': 'break-word',
          'line-height': '1.5',
        },
        '.text-control-loose': {
          'max-width': '100%',
          'overflow': 'hidden',
          'text-overflow': 'ellipsis',
          'word-break': 'break-word',
          'line-height': '2',
        },
        '.text-control-wrap': {
          'max-width': '100%',
          'overflow': 'hidden',
          'text-overflow': 'ellipsis',
          'word-break': 'break-word',
          'white-space': 'normal',
        },
        '.text-control-nowrap': {
          'max-width': '100%',
          'overflow': 'hidden',
          'text-overflow': 'ellipsis',
          'word-break': 'break-word',
          'white-space': 'nowrap',
        },
        '.min-h-title': {
          'min-height': '3.5rem',
        },
        '.min-h-subtitle': {
          'min-height': '3rem',
        },
        '.min-h-button': {
          'min-height': '2.5rem',
        },
        '.max-w-button': {
          'max-width': '12rem',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}