import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /^bg-(white|orange-600)\/\d+$/,
    },
  ],
} satisfies Config;
