const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const PnpWebpackPlugin = require('pnp-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  resolve: {
    plugins: [
      PnpWebpackPlugin,
    ],
  },
  resolveLoader: {
    plugins: [
      PnpWebpackPlugin.moduleLoader(module),
    ],
  },
  mode: 'development',
  target: 'electron-renderer'
};