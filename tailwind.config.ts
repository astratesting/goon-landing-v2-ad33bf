import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        goon: {
          black: "#0A0A0A",
          dark: "#111111",
          flame: "#FF4500",
          magenta: "#FF00FF",
          acid: "#ADFF2F",
          gray: "#1A1A1A",
          "gray-light": "#2A2A2A",
          muted: "#888888",
        },
      },
      fontFamily: {
        heading: ["Archivo Black", "sans-serif"],
        body: ["Satoshi", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
