export default {
  darkMode: "class",   // <-- THIS MUST EXIST
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, // slide left
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite', // adjust 20s for speed
      },
    },
  },
  plugins: [],
};
