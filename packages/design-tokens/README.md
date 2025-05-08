# Auto Design Tokens

A comprehensive design token system for Auto, providing consistent styling across applications.

## Features

- CSS custom properties (variables) for colors, typography, spacing, and more
- Utility classes with an `auto-` prefix for easy styling
- Tailwind CSS integration
- Dark theme support
- Explorer-specific styles

## Installation

```bash
npm install @autonomys/design-tokens
# or
yarn add @autonomys/design-tokens
```

## Usage

### Import All Styles

```js
// Import all styles (variables + utility classes)
import '@autonomys/design-tokens/dist/index.css';
```

### Import Specific Style Categories

```js
// Import only CSS variables without utility classes
import '@autonomys/design-tokens/dist/css/variables.css';

// Import only utility classes without variables
import '@autonomys/design-tokens/dist/css/utilities.css';
```

## Tailwind CSS Integration

You can use these design tokens with Tailwind CSS by:

1. Importing the variables CSS file 
2. Extending your Tailwind config with the tokens

### Step 1: Import the CSS variables
```js
// In your main CSS file
@import '@autonomys/design-tokens/dist/css/variables.css';
```

### Step 2: Configure Tailwind to use the design tokens

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Map Tailwind color names to our design token CSS variables
        primary: 'var(--color-primary)',
        secondary: 'var(--color-accent)',
        danger: 'var(--color-error)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        info: 'var(--color-info)',
        
        // Map semantic colors
        'text-primary': 'var(--color-textPrimary)',
        'text-secondary': 'var(--color-textSecondary)',
        'bg-primary': 'var(--color-backgroundPrimary)',
        'bg-secondary': 'var(--color-backgroundSecondary)',
      },
      fontSize: {
        // Map font sizes to our design tokens
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
      },
      fontWeight: {
        // Map font weights to our design tokens
        'light': 'var(--font-weight-light)',
        'normal': 'var(--font-weight-normal)',
        'medium': 'var(--font-weight-medium)',
        'semibold': 'var(--font-weight-semibold)',
        'bold': 'var(--font-weight-bold)',
      },
      borderRadius: {
        // Map border radius to our design tokens
        'DEFAULT': 'var(--radius-default)',
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
      },
      boxShadow: {
        // Map shadows to our design tokens
        'sm': 'var(--shadow-sm)',
        'DEFAULT': 'var(--shadow-default)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
      },
      spacing: {
        // You could also map spacing if needed
        // ...
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
```

## Building the Tokens

To build the design tokens:

```bash
npm run build
```

This will:
1. Compile TypeScript tokens to JavaScript
2. Generate CSS files:
   - `index.css`: Complete bundle with all variables and utility classes
   - `css/variables.css`: Only CSS custom properties
   - `css/utilities.css`: Only utility classes
3. Output everything to the `dist` folder

## Available Classes

### Color Classes

- Text colors: `auto-text-primary`, `auto-text-secondary`, etc.
- Background colors: `auto-bg-primary`, `auto-bg-secondary`, etc.
- Border colors: `auto-border-primary`, `auto-border-secondary`, etc.
- Button styles: `auto-button-primary`, `auto-button-secondary`, etc.

### Typography Classes

- Headings: `auto-heading-1`, `auto-heading-2`, etc.
- Body text: `auto-body-default`, `auto-body-small`, etc.
- Font sizes: `auto-text-xs`, `auto-text-sm`, etc.
- Font weights: `auto-font-light`, `auto-font-bold`, etc.

### Spacing Classes

- Margin: `auto-m-1`, `auto-mt-2`, `auto-mx-4`, etc.
- Padding: `auto-p-1`, `auto-pt-2`, `auto-px-4`, etc.
- Border radius: `auto-rounded`, `auto-rounded-lg`, etc.

### Shadow Classes

- Shadows: `auto-shadow-sm`, `auto-shadow-lg`, etc.

### Explorer-Specific Classes

- Explorer background colors: `auto-explorer-bg-*`
- Explorer text colors: `auto-explorer-text-*`
- Explorer gradients: `auto-explorer-bg-gradient-*`, `auto-explorer-button-gradient-*`, etc.

## Theme Support

Apply dark theme by adding the `auto-theme-dark` class to a container:

```html
<div class="auto-theme-dark">
  <!-- Content will use dark theme styles -->
</div>
```