import React, { useState } from 'react';

// Import design token styles from our monorepo package
// In a real app outside the monorepo, you would use one of these options:
// import "@autonomys/design-tokens/dist/index.css"; // All styles
// import "@autonomys/design-tokens/dist/css/root.css"; // Just CSS variables
// import "@autonomys/design-tokens/dist/css/colors.css"; // Just color utilities
// import "@autonomys/design-tokens/dist/css/typography.css"; // Just typography utilities
// import "@autonomys/design-tokens/dist/css/spacing.css"; // Just spacing utilities
// import "@autonomys/design-tokens/dist/css/shadows.css"; // Just shadow utilities
// The preview.js file already imports the CSS for all stories

// Default export is required by Storybook
export default {
  title: 'Design Tokens/CSS Classes',
  parameters: {
    docs: {
      description: {
        component: 'Examples of using Auto Design tokens with CSS utility classes.',
      },
    },
    layout: 'padded',
  },
};

export const Colors = () => (
  <div>
    <h2 className="auto-heading-2">Text Color Classes</h2>
    <p className="auto-body-default auto-mb-6">
      Text color classes follow the pattern <code className="auto-code">auto-text-*</code> and can be applied to any element.
    </p>
    
    <div className="auto-py-4">
      <p className="auto-text-primary auto-body-default auto-mb-2">Primary Text - auto-text-primary</p>
      <p className="auto-text-secondary auto-body-default auto-mb-2">Secondary Text - auto-text-secondary</p>
      <p className="auto-text-tertiary auto-body-default auto-mb-2">Tertiary Text - auto-text-tertiary</p>
      <p className="auto-text-disabled auto-body-default auto-mb-2">Disabled Text - auto-text-disabled</p>
      <p className="auto-text-error auto-body-default auto-mb-2">Error Text - auto-text-error</p>
      <p className="auto-text-success auto-body-default auto-mb-2">Success Text - auto-text-success</p>
      <p className="auto-text-warning auto-body-default auto-mb-2">Warning Text - auto-text-warning</p>
      <p className="auto-text-info auto-body-default auto-mb-2">Info Text - auto-text-info</p>
      <p className="auto-text-accent auto-body-default auto-mb-2">Accent Text - auto-text-accent</p>
    </div>
    
    <h2 className="auto-heading-2 auto-mt-8">Background Color Classes</h2>
    <p className="auto-body-default auto-mb-6">
      Background color classes follow the pattern <code className="auto-code">auto-bg-*</code> and can be applied to any element.
    </p>
    
    <div className="auto-py-4">
      <div className="auto-bg-primary auto-p-4 auto-mb-2 auto-rounded">Primary Background - auto-bg-primary</div>
      <div className="auto-bg-secondary auto-p-4 auto-mb-2 auto-rounded">Secondary Background - auto-bg-secondary</div>
      <div className="auto-bg-tertiary auto-p-4 auto-mb-2 auto-rounded">Tertiary Background - auto-bg-tertiary</div>
      <div className="auto-bg-error auto-p-4 auto-mb-2 auto-rounded">Error Background - auto-bg-error</div>
      <div className="auto-bg-success auto-p-4 auto-mb-2 auto-rounded">Success Background - auto-bg-success</div>
      <div className="auto-bg-warning auto-p-4 auto-mb-2 auto-rounded">Warning Background - auto-bg-warning</div>
      <div className="auto-bg-info auto-p-4 auto-mb-2 auto-rounded">Info Background - auto-bg-info</div>
      <div className="auto-bg-accent auto-p-4 auto-mb-2 auto-rounded">Accent Background - auto-bg-accent</div>
    </div>
    
    <h2 className="auto-heading-2 auto-mt-8">Button Classes</h2>
    <p className="auto-body-default auto-mb-6">
      Button classes follow the pattern <code className="auto-code">auto-button-*</code> and are typically applied to button elements.
    </p>
    
    <div className="auto-py-4 tw-flex tw-flex-wrap tw-gap-2">
      <button className="auto-button-primary auto-p-2 auto-px-4 auto-rounded">Primary Button</button>
      <button className="auto-button-secondary auto-p-2 auto-px-4 auto-rounded">Secondary Button</button>
      <button className="auto-button-accent auto-p-2 auto-px-4 auto-rounded">Accent Button</button>
      <button className="auto-button-danger auto-p-2 auto-px-4 auto-rounded">Danger Button</button>
      <button className="auto-button-disabled auto-p-2 auto-px-4 auto-rounded" disabled>Disabled Button</button>
    </div>
  </div>
);

