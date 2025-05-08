import React from 'react';

export default {
  title: 'Design Tokens/Explorer Styles',
  parameters: {
    docs: {
      description: {
        component:
          'Examples of using Auto Design Explorer styles with CSS utility classes. These styles are now in a separate CSS file for more flexible importing.',
      },
    },
    layout: 'padded',
  },
};

export const ExplorerColors = () => (
  <div>
    <h2 className="auto-heading-2">Explorer Background Colors</h2>
    <p className="auto-body-default auto-mb-6">
      Explorer background color classes follow the pattern{' '}
      <code className="auto-code">auto-explorer-bg-*</code> and can be applied to any element.
    </p>

    <div className="auto-py-4 tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-4">
      <div className="auto-explorer-bg-grayDark auto-p-4 auto-mb-2 auto-rounded auto-explorer-text-white">
        grayDark
      </div>
      <div className="auto-explorer-bg-grayDarker auto-p-4 auto-mb-2 auto-rounded auto-explorer-text-white">
        grayDarker
      </div>
      <div className="auto-explorer-bg-grayLight auto-p-4 auto-mb-2 auto-rounded auto-explorer-text-white">
        grayLight
      </div>
      <div className="auto-explorer-bg-gradientFrom auto-p-4 auto-mb-2 auto-rounded auto-explorer-text-white">
        gradientFrom
      </div>
      <div className="auto-explorer-bg-gradientVia auto-p-4 auto-mb-2 auto-rounded auto-explorer-text-white">
        gradientVia
      </div>
      <div className="auto-explorer-bg-gradientTo auto-p-4 auto-mb-2 auto-rounded auto-explorer-text-white">
        gradientTo
      </div>
      <div className="auto-explorer-bg-whiteOpaque auto-p-4 auto-mb-2 auto-rounded auto-explorer-text-white">
        whiteOpaque
      </div>
      <div className="auto-explorer-bg-primaryAccent auto-p-4 auto-mb-2 auto-rounded auto-explorer-text-white">
        primaryAccent
      </div>
      <div className="auto-explorer-bg-blueAccent auto-p-4 auto-mb-2 auto-rounded auto-explorer-text-white">
        blueAccent
      </div>
      <div className="auto-explorer-bg-blueLight auto-p-4 auto-mb-2 auto-rounded auto-explorer-text-white">
        blueLight
      </div>
      <div className="auto-explorer-bg-blueShade auto-p-4 auto-mb-2 auto-rounded auto-explorer-text-white">
        blueShade
      </div>
      <div className="auto-explorer-bg-blueUndertone auto-p-4 auto-mb-2 auto-rounded auto-explorer-text-white">
        blueUndertone
      </div>
    </div>

    <h2 className="auto-heading-2 auto-mt-8">Explorer Text Colors</h2>
    <p className="auto-body-default auto-mb-6">
      Explorer text color classes follow the pattern{' '}
      <code className="auto-code">auto-explorer-text-*</code> and can be applied to any element.
    </p>

    <div className="auto-py-4 tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-4">
      <p className="auto-explorer-text-primaryAccent auto-body-default auto-mb-2">
        Primary Accent - auto-explorer-text-primaryAccent
      </p>
      <p className="auto-explorer-text-blueAccent auto-body-default auto-mb-2">
        Blue Accent - auto-explorer-text-blueAccent
      </p>
      <p className="auto-explorer-text-blueDarkAccent auto-body-default auto-mb-2">
        Blue Dark Accent - auto-explorer-text-blueDarkAccent
      </p>
      <p className="auto-explorer-text-blueLight auto-body-default auto-mb-2">
        Blue Light - auto-explorer-text-blueLight
      </p>
      <p className="auto-explorer-text-blueShade auto-body-default auto-mb-2">
        Blue Shade - auto-explorer-text-blueShade
      </p>
      <p className="auto-explorer-text-blueUndertone auto-body-default auto-mb-2">
        Blue Undertone - auto-explorer-text-blueUndertone
      </p>
    </div>
  </div>
);

