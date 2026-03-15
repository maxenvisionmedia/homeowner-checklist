/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#DCA738",
        "gold-light": "#E8B94A",
        "gold-dark": "#C4922A",
        dark: "#1A1A1A",
        "dark-card": "#222222",
        cream: "#FAF7F2",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
