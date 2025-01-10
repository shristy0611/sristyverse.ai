/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#8B5CF6',
        dark: {
          DEFAULT: '#111827',
          light: '#1F2937'
        },
        accent: {
          blue: '#60A5FA',
          purple: '#A78BFA',
          success: '#34D399',
          warning: '#FBBF24',
          error: '#F87171'
        }
      }
    }
  }
};