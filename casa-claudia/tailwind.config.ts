import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "my-black": '#0A0A0A',
      "light-brown": '#E3DBD1',
      "my-grey": '#3b3b39',
      "my-brown": '#5A4534',
      "my-white": '#F1F1EF',
      "khaki": "#B0A891",
      "my-light-grey": "#737373"
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
    },
  },
  plugins: [],
};
export default config;
