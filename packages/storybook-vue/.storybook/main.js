const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
	"addons": [
		"@storybook/addon-a11y",
    "@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-postcss"
	],
  webpackFinal: async (config, { configType }) => {
		config.resolve.alias = {
			...config.resolve.alias,
      '@': path.resolve(__dirname, "../src")
    }

    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            }

          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  }
}