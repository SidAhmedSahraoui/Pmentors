/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary-header': 'rgba(202, 246, 249, 0.33)',
        'gray-one' : 'rgb(32 41 54)',
        'purple-one': '#4C4CF0',
        'modal-color': 'rgba(22, 24, 29, 0.6)',
        'sub-text': 'rgb(172 172 172)',
        'purple-two': '#9333ea',
        'blue-one': '#4f46e5',
      },
      boxShadow: {
        '3xl': '0 10px 15px -3px rgb(0 0 0 / 0.1)',
      },
      spacing: {
      }
    },
  },
  plugins: [],
}
