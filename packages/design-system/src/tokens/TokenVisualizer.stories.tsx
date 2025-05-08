import React from 'react';

export default {
  title: 'Design Tokens/Token Visualizer',
  parameters: {
    docs: {
      description: {
        component: 'Visual representation of available design tokens through CSS classes.',
      },
    },
    layout: 'padded',
  },
};

export const ColorSwatches = () => {
  // Define color categories
  const brandColors = [
    { name: 'primary', label: 'Primary', className: 'auto-bg-primary' },
    { name: 'secondary', label: 'Secondary', className: 'auto-bg-secondary' },
    { name: 'tertiary', label: 'Tertiary', className: 'auto-bg-tertiary' },
    { name: 'accent', label: 'Accent', className: 'auto-bg-accent' },
  ];

  const semanticColors = [
    { name: 'success', label: 'Success', className: 'auto-bg-success' },
    { name: 'error', label: 'Error', className: 'auto-bg-error' },
    { name: 'warning', label: 'Warning', className: 'auto-bg-warning' },
    { name: 'info', label: 'Info', className: 'auto-bg-info' },
  ];

  return (
    <div className="auto-p-4">
      <h2 className="auto-heading-2 auto-mb-4">Color Token Visualization</h2>
      <p className="auto-body-default auto-mb-6">
        All colors are accessed through CSS classes like{' '}
        <code className="auto-font-mono auto-text-accent">auto-bg-primary</code> and{' '}
        <code className="auto-font-mono auto-text-accent">auto-text-secondary</code>.
      </p>

      <h3 className="auto-heading-3 auto-mb-4">Brand Colors</h3>
      <div className="auto-mb-8 tw-flex tw-flex-wrap tw-gap-4">
        {brandColors.map((color) => (
          <div key={color.name} className="auto-p-2 tw-text-center">
            <div
              className={`${color.className} auto-rounded-md tw-w-[100px] tw-h-[100px] tw-mb-2`}
            ></div>
            <div className="auto-body-small auto-font-semibold">{color.label}</div>
            <div className="auto-text-xs auto-text-secondary">auto-bg-{color.name}</div>
          </div>
        ))}
      </div>

      <h3 className="auto-heading-3 auto-mb-4">Semantic Colors</h3>
      <div className="auto-mb-8 tw-flex tw-flex-wrap tw-gap-4">
        {semanticColors.map((color) => (
          <div key={color.name} className="auto-p-2 tw-text-center">
            <div
              className={`${color.className} auto-rounded-md tw-w-[100px] tw-h-[100px] tw-mb-2`}
            ></div>
            <div className="auto-body-small auto-font-semibold">{color.label}</div>
            <div className="auto-text-xs auto-text-secondary">auto-bg-{color.name}</div>
          </div>
        ))}
      </div>

      <h3 className="auto-heading-3 auto-mb-4">Text Colors</h3>
      <div className="auto-mb-8 auto-p-4 auto-bg-secondary auto-rounded-lg tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-4">
        <p className="auto-text-primary auto-body-default">Primary Text</p>
        <p className="auto-text-secondary auto-body-default">Secondary Text</p>
        <p className="auto-text-tertiary auto-body-default">Tertiary Text</p>
        <p className="auto-text-disabled auto-body-default">Disabled Text</p>
        <p className="auto-text-error auto-body-default">Error Text</p>
        <p className="auto-text-success auto-body-default">Success Text</p>
        <p className="auto-text-warning auto-body-default">Warning Text</p>
        <p className="auto-text-info auto-body-default">Info Text</p>
        <p className="auto-text-accent auto-body-default">Accent Text</p>
      </div>
    </div>
  );
};

