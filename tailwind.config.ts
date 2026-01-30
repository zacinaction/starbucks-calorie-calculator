import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        starbucks: {
          green: "#006241",
          "green-light": "#00704A",
          "green-dark": "#004D34",
          white: "#F7F7F7",
        },
      },
    },
  },
  plugins: [],
};
export default config;
