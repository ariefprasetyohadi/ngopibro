/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          light: "#F2EFE9",
          accent: "#BFB48F",
          dark: "#252627",
          muted: "#564E58",
          highlight: "#904E55",
        },
      },
    },
  },
  plugins: [],
};
