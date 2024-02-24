/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purp: "#A78ED1",
        li: "#E0ABC0",
        wh: "#F3D7C5",
        br: "#E3A06E",
      },
    },
  },
  plugins: [],
};
