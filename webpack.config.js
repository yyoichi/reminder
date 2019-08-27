const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    browserActions: path.join(__dirname, 'src/browserActions/index.tsx'),
    background: path.join(__dirname, 'src/background/index.ts')
  },
  output: {
    path: path.join(__dirname, 'extensions'),
    filename: '[name].js'
  },
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/browserActions/index.html'),
      inject: false
    }),
    new CopyWebpackPlugin([
      { from: path.join(__dirname, 'src/manifest.json'), to: path.join(__dirname, 'extensions/manifest.json') }
    ])
  ]
};
