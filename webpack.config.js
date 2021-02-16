const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
  },

  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: 'React Boilerplate',
      template: path.resolve(__dirname, 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    contentBase: path.resolve(__dirname, './build'),
    port: 9000,
    hot: true,
  },

  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        // Loading css
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        // Loading images
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
