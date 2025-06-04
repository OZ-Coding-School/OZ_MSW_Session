/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js, jsx, ts, tsx}"],
  theme: {
    colors: {
      button: {
        default: "#66E04B",
        outline: "#FFFFFF",
        hover: "#E7E07A",
      },
      outline: {
        focus: "#76FACC",
        error: "#FF3939",
        default: "#2e2e2e",
      },
      "text-red": "#FF0000",
    },
    fontFamily: {
      gamjaFlower: ["GamjaFlower"],
    },
    extend: {},
  },
  plugins: [],
};
