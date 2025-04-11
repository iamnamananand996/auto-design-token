import React, { useState } from 'react';

// Import our CSS directly for the story
// In a real app, you would use:
// import "auto-design-tokens/dist/index.css";
import '../css/index.css';

export default {
  title: 'Examples/Components',
  parameters: {
    docs: {
      description: {
        component: 'Examples of using Auto Design tokens in React components through CSS classes.',
      },
    },
    layout: 'padded',
  },
};

// Example component exactly as requested
export const SimpleComponent = () => {
  return (
    <div className="auto-bg-primary auto-text-accent auto-p-4 auto-rounded-lg">
      <h1 className="auto-heading-1">Example Heading</h1>
      <p className="auto-body-default auto-text-secondary">Example text</p>
    </div>
  );
};

SimpleComponent.storyName = 'Basic Usage';

// Card component example
export const Card = () => {
  return (
    <div className="auto-bg-secondary auto-p-4 auto-rounded-lg auto-m-4">
      <h2 className="auto-heading-2 auto-text-primary auto-mb-2">Card Title</h2>
      <p className="auto-body-default auto-text-secondary auto-mb-4">
        This is an example card component using Auto Design tokens through CSS classes.
      </p>
      <div className="tw-flex tw-gap-2">
        <button className="auto-button-primary auto-p-2 auto-px-4 auto-rounded">
          Primary Action
        </button>
        <button className="auto-button-secondary auto-p-2 auto-px-4 auto-rounded">
          Secondary Action
        </button>
      </div>
    </div>
  );
};

// Form component example
export const Form = () => {
  return (
    <form className="auto-bg-tertiary auto-p-6 auto-rounded-lg auto-m-4">
      <h2 className="auto-heading-2 auto-text-primary auto-mb-4">Login Form</h2>
      
      <div className="auto-mb-4">
        <label className="auto-body-small auto-text-secondary auto-mb-1 tw-block">
          Email
        </label>
        <input 
          type="email" 
          className="auto-p-2 auto-rounded auto-bg-primary auto-text-secondary tw-w-full tw-border tw-border-solid tw-border-gray-200" 
          placeholder="Enter your email"
        />
      </div>
      
      <div className="auto-mb-6">
        <label className="auto-body-small auto-text-secondary auto-mb-1 tw-block">
          Password
        </label>
        <input 
          type="password" 
          className="auto-p-2 auto-rounded auto-bg-primary auto-text-secondary tw-w-full tw-border tw-border-solid tw-border-gray-200" 
          placeholder="Enter your password"
        />
      </div>
      
      <button className="auto-button-primary auto-p-2 auto-px-4 auto-rounded">
        Sign In
      </button>
    </form>
  );
};

// Theme toggling example
export const ThemeToggleExample = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  return (
    <div className={`${isDarkTheme ? 'auto-theme-dark' : ''} tw-p-6 tw-rounded-lg`}>
      <div className="auto-bg-primary auto-p-6 auto-rounded-lg">
        <h2 className="auto-heading-2 auto-text-primary auto-mb-4">Theme Toggle Example</h2>
        <p className="auto-body-default auto-text-secondary auto-mb-6">
          This component demonstrates how to toggle between light and dark themes using the 
          <code className="auto-code auto-mx-1">auto-theme-dark</code> class.
        </p>
        
        <button 
          className={`auto-p-2 auto-px-4 auto-rounded ${isDarkTheme ? 'auto-button-accent' : 'auto-button-primary'}`}
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
        </button>
        
        <div className="auto-mt-6 tw-flex tw-flex-wrap tw-gap-3">
          <div className="auto-bg-secondary auto-p-4 auto-rounded">
            <h3 className="auto-heading-3 auto-mb-2">Secondary</h3>
            <p className="auto-body-small auto-text-secondary">Background color</p>
          </div>
          <div className="auto-bg-tertiary auto-p-4 auto-rounded">
            <h3 className="auto-heading-3 auto-mb-2">Tertiary</h3>
            <p className="auto-body-small auto-text-tertiary">Background color</p>
          </div>
          <div className="auto-bg-accent auto-p-4 auto-rounded">
            <h3 className="auto-heading-3 auto-mb-2">Accent</h3>
            <p className="auto-body-small auto-text-accent">Background color</p>
          </div>
        </div>
      </div>
    </div>
  );
}; 