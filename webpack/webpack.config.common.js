const path = require("path");
const { DefinePlugin } = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const DotenvWebpackPlugin = require('dotenv-webpack');

module.exports = {
  entry: {
    main: path.resolve(__dirname, "../src/main.js"),
  },
  output: {
    publicPath: process.env.BASE_URL,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
    extensions: [".js", ".vue", ".css", ".scss", ".sass"],
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/i,
        include: path.resolve(__dirname, "../src"),
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "swc-loader"
        }
      },
      {
        test: /\.vue$/i,
        include: path.resolve(__dirname, "../src"),
        loader: "vue-loader",
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
  plugins: [
    new DotenvWebpackPlugin(),
    new VueLoaderPlugin(),
    new DefinePlugin({
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_OPTIONS_API__: false,
    }),
  ],
};