const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
	],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      resolve: {
        alias: {
          // correct dir path resolution from import "@/..." in your project
          "@": path.resolve(__dirname, "../src")
        }
      }
    });

    config.module.rules.push({
      test: /\.twig$/,
      use: [
        {
          loader: 'twigjs-loader',
        },
      ],
    });

    return config;
  }
}