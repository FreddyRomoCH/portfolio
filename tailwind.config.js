/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary400': '#f18827',
        'primary500': '#DD710E',
        'primary600': '#b85e0c',
        'primary700': '#934b09',
        'secondary800': '#0e1a5d',
        'secondary900': '#070d2e',
        'neutral500': '#DD710E',
        'neutral50': '#f6f6f7',
      },
      backgroundImage: {
        'home-radial': 'radial-gradient(#0e1a5d, #070d2e)',
      },
    },
  },
  plugins: [],
}

