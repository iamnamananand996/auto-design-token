import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: 'Auto Design System',
  brandUrl: 'https://autonomys.co',
  brandTarget: '_blank',
  
  // UI
  appBg: '#F9FAFB',
  appContentBg: '#FFFFFF',
  appBorderColor: '#E5E7EB',
  appBorderRadius: 4,
  
  // Typography
  fontBase: '"Geist Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
  fontCode: '"Geist Mono", Menlo, Monaco, Consolas, "Courier New", monospace',
  
  // Text colors
  textColor: '#000000',
  textInverseColor: '#FFFFFF',
  
  // Toolbar default and active colors
  barTextColor: '#6B7280',
  barSelectedColor: '#000000',
  barBg: '#FFFFFF',
  
  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#D1D5DB',
  inputTextColor: '#000000',
  inputBorderRadius: 4,
}); 