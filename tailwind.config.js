/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4F46E5",

          secondary: "#9f4900",

          accent: "#0087a8",

          neutral: "#292222",

          "base-100": "#152839",

          info: "#00a6ff",

          success: "#009f28",

          warning: "#ff9b00",

          error: "#d40036",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
