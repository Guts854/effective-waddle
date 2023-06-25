const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.config.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    static: "./dist",
    historyApiFallback: { index: "/index.html" },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "開發環境",
      template: path.resolve(__dirname, "../index.html"),
    }),
  ],
});