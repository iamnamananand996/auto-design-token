/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    '../src/stories/Introduction.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: false,
      },
    },
  },
  docs: {
    autodocs: true,
    defaultName: 'Documentation',
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    // Add Babel loader for JSX
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
        },
      },
    });
    
    // Update CSS processing to include PostCSS for Tailwind
    config.module.rules.find(
      rule => rule.test && rule.test.toString().includes('.css')
    ).use = [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          implementation: require('postcss'),
        },
      },
    ];
    
    return config;
  },
};

export default config; 