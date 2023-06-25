const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.config.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    clean: true,
    path: path.resolve(__dirname, "../dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "正式環境",
      template: path.resolve(__dirname, "../index.html"),
    }),
  ],
});