export const ExplorerGradients = () => (
  <div>
    <h2 className="auto-heading-2">Explorer Gradient Classes</h2>
    <p className="auto-body-default auto-mb-6">
      Explorer gradient classes follow several patterns for different use cases like backgrounds,
      buttons, and cards.
    </p>

    <h3 className="auto-heading-3 auto-mt-4">Background Gradients</h3>
    <div className="auto-py-4 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4">
      <div className="auto-explorer-bg-gradient-dark auto-p-8 auto-rounded auto-explorer-text-white">
        Dark Background Gradient - auto-explorer-bg-gradient-dark
      </div>
      <div className="auto-explorer-bg-gradient-light auto-p-8 auto-rounded auto-explorer-text-white">
        Light Background Gradient - auto-explorer-bg-gradient-light
      </div>
    </div>

    <h3 className="auto-heading-3 auto-mt-4">Button Gradients</h3>
    <div className="auto-py-4 tw-flex tw-flex-wrap tw-gap-4">
      <button className="auto-explorer-button-gradient-light auto-p-2 auto-px-4 auto-rounded auto-explorer-text-white">
        Light Button Gradient
      </button>
      <button className="auto-explorer-button-gradient-dark auto-p-2 auto-px-4 auto-rounded auto-explorer-text-white">
        Dark Button Gradient
      </button>
    </div>

    <h3 className="auto-heading-3 auto-mt-4">Card Gradients</h3>
    <div className="auto-py-4 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4">
      <div className="auto-explorer-card-gradient-primary auto-p-6 auto-rounded auto-explorer-text-white">
        <h4 className="auto-heading-4">Primary Card Gradient</h4>
        <p className="auto-body-small auto-mt-2">auto-explorer-card-gradient-primary</p>
      </div>
      <div className="auto-explorer-card-gradient-secondary auto-p-6 auto-rounded auto-explorer-text-white">
        <h4 className="auto-heading-4">Secondary Card Gradient</h4>
        <p className="auto-body-small auto-mt-2">auto-explorer-card-gradient-secondary</p>
      </div>
    </div>
  </div>
);

export const ExplorerComponentExample = () => (
  <div className="auto-p-4">
    <h2 className="auto-heading-2 auto-mb-4">Explorer-styled Component Example</h2>
    <p className="auto-body-default auto-mb-6">
      This example shows how to build a component using Explorer-specific styles.
    </p>

    <div className="auto-explorer-bg-backgroundDarker auto-p-6 auto-rounded-lg">
      <div className="auto-explorer-card-gradient-primary auto-p-4 auto-rounded">
        <h3 className="auto-heading-3 auto-explorer-text-white">Explorer Dashboard</h3>
        <p className="auto-body-default auto-explorer-text-whiteOpaque auto-mt-2">
          This component uses Explorer-specific colors and gradients that are now available in a
          separate CSS file.
        </p>

        <div className="tw-flex tw-gap-3 auto-mt-4">
          <button className="auto-explorer-button-gradient-light auto-p-2 auto-px-4 auto-rounded auto-explorer-text-white">
            Primary Action
          </button>
          <button className="auto-explorer-bg-blueAccent auto-p-2 auto-px-4 auto-rounded auto-explorer-text-white">
            Secondary Action
          </button>
        </div>

        <div className="tw-grid tw-grid-cols-2 tw-gap-3 auto-mt-6">
          <div className="auto-explorer-bg-grayDark auto-p-3 auto-rounded auto-explorer-text-white">
            <p className="auto-body-small auto-font-semibold">Status</p>
            <p className="auto-body-default auto-explorer-text-pastelGreen">Active</p>
          </div>
          <div className="auto-explorer-bg-grayDark auto-p-3 auto-rounded auto-explorer-text-white">
            <p className="auto-body-small auto-font-semibold">Priority</p>
            <p className="auto-body-default auto-explorer-text-pastelPurple">High</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
