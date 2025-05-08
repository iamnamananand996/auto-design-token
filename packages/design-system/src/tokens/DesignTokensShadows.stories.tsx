import React from 'react';

export default {
  title: 'Design Tokens/Shadows',
  parameters: {
    docs: {
      description: {
        component: 'All available shadow tokens in the Auto Design system.',
      },
    },
    layout: 'padded',
  },
};

interface ShadowItemProps {
  name: string;
  className: string;
}

const ShadowItem = ({ name, className }: ShadowItemProps) => (
  <div className="auto-mb-6">
    <div className={`auto-w-48 auto-h-32 auto-bg-white auto-rounded auto-p-4 auto-mb-2 ${className}`}>
      <div className="auto-mt-2 auto-mb-4">
        <span className="auto-text-primary auto-text-sm">{name.replace('auto-shadow-', 'shadow-')}</span>
      </div>
    </div>
    <div className="auto-flex auto-flex-col auto-gap-1">
      <code className="auto-text-sm auto-font-mono auto-text-secondary">CSS class: <span className="auto-text-primary">{name}</span></code>
      <code className="auto-text-sm auto-font-mono auto-text-secondary">CSS var: <span className="auto-text-primary">var(--{name.replace('auto-shadow-', '')})</span></code>
    </div>
  </div>
);

export const AllShadows = () => {
  return (
    <div className="auto-m-4">
      <h1 className="auto-heading-1 auto-mb-8">Auto Design Tokens - Shadows</h1>
      
      <p className="auto-body-default auto-mb-8">
        You can use shadow tokens either as CSS classes with the <code className="auto-code">auto-shadow-*</code> prefix 
        or as CSS variables with the <code className="auto-code">--shadow-*</code> prefix.
      </p>
      
      <h2 className="auto-heading-2 auto-mb-4">General Shadows</h2>
      <div className="auto-grid auto-grid-cols-1 auto-md:grid-cols-2 auto-lg:grid-cols-3 auto-gap-8">
        <ShadowItem name="auto-shadow-sm" className="auto-shadow-sm" />
        <ShadowItem name="auto-shadow-default" className="auto-shadow-default" />
        <ShadowItem name="auto-shadow-md" className="auto-shadow-md" />
        <ShadowItem name="auto-shadow-lg" className="auto-shadow-lg" />
        <ShadowItem name="auto-shadow-xl" className="auto-shadow-xl" />
        <ShadowItem name="auto-shadow-2xl" className="auto-shadow-2xl" />
        <ShadowItem name="auto-shadow-inner" className="auto-shadow-inner" />
        <ShadowItem name="auto-shadow-none" className="auto-shadow-none" />
      </div>
      
      <h2 className="auto-heading-2 auto-mt-16 auto-mb-4">Dark Mode Shadows</h2>
      <div className="auto-grid auto-grid-cols-1 auto-md:grid-cols-2 auto-lg:grid-cols-3 auto-gap-8">
        <ShadowItem name="auto-shadow-darksm" className="auto-shadow-darksm" />
        <ShadowItem name="auto-shadow-darkdefault" className="auto-shadow-darkdefault" />
        <ShadowItem name="auto-shadow-darkmd" className="auto-shadow-darkmd" />
        <ShadowItem name="auto-shadow-darklg" className="auto-shadow-darklg" />
        <ShadowItem name="auto-shadow-darkxl" className="auto-shadow-darkxl" />
        <ShadowItem name="auto-shadow-dark2xl" className="auto-shadow-dark2xl" />
      </div>
      
      <h2 className="auto-heading-2 auto-mt-16 auto-mb-4">Component Shadows</h2>
      <div className="auto-grid auto-grid-cols-1 auto-md:grid-cols-2 auto-lg:grid-cols-3 auto-gap-8">
        <ShadowItem name="auto-shadow-button" className="auto-shadow-button" />
        <ShadowItem name="auto-shadow-card" className="auto-shadow-card" />
        <ShadowItem name="auto-shadow-modal" className="auto-shadow-modal" />
        <ShadowItem name="auto-shadow-dropdown" className="auto-shadow-dropdown" />
        <ShadowItem name="auto-shadow-header" className="auto-shadow-header" />
        <ShadowItem name="auto-shadow-tooltip" className="auto-shadow-tooltip" />
      </div>
      
      <h2 className="auto-heading-2 auto-mt-16 auto-mb-4">Dark Component Shadows</h2>
      <div className="auto-grid auto-grid-cols-1 auto-md:grid-cols-2 auto-lg:grid-cols-3 auto-gap-8">
        <ShadowItem name="auto-shadow-buttonDark" className="auto-shadow-buttonDark" />
        <ShadowItem name="auto-shadow-cardDark" className="auto-shadow-cardDark" />
        <ShadowItem name="auto-shadow-modalDark" className="auto-shadow-modalDark" />
        <ShadowItem name="auto-shadow-dropdownDark" className="auto-shadow-dropdownDark" />
        <ShadowItem name="auto-shadow-headerDark" className="auto-shadow-headerDark" />
        <ShadowItem name="auto-shadow-tooltipDark" className="auto-shadow-tooltipDark" />
      </div>
      
      <div className="auto-mt-16 auto-p-6 auto-bg-gray-100 auto-rounded">
        <h2 className="auto-heading-3 auto-mb-4">Usage Examples</h2>
        <div className="auto-grid auto-grid-cols-1 auto-md:grid-cols-2 auto-gap-8">
          <div>
            <h3 className="auto-heading-4 auto-mb-2">Using CSS Classes</h3>
            <pre className="auto-p-4 auto-bg-gray-800 auto-text-white auto-rounded auto-font-mono auto-text-sm">
              &lt;div className="auto-shadow-lg"&gt;
                Shadow box using class
              &lt;/div&gt;
            </pre>
          </div>
          <div>
            <h3 className="auto-heading-4 auto-mb-2">Using CSS Variables</h3>
            <pre className="auto-p-4 auto-bg-gray-800 auto-text-white auto-rounded auto-font-mono auto-text-sm">
              &lt;div style=&#123;&#123; boxShadow: 'var(--shadow-lg)' &#125;&#125;&gt;
                Shadow box using variable
              &lt;/div&gt;
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}; 