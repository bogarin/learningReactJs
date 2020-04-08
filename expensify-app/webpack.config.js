const path = require("path");
const { modulo } = require("./webpackConfig/plugins");
const { reglas } = require("./webpackConfig/reglas");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./app.js",
  output: {
    path: path.join(__dirname, "scripts"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: reglas
  },
  plugins: modulo(false),
  devtool: "eval-cheap-module-source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "scripts"),
    port: 4800
  }
};  
