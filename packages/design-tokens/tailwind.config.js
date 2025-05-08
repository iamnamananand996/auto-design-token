/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../**/src/**/*.{js,jsx,ts,tsx}', // Look for content in sibling packages
  ],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        // Brand colors
        'auto-primary': '#000000',
        'auto-primaryHover': '#101010',
        'auto-accent': '#0A8DD0',
        'auto-lighterAccent': '#90C2E7',

        // Background colors
        'auto-background': 'var(--background)',
        'auto-foreground': 'var(--foreground)',
        'auto-backgroundLight': '#EBEFFC',
        'auto-backgroundDark': '#3654A6',
        'auto-backgroundDarker': '#27355D',
        'auto-backgroundDarkest': '#050D26',

        // UI colors
        'auto-lightDanger': '#ffcdd2',
        'auto-grayButton': '#9EA49F',
        'auto-lightGray': '#4E4F54',
        'auto-whiteOpaque': '#ffffffb3',

        // Dark mode colors
        'auto-darkWhite': '#252525',
        'auto-darkWhiteHover': '#353535',
        'auto-darkBlack': '#ffffff',
        'auto-darkBlackHover': '#808080',
        'auto-darkPrimary': '#3654A6',
        'auto-darkPrimaryHover': '#4664B6',
        'auto-darkAccent': '#0A8DD0',
        'auto-darkAccentHover': '#109DD0',

        // Grayscale
        'auto-white': '#FFFFFF',
        'auto-black': '#000000',
        'auto-gray-50': '#F9FAFB',
        'auto-gray-100': '#F3F4F6',
        'auto-gray-200': '#E5E7EB',
        'auto-gray-300': '#D1D5DB',
        'auto-gray-400': '#9CA3AF',
        'auto-gray-500': '#6B7280',
        'auto-gray-600': '#4B5563',
        'auto-gray-700': '#374151',
        'auto-gray-800': '#1F2937',
        'auto-gray-900': '#111827',

        // Semantic colors
        'auto-success': '#10B981', // green-500
        'auto-error': '#EF4444', // red-500
        'auto-warning': '#F59E0B', // amber-500
        'auto-info': '#3B82F6', // blue-500

        // Grays and Blacks
        'auto-explorer-grayDark': '#2A2C38',
        'auto-explorer-grayDarker': '#27355D',
        'auto-explorer-grayLight': '#EBEFFC',

        // Gradients
        'auto-explorer-gradientFrom': '#032372',
        'auto-explorer-gradientVia': '#1949D2',
        'auto-explorer-gradientTo': '#5373C4',
        'auto-explorer-gradientToSecondary': '#0C1C43',

        // Whites
        'auto-explorer-white': '#FFFFFF',
        'auto-explorer-whiteTransparent': '#ffffff1a',
        'auto-explorer-whiteOpaque': '#ffffffb3',

        // Pastels
        'auto-explorer-pastelPurple': '#C2B0EE',
        'auto-explorer-pastelBlue': '#ABCFEF',
        'auto-explorer-pastelPink': '#E6ADDC',
        'auto-explorer-pastelGreen': '#91D3A0',

        // Greens
        'auto-explorer-greenBright': '#37D058',

        // Primary
        'auto-explorer-primaryAccent': '#1949D2',

        // Blues
        'auto-explorer-blueAccent': '#1E254E',
        'auto-explorer-blueDarkAccent': '#2A345E',
        'auto-explorer-blueLight': '#EBEFFC',
        'auto-explorer-blueShade': '#3654A6',
        'auto-explorer-blueUndertone': '#27355D',

        // Background
        'auto-explorer-backgroundLight': '#EBEFFC',
        'auto-explorer-backgroundDark': '#3654A6',
        'auto-explorer-backgroundDarker': '#27355D',
        'auto-explorer-backgroundDarkest': '#050D26',

        // Box
        'auto-explorer-boxLight': '#FFFFFF',
        'auto-explorer-boxDark': '#2A2C38',

        // Button
        'auto-explorer-buttonLightFrom': '#032372',
        'auto-explorer-buttonLightTo': '#5373C4',
        'auto-explorer-buttonDarkFrom': '#1949D2',
        'auto-explorer-buttonDarkTo': '#0C1C43',

        // Header
        'auto-explorer-headerLight': '#FFFFFF',
        'auto-explorer-headerDark': '#2A2C38',

        // Footer
        'auto-explorer-footerLight': '#032372',
        'auto-explorer-footerDark': '#08183E',
      },
      fontFamily: {
        // We'll load these dynamically from our tokens
      },
      spacing: {
        // We'll load these dynamically from our tokens
      },
      boxShadow: {
        // We'll load these dynamically from our tokens
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
