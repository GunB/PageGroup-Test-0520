/* craco.config.js */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  babel: {
    plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
  },
  webpack: {
    plugins: [
      new HtmlWebpackPlugin({
        title: "My App",
        template: "./public/index.html",
        filename: "admin.html",
        meta: {
          viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
          // Will generate: <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          "theme-color": "#4285f4",
          // Will generate: <meta name="theme-color" content="#4285f4">
        },
      }),
      new HtmlWebpackPlugin({
        title: "My App",
        template: "./public/index.html",
        filename: "admin2.html",
        meta: {
          viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
          // Will generate: <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          "theme-color": "#4285f4",
          // Will generate: <meta name="theme-color" content="#4285f4">
        },
      }),
      new HtmlWebpackPlugin({
        title: "My App",
        template: "./public/index.html",
        filename: "index.html",
        meta: {
          viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
          // Will generate: <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          "theme-color": "#4285f4",
          // Will generate: <meta name="theme-color" content="#4285f4">
        },
      }),
      new FaviconsWebpackPlugin({
        logo: "./src/logo.svg", // svg works too!
        prefix: "icons/",
        inject: true,
        favicons: {
          appName: "my-app",
          appDescription: "My awesome App",
          developerName: "Me",
          developerURL: null, // prevent retrieving from the nearest package.json
          background: "#ddd",
          theme_color: "#333",
          icons: {
            coast: false,
            yandex: false,
          },
        },
      }),
    ],
  },
};
