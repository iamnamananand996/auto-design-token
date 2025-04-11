import { addons } from '@storybook/manager-api';
import autoTheme from './auto-theme';

// Apply the Auto Design theme to Storybook UI
addons.setConfig({
  theme: autoTheme,
  sidebar: {
    showRoots: true,
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
}); 