export const Typography = () => (
  <div>
    <h2 className="auto-heading-2">Heading Classes</h2>
    <p className="auto-body-default auto-mb-6">
      Heading classes follow the pattern <code className="auto-code">auto-heading-*</code> and provide all the typography settings for headings.
    </p>
    
    <div className="auto-py-4">
      <h1 className="auto-heading-1 auto-mb-2">Heading 1 - auto-heading-1</h1>
      <h2 className="auto-heading-2 auto-mb-2">Heading 2 - auto-heading-2</h2>
      <h3 className="auto-heading-3 auto-mb-2">Heading 3 - auto-heading-3</h3>
      <h4 className="auto-heading-4 auto-mb-2">Heading 4 - auto-heading-4</h4>
    </div>
    
    <h2 className="auto-heading-2 auto-mt-8">Body Text Classes</h2>
    <p className="auto-body-default auto-mb-6">
      Body text classes follow the pattern <code className="auto-code">auto-body-*</code> and provide typography settings for body text.
    </p>
    
    <div className="auto-py-4">
      <p className="auto-body-large auto-mb-2">Large body text - auto-body-large</p>
      <p className="auto-body-default auto-mb-2">Default body text - auto-body-default</p>
      <p className="auto-body-small auto-mb-2">Small body text - auto-body-small</p>
      <p className="auto-body-xs auto-mb-2">Extra small body text - auto-body-xs</p>
    </div>
    
    <h2 className="auto-heading-2 auto-mt-8">Font Size Classes</h2>
    <p className="auto-body-default auto-mb-6">
      Font size classes follow the pattern <code className="auto-code">auto-text-*</code> and can be combined with other typography classes.
    </p>
    
    <div className="auto-py-4">
      <p className="auto-text-xs auto-mb-2">Extra small text - auto-text-xs</p>
      <p className="auto-text-sm auto-mb-2">Small text - auto-text-sm</p>
      <p className="auto-text-base auto-mb-2">Base text - auto-text-base</p>
      <p className="auto-text-lg auto-mb-2">Large text - auto-text-lg</p>
      <p className="auto-text-xl auto-mb-2">Extra large text - auto-text-xl</p>
      <p className="auto-text-2xl auto-mb-2">2XL text - auto-text-2xl</p>
      <p className="auto-text-3xl auto-mb-2">3XL text - auto-text-3xl</p>
    </div>
    
    <h2 className="auto-heading-2 auto-mt-8">Font Weight Classes</h2>
    <p className="auto-body-default auto-mb-6">
      Font weight classes follow the pattern <code className="auto-code">auto-font-*</code> and can be combined with other typography classes.
    </p>
    
    <div className="auto-py-4">
      <p className="auto-font-light auto-mb-2">Light text - auto-font-light</p>
      <p className="auto-font-normal auto-mb-2">Normal text - auto-font-normal</p>
      <p className="auto-font-medium auto-mb-2">Medium text - auto-font-medium</p>
      <p className="auto-font-semibold auto-mb-2">Semibold text - auto-font-semibold</p>
      <p className="auto-font-bold auto-mb-2">Bold text - auto-font-bold</p>
      <p className="auto-font-extrabold auto-mb-2">Extrabold text - auto-font-extrabold</p>
    </div>
  </div>
);

