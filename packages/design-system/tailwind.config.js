import autoTokens from '@autonomys/design-tokens';

console.log(autoTokens);

/** @type {import('tailwindcss').Config} */
export default {
  presets: [require('@autonomys/design-tokens/tailwind.config.js')],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: autoTokens.colors,
    },
  },
  plugins: [],
};
