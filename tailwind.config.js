/** @type {import("tailwindcss").Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      xs: "240px",
      sm: "480px",
      png_sm: "660px",
      png_md: "768px",
      md: "769px",
      nav_md: "750px",
      steps_lg: "1100px",
      lg: "992px",
      video_lg: "1100px", 
      bento_lg: "1140px",
      xl: "1440px",
    },
    colors: {
      "pure_white": "#FFFFFF",
      "new_black": "#626262",
      "gray_0": "#FAFAFA",
      "gray_1": "#F1F1F1",
      "gray_2": "#E6E6E6",
      "gray_3": "#9C9C9C",
      "gray_4": "#565656",
      "gray_5_black" : "#141414",
      "almost_black" : "#141414",
      "teal_1": "#ACEDDE",
      "teal_2": "#40D0CE",
      "green_1": "#C0F28F",
      "green_2": "#6DCA1D",
      "blue_1": "#93CFFF",
      "blue_2": "#4DB0FF",
    },
    backgroundImage: {
      "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      noto: ["Noto Sans TC", "sans-serif"],
      jost: ["Jost", "sans-serif"],
      sarabun: ["Sarabun", "sans-serif"],
      futura: ["Futura", "Trebuchet MS", "Arial", "sans-serif"],
    },
    fontWeight: {
      "light": 300,
      "normal": 400,
      "regular": 400,
      "medium": 500,
      "semibold": 600,
    },
    extend: {
      backgroundImage: theme => ({
        "grad_1": `linear-gradient(to right, ${theme("colors.blue_2")}, ${theme("colors.green_2")})`,
        "figma_grad_1": `linear-gradient(to right, ${theme("colors.blue_2")}, ${theme("colors.teal_2")})`,
        "grad_2": `linear-gradient(to right, ${theme("colors.blue_2")}, ${theme("colors.teal_2")})`,
        "grad_3": `linear-gradient(to right, ${theme("colors.teal_2")}, ${theme("colors.green_2")})`,
        "grad_4": `linear-gradient(to right, ${theme("colors.green_2")}, ${theme("colors.blue_2")})`,
      }),
      display: {
        "none": "none",
      },
      height: {
        "screen-minus-100": "calc(90vh)",
      },
      spacing: {
        "128": "32rem",
        "144": "36rem",
        "20": "5rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      order: {
        "13": "13",
        "14": "14",
        "15": "15",
        "16": "16",
        "17": "17",
        "18": "18",
        "19": "19",
        "20": "20",
      },

      // animate.css
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    }
  },
  important: true, 
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const newUtilities = {
        ".text-gradient": {
          background: `linear-gradient(to right, ${theme("colors.blue_2")}, ${theme("colors.green_2")})`,
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ".border-gradient": {
          borderImage: `linear-gradient(to right, 
                                        ${theme("colors.blue_2")}, 
                                        ${theme("colors.green_2")})`,
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
}
