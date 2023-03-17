/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgHero: "url('/assets/bgHero.jpg')",
        bgHikings: "url('/assets/pexels-arthouse-studio-4905089.jpg')",
      },
      boxShadow: {
        shadowCard:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)",
      },
    },
  },
  plugins: [],
};
