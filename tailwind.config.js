/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,png}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    }
  },
  plugins: [],
}

