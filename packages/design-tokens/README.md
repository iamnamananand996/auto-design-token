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
// Import all styles
import '@autonomys/design-tokens/dist/index.css';
```

### Import Specific Style Categories

```js
// Import only what you need
import '@autonomys/design-tokens/dist/css/root.css'; // CSS variables
import '@autonomys/design-tokens/dist/css/colors.css'; // Color utilities
import '@autonomys/design-tokens/dist/css/typography.css'; // Typography utilities
import '@autonomys/design-tokens/dist/css/spacing.css'; // Spacing utilities
import '@autonomys/design-tokens/dist/css/shadows.css'; // Shadow utilities
import '@autonomys/design-tokens/dist/css/explorer.css'; // Explorer-specific styles
```

## Tailwind CSS Integration

You can use these design tokens with Tailwind CSS by:

1. Importing the design tokens CSS file
2. Extending your Tailwind config with the tokens

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // You can reference CSS variables
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
      },
      // Add more custom styling here
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
2. Generate CSS variables and utility classes
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