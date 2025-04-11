import { create } from '@storybook/theming';

// Import directly from our color tokens
import { colors } from '../src/tokens/colors';

/**
 * Custom Storybook theme based on Auto Design tokens
 */
export default create({
  base: 'light',
  
  // Brand
  brandTitle: 'Auto Design Tokens',
  brandUrl: '#',
  
  // Colors
  colorPrimary: colors.primary,
  colorSecondary: colors.accent,
  
  // UI
  appBg: colors.white,
  appContentBg: colors.white,
  appBorderColor: colors.gray[200],
  appBorderRadius: 8,
  
  // Text colors
  textColor: colors.primary,
  textInverseColor: colors.white,
  
  // Toolbar default and active colors
  barTextColor: colors.gray[500],
  barSelectedColor: colors.accent,
  barBg: colors.white,
  
  // Form colors
  inputBg: colors.white,
  inputBorder: colors.gray[300],
  inputTextColor: colors.primary,
  inputBorderRadius: 4,
  
  // Button appearance
  buttonBg: colors.primary,
  buttonBorder: colors.primary,
  buttonTextColor: colors.white,
  buttonBorderRadius: 4,
}); 