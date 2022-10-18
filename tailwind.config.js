/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DeepViolet: "#21092F",
        PurplishGrey: "#8F8694",
        LightGrey: "#DFDEE0",
        white: "#FFFFFF",
        red: "#FF5050",
        purple: "#6348FE",
        pinkish: "#610595",
      },
      fontFamily: {
        SpaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      letterSpacing: {
        widest: ".25em",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
