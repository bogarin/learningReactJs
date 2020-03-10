exports.reglas = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ["babel-loader"]
  },
  {
    test: /\.s?css$/,
    use: ["style-loader", "css-loader", "sass-loader"]
  }
];
