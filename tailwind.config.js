/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // blueColor: "#2a68ff",
        blueColor: "#e86d15",
        greyIsh: "#f1f2f8",
        cardShadow: "#f7f8f9",
        textColor: "#252b36",
        // textColor: "#362825",
      },
    },
  },
  plugins: [],
};
