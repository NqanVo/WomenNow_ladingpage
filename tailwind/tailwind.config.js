/** @type {import('tailwindcss').Config} */
module.exports = {
  // script: "npx tailwindcss -i ./style/tailwind.css -o ./style/output.css --watch",
  darkMode: false,
  mode: "jit",
  purge: ["../*.html"],
  content: ["../*.html", "../**/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#9F32A1",
        minor: "#FFEBFF",
      },
      // class : {'thuoc tinh' : 'gia tri'}
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
