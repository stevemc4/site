module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [['next/babel']],
            plugins: [["styled-components", { "ssr": true }]]
          }
        }
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  }
}
