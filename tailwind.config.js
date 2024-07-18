/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        appC: "#E9E9E9",
        wInfo: "#FAFAFA",
        tx: "#696969",
        br: "#E8E8E8",
      },
      fontSize: {
        sz: "300px",
      },
    },
  },
  plugins: [],
};
