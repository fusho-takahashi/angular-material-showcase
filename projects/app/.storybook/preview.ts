import { setCompodocJson } from '@storybook/addon-docs/angular';
import type { Preview } from '@storybook/angular';
import { withScreenshot } from 'storycap';
import docJson from '../documentation.json';
setCompodocJson(docJson);

export const decorators = [withScreenshot];

export const parameters = {
  screenshot: {
    viewports: {
      desktop: {
        width: 1024,
        height: 768,
      },
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
