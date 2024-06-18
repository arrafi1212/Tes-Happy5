/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "gray-semibold": "#5D6372",
        "gray-2bold": "#2F3136",
        "purple-custom": "#5E20B3",
        "purple-bg": "#1A0931",
      },
    },
  },
  plugins: [],
};