export const Spacing = () => (
  <div>
    <h2 className="auto-heading-2">Margin Classes</h2>
    <p className="auto-body-default auto-mb-6">
      Margin classes follow the pattern <code className="auto-code">auto-m-*</code> and can be applied to any element.
    </p>
    
    <div className="auto-py-4">
      <div className="auto-bg-secondary auto-p-2 auto-rounded auto-text-center auto-m-1">auto-m-1</div>
      <div className="auto-bg-secondary auto-p-2 auto-rounded auto-text-center auto-m-2">auto-m-2</div>
      <div className="auto-bg-secondary auto-p-2 auto-rounded auto-text-center auto-m-4">auto-m-4</div>
      <div className="auto-bg-secondary auto-p-2 auto-rounded auto-text-center auto-m-8">auto-m-8</div>
    </div>
    
    <h2 className="auto-heading-2 auto-mt-8">Padding Classes</h2>
    <p className="auto-body-default auto-mb-6">
      Padding classes follow the pattern <code className="auto-code">auto-p-*</code> and can be applied to any element.
    </p>
    
    <div className="auto-py-4 tw-flex tw-gap-2">
      <div className="auto-bg-secondary auto-rounded auto-p-1">auto-p-1</div>
      <div className="auto-bg-secondary auto-rounded auto-p-2">auto-p-2</div>
      <div className="auto-bg-secondary auto-rounded auto-p-4">auto-p-4</div>
      <div className="auto-bg-secondary auto-rounded auto-p-8">auto-p-8</div>
    </div>
    
    <h2 className="auto-heading-2 auto-mt-8">Border Radius Classes</h2>
    <p className="auto-body-default auto-mb-6">
      Border radius classes follow the pattern <code className="auto-code">auto-rounded-*</code> and can be applied to any element.
    </p>
    
    <div className="auto-py-4 tw-flex tw-flex-wrap tw-gap-4">
      <div className="auto-bg-secondary auto-p-4 auto-rounded-none">auto-rounded-none</div>
      <div className="auto-bg-secondary auto-p-4 auto-rounded-sm">auto-rounded-sm</div>
      <div className="auto-bg-secondary auto-p-4 auto-rounded">auto-rounded</div>
      <div className="auto-bg-secondary auto-p-4 auto-rounded-md">auto-rounded-md</div>
      <div className="auto-bg-secondary auto-p-4 auto-rounded-lg">auto-rounded-lg</div>
      <div className="auto-bg-secondary auto-p-4 auto-rounded-xl">auto-rounded-xl</div>
      <div className="auto-bg-secondary auto-p-4 auto-rounded-full">auto-rounded-full</div>
    </div>
  </div>
);

export const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  return (
    <div className={`${isDarkTheme ? 'auto-theme-dark' : ''} tw-p-6 tw-rounded-lg`}>
      <h2 className="auto-heading-2">Theme Toggle</h2>
      <p className="auto-body-default auto-mb-6">
        Use the <code className="auto-code">auto-theme-dark</code> class on any container to apply dark theme styles to all children.
      </p>
      
      <button 
        className={`auto-p-2 auto-px-4 auto-rounded ${isDarkTheme ? 'auto-button-accent' : 'auto-button-primary'}`} 
        onClick={() => setIsDarkTheme(!isDarkTheme)}
      >
        {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      </button>
      
      <div className="auto-mt-6 auto-p-6 auto-bg-primary auto-rounded-lg">
        <h3 className="auto-heading-3 auto-text-primary">Theme Example</h3>
        <p className="auto-body-default auto-text-secondary auto-mt-2">
          This content will change based on the theme. The current theme is: <strong>{isDarkTheme ? 'Dark' : 'Light'}</strong>
        </p>
        
        <div className="auto-mt-4 tw-flex tw-flex-wrap tw-gap-2">
          <div className="auto-bg-secondary auto-p-3 auto-rounded">Secondary Background</div>
          <div className="auto-bg-tertiary auto-p-3 auto-rounded">Tertiary Background</div>
          <div className="auto-bg-accent auto-p-3 auto-rounded">Accent Background</div>
        </div>
        
        <div className="auto-mt-4 tw-flex tw-gap-2">
          <button className="auto-button-primary auto-p-2 auto-rounded">Primary Button</button>
          <button className="auto-button-secondary auto-p-2 auto-rounded">Secondary Button</button>
          <button className="auto-button-accent auto-p-2 auto-rounded">Accent Button</button>
        </div>
      </div>
    </div>
  );
}; 