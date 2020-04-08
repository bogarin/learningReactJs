const path = require("path");
const dotenv = require("dotenv");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const AppManifestWebpackPlugin = require("app-manifest-webpack-plugin");

dotenv.config();

const developmentOutputPath = path.resolve(__dirname, "devPublic");
const productionOutputPath = path.resolve(__dirname, "dist");

const outputPath =
  (process.env.NODE_ENV === "production" && productionOutputPath) ||
  developmentOutputPath;

const output = {
  path: outputPath,
};

const htmlConfig = {
  template: "index.ejs",
  inject: "body",
  cache: false,
  title: "Webpack example",
  filename: "index.html",
};

pluginDev = [
  new HtmlWebpackPlugin(htmlConfig),
  new webpack.ProvidePlugin({
    React: "react",
    ReactDOM: "react-dom",
  }),
];

pluginProd = [
  new HtmlWebpackPlugin(htmlConfig),
  new webpack.ProvidePlugin({
    React: "react",
    ReactDOM: "react-dom",
  }),
  new AppManifestWebpackPlugin({
    logo: "./src/images/favicon.png",
    output: outputPath + "./icons/",
    // Change prefix of files  for correct paths in your html and manifest files
    prefix: "/icons/",
    inject: true,
  }),
];
const plugins =
  (process.env.NODE_ENV === "production" && pluginProd) || pluginDev;

const moduleConf = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    },
    {
      test: /\.s?css$/,
      use: ["style-loader", "css-loader", "sass-loader"]
    }
  ],
};

const root = path.resolve("src");
const entry = {
  app: `${root}/index.js`,
};

const resolve = {
  extensions: [".js"],
  alias: {
    routers: `${root}/routers`,
    components: `${root}/components`,
  },
};

const config = {
  entry,
  output,
  resolve,
  plugins,
  module: moduleConf,
  devtool: "cheap-module-eval-source-map",
};

if (process.env.NODE_ENV === "development") {
  config.devServer = {
    open: true,
    port: process.env.PORT || 4000,
    contentBase: developmentOutputPath,
    historyApiFallback: true,
  };
}

module.exports = config;
