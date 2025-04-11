import { themes } from '@storybook/theming';
import autoTheme from './auto-theme';
import '../src/tailwind.css';
import '../src/css/index.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#252525',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: autoTheme,
      story: {
        inline: true,
        iframeHeight: 400,
      },
    },
    options: {
      storySort: {
        order: [
          'Documentation', 
          ['Introduction'], 
          'Design Tokens', 
          ['CSS Classes', 'Token Visualizer'], 
          'Examples'
        ],
      },
    },
  },

  tags: ['autodocs']
};

export default preview; 