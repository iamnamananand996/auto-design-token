import { colors, spacing, typography } from '@autonomys/design-tokens';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: colors.colors,
      spacing: spacing.spacing,
      borderRadius: spacing.borderRadius,
      fontFamily: typography.fontFamilies,
      fontSize: typography.fontSizes,
      fontWeight: typography.fontWeights,
      lineHeight: typography.lineHeights,
      letterSpacing: typography.letterSpacings,
    },
  },
  plugins: [],
}; 