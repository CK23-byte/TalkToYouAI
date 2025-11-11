/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        deep: "#2C3E50",
        amber: "#E8B64D",
        mist: "#F4F6F8",
        graphite: "#1B1E21",
        aqua: "#6ACFC7"
      }
    }
  },
  plugins: [],
};
