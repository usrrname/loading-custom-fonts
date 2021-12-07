module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-a11y",
  ],
  staticDirs: [{ from: "../src/fonts/proxima-nova", to: "/static/media" }],
  framework: "@storybook/react",
};
