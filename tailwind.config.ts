import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textColor: "#e2e8f0",
        textColorMuted: "#8e9cb1",
        badgeBg: "#112b3a",
        badgeText: "#53d0bf",
      },
    },
  },
  plugins: [],
};
export default config;
