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
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "polygon-back": "url('/polygon-back.svg')",
        "blob-scene": "url('/blob-scene.svg')",
        "circle-scatter": "url('/circle-scatter.svg')",
        wave: "url('/wave.svg')",
        "layered-waves": "url('/layered-waves.svg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
