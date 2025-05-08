/** @type {import('tailwindcss').Config} */
export default {
  presets: [require('@autonomys/design-tokens/tailwind.config.js')],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // We'll use the auto- prefixed classes directly from the design tokens
      // No additional color mapping needed
    },
  },
  plugins: [],
};