export const TypographyDisplay = () => {
  const fontSizes = [
    { name: 'xs', label: 'Extra Small' },
    { name: 'sm', label: 'Small' },
    { name: 'base', label: 'Base' },
    { name: 'lg', label: 'Large' },
    { name: 'xl', label: 'Extra Large' },
    { name: '2xl', label: '2XL' },
    { name: '3xl', label: '3XL' },
    { name: '4xl', label: '4XL' },
  ];

  const fontWeights = [
    { name: 'light', label: 'Light' },
    { name: 'normal', label: 'Normal' },
    { name: 'medium', label: 'Medium' },
    { name: 'semibold', label: 'Semibold' },
    { name: 'bold', label: 'Bold' },
    { name: 'extrabold', label: 'Extra Bold' },
  ];

  return (
    <div className="auto-p-4">
      <h2 className="auto-heading-2 auto-mb-4">Typography Token Visualization</h2>
      <p className="auto-body-default auto-mb-6">
        Typography is accessed through CSS classes like{' '}
        <code className="auto-font-mono auto-text-accent">auto-heading-1</code> and{' '}
        <code className="auto-font-mono auto-text-accent">auto-body-default</code>.
      </p>

      <h3 className="auto-heading-3 auto-mb-4">Heading Styles</h3>
      <div className="auto-mb-8 auto-p-4 auto-bg-secondary auto-rounded-lg">
        <h1 className="auto-heading-1 auto-mb-2">Heading 1 - auto-heading-1</h1>
        <h2 className="auto-heading-2 auto-mb-2">Heading 2 - auto-heading-2</h2>
        <h3 className="auto-heading-3 auto-mb-2">Heading 3 - auto-heading-3</h3>
        <h4 className="auto-heading-4 auto-mb-2">Heading 4 - auto-heading-4</h4>
      </div>

      <h3 className="auto-heading-3 auto-mb-4">Body Text Styles</h3>
      <div className="auto-mb-8 auto-p-4 auto-bg-secondary auto-rounded-lg">
        <p className="auto-body-large auto-mb-2">Large body text - auto-body-large</p>
        <p className="auto-body-default auto-mb-2">Default body text - auto-body-default</p>
        <p className="auto-body-small auto-mb-2">Small body text - auto-body-small</p>
        <p className="auto-body-xs auto-mb-2">Extra small body text - auto-body-xs</p>
      </div>

      <h3 className="auto-heading-3 auto-mb-4">Font Size Utilities</h3>
      <div className="auto-mb-8 auto-p-4 auto-bg-secondary auto-rounded-lg">
        {fontSizes.map((size) => (
          <p key={size.name} className={`auto-text-${size.name} auto-mb-2`}>
            {size.label} - auto-text-{size.name}
          </p>
        ))}
      </div>

      <h3 className="auto-heading-3 auto-mb-4">Font Weight Utilities</h3>
      <div className="auto-mb-8 auto-p-4 auto-bg-secondary auto-rounded-lg">
        {fontWeights.map((weight) => (
          <p key={weight.name} className={`auto-font-${weight.name} auto-mb-2`}>
            {weight.label} - auto-font-{weight.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export const SpacingDisplay = () => {
  const spacingSizes = [
    { name: '0', label: '0' },
    { name: '1', label: '0.25rem' },
    { name: '2', label: '0.5rem' },
    { name: '4', label: '1rem' },
    { name: '6', label: '1.5rem' },
    { name: '8', label: '2rem' },
    { name: '12', label: '3rem' },
    { name: '16', label: '4rem' },
  ];

  const radiusSizes = [
    { name: 'none', label: 'None' },
    { name: 'sm', label: 'Small' },
    { name: '', label: 'Default' }, // Default is just auto-rounded
    { name: 'md', label: 'Medium' },
    { name: 'lg', label: 'Large' },
    { name: 'xl', label: 'Extra Large' },
    { name: 'full', label: 'Full' },
  ];

  return (
    <div className="auto-p-4">
      <h2 className="auto-heading-2 auto-mb-4">Spacing Token Visualization</h2>
      <p className="auto-body-default auto-mb-6">
        Spacing is accessed through CSS classes like{' '}
        <code className="auto-font-mono auto-text-accent">auto-m-4</code> and{' '}
        <code className="auto-font-mono auto-text-accent">auto-p-2</code>.
      </p>

      <h3 className="auto-heading-3 auto-mb-4">Padding Utilities</h3>
      <div className="auto-mb-8 tw-flex tw-flex-wrap tw-gap-4">
        {spacingSizes.map((size) => (
          <div key={size.name} className="tw-text-center">
            <div className={`auto-bg-secondary auto-rounded auto-p-${size.name}`}>
              <div className="auto-bg-accent auto-rounded tw-w-[50px] tw-h-[50px]"></div>
            </div>
            <div className="auto-body-small auto-mt-2">auto-p-{size.name}</div>
            <div className="auto-text-xs auto-text-secondary">{size.label}</div>
          </div>
        ))}
      </div>

      <h3 className="auto-heading-3 auto-mb-4">Margin Utilities</h3>
      <div className="auto-mb-8 auto-p-4 auto-bg-secondary auto-rounded-lg">
        <div className="auto-body-small auto-mb-2">Example with auto-mb-* (margin-bottom)</div>
        {spacingSizes.slice(1, 5).map((size) => (
          <div key={size.name} className="tw-flex">
            <div
              className={`auto-bg-accent auto-rounded-sm auto-p-2 auto-mb-${size.name} tw-w-[200px]`}
            >
              auto-mb-{size.name} ({size.label})
            </div>
          </div>
        ))}
      </div>

      <h3 className="auto-heading-3 auto-mb-4">Border Radius Utilities</h3>
      <div className="auto-mb-8 tw-flex tw-flex-wrap tw-gap-4">
        {radiusSizes.map((radius) => (
          <div key={radius.name} className="tw-text-center">
            <div
              className={`auto-bg-accent ${radius.name ? `auto-rounded-${radius.name}` : 'auto-rounded'} tw-w-[80px] tw-h-[80px]`}
            ></div>
            <div className="auto-body-small auto-mt-2">
              {radius.name ? `auto-rounded-${radius.name}` : 'auto-rounded'}
            </div>
            <div className="auto-text-xs auto-text-secondary">{radius.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
