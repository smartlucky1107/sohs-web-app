/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '639px'}, // You can adjust this value as needed
      'lg': {'min': '924px'}, // You can adjust this value as needed
      'md': {'min': '639px'}, // You can adjust this value as needed
    },
  },
  plugins: [],
}