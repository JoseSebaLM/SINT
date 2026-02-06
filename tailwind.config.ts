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
        "deep-zinc": "#09090B",
        "brand-flux-orange": "#FF6B4A",
        "accent-terminal-green": "#2EB886",
        "accent-synth-purple": "#A371F7",
        "accent-cyan-ray": "#06B6D4",
        "text-off-white": "#E5E6EB",
        "text-cool-grey": "#8A8F98",
      },
    },
  },
  plugins: [],
};
export default config;
