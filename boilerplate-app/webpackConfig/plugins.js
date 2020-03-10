const HtmlWebpackPlugin = require("html-webpack-plugin");
const AppManifestWebpackPlugin = require("app-manifest-webpack-plugin");
exports.modulo = isProduccion => {

  if (isProduccion) {
    return [
      new HtmlWebpackPlugin({
        template: "./index.html"
      }),
      new AppManifestWebpackPlugin({
        logo: "./images/favicon.png",
        output: "./icons/",
        // Change prefix of files  for correct paths in your html and manifest files
        prefix: "/icons/",
        inject: true
      })
    ];
  }
  return [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ];
};