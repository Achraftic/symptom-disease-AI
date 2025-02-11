import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D6EFD", // Medical Blue (Bootstrap Primary Blue)
        secondary: "#48CAE4", // Lighter Blue for accents
        background: "#E3F2FD", // Soft Light Blue for medical feel
        foreground: "#0A2540", // Dark blue for contrast
        safari: "#FFCC00", // Example Safari color
      },
      borderRadius: {
        lg: "8px",
        md: "6px",
        sm: "4px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
