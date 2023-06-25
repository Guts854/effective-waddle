const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "../src/main.js"),
  },
  output: {
    publicPath: '/',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
    extensions: [".js", ".css", ".scss", ".sass"],
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/i,
        include: path.resolve(__dirname, "../src"),
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: path.resolve(__dirname, "../src"),
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        include: path.resolve(__dirname, "../src"),
        type: "asset/resource",
      },
    ],
  },
};