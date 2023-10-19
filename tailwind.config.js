/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Rubik"],
    },
    extend: {
      backgroundImage: {
        "pattern-desktop": "url('images/pattern-bg-desktop.png')",
        "pattern-mobile": "url('images/pattern-bg-mobile.png')",
      },
      width: {
        input: "34rem",
      },
      colors: {
        "very-dark-gray": "hsl(0, 0%, 17%)",
        "dark-gray": "hsl(0, 0%, 59%)",
      },
      maxWidth: {
        "8xl": "86rem",
      },
    },
  },
  plugins: [],
};
