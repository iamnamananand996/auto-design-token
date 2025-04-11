# Auto Design Tokens

A design token library for the Auto Design application. This package provides standardized design tokens for colors, typography, spacing, and layout to ensure consistency across the application.

## Installation

```bash
npm install auto-design-tokens
# or
yarn add auto-design-tokens
```

## Usage

### CSS Import Usage (Recommended)

You can import the CSS files directly in your application:

```jsx
// Import all tokens and light theme (default)
import "@auto-design-tokens/index.css";

// For dark theme support
import "@auto-design-tokens/theme/dark.css";
```

Or in your CSS/SCSS file:

```css
/* Import all tokens and light theme */
@import '@auto-design-tokens/index.css';

/* For dark theme support */
@import '@auto-design-tokens/theme/dark.css';
```

For HTML applications:

```html
<!-- Import all tokens and light theme (default) -->
<link rel="stylesheet" href="@auto-design-tokens/index.css">

<!-- For dark theme support -->
<link rel="stylesheet" href="@auto-design-tokens/theme/dark.css">
```

Then use the utility classes in your React components:

```jsx
export const Demo = () => {
  return (
    <div className="auto-bg-primary auto-text-accent auto-p-4 auto-rounded-lg">
      <h1 className="auto-heading-1">Example Heading</h1>
      <p className="auto-body-default auto-text-secondary">Example text</p>
    </div>
  );
};
```

Or in your HTML:

```html
<!-- Typography -->
<h1 class="auto-heading-1 auto-text-primary">Large Heading</h1>
<p class="auto-body-default auto-text-secondary">Body text with secondary color</p>

<!-- Colors -->
<div class="auto-bg-primary auto-text-accent">
  Primary background with accent text
</div>

<!-- Spacing -->
<div class="auto-p-4 auto-m-2 auto-rounded-lg auto-bg-secondary">
  This div has padding, margin, rounded corners, and a secondary background
</div>

<!-- Buttons -->
<button class="auto-button-primary auto-p-2 auto-rounded">
  Primary Button
</button>
```

### JavaScript Import Usage

You can also import the tokens as JavaScript objects:

```javascript
// Import all tokens
import designTokens from 'auto-design-tokens';

// Use color tokens
const primaryColor = designTokens.colors.colors.primary;
const accentColor = designTokens.colors.colors.accent;

// Use typography tokens
const headingStyle = designTokens.typography.textStyles.h1;
const bodyStyle = designTokens.typography.textStyles.bodyDefault;

// Use spacing tokens
const spacing = designTokens.spacing.spacing;
const borderRadius = designTokens.spacing.borderRadius;
```

### Import specific token groups

```javascript
import { colors, typography, spacing } from 'auto-design-tokens';

// Use color tokens
const primaryColor = colors.colors.primary;
const semanticTextColor = colors.semanticColors.textPrimary;

// Use typography tokens
const fontSizes = typography.fontSizes;
const fontWeights = typography.fontWeights;

// Use spacing tokens
const spacingValues = spacing.spacing;
const breakpoints = spacing.breakpoints;
```

## Theme Support

### Light Theme (Default)

The light theme is included by default when importing `index.css`.

### Dark Theme

To enable dark theme, add the `auto-theme-dark` class to the root element or any container:

```html
<body class="auto-theme-dark">
  <!-- All elements inside will use dark theme colors -->
</body>

<!-- Or for a specific section -->
<section class="auto-theme-dark">
  <!-- This section will use dark theme colors -->
</section>
```

## Utility Classes

### Color Classes

- Text colors: `auto-text-primary`, `auto-text-secondary`, `auto-text-error`, etc.
- Background colors: `auto-bg-primary`, `auto-bg-secondary`, `auto-bg-accent`, etc.
- Border colors: `auto-border-primary`, `auto-border-secondary`, etc.
- Button styles: `auto-button-primary`, `auto-button-secondary`, etc.

### Typography Classes

- Headings: `auto-heading-1`, `auto-heading-2`, `auto-heading-3`, `auto-heading-4`
- Body text: `auto-body-large`, `auto-body-default`, `auto-body-small`, `auto-body-xs`
- Font sizes: `auto-text-xs`, `auto-text-sm`, `auto-text-base`, `auto-text-lg`, etc.
- Font weights: `auto-font-normal`, `auto-font-medium`, `auto-font-bold`, etc.
- Line heights: `auto-leading-none`, `auto-leading-tight`, `auto-leading-normal`, etc.

### Spacing Classes

- Margin: `auto-m-0`, `auto-m-1`, `auto-m-2`, etc.
- Padding: `auto-p-0`, `auto-p-1`, `auto-p-2`, etc.
- Horizontal margin: `auto-mx-0`, `auto-mx-1`, `auto-mx-auto`, etc.
- Vertical padding: `auto-py-0`, `auto-py-1`, etc.
- Border radius: `auto-rounded`, `auto-rounded-lg`, `auto-rounded-full`, etc.

## Token Categories

### Colors

- **Base colors**: Primary brand colors, accent colors, background colors, etc.
- **Semantic colors**: Contextual colors for text, backgrounds, borders, buttons, etc.
- **Dark mode colors**: Adapted colors for dark mode.

### Typography

- **Font families**: Font stacks for sans-serif and monospace text.
- **Font sizes**: A modular scale of font sizes.
- **Font weights**: Standard weight values.
- **Line heights**: Preset line height values.
- **Letter spacings**: Preset letter spacing values.
- **Text styles**: Predefined text styles for headings, body text, buttons, etc.

### Spacing

- **Spacing scale**: A consistent spacing scale based on 4px units.
- **Semantic spacing**: Contextual spacing for components, layouts, etc.
- **Breakpoints**: Screen size breakpoints for responsive design.
- **Container widths**: Maximum widths for container elements.
- **Border radius**: Border radius values for rounded corners.

## Contributing

This package is maintained by the Auto Design development team. To contribute, please follow these steps:

1. Make changes to the token files in the `src/tokens` directory.
2. Build the package with `npm run build` or `yarn build`.
3. Test your changes with the application.
4. Submit a PR with your changes.

## License

MIT 