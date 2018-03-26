const path = require('path');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = require('./webpack.common');

module.exports = merge(config, {
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false,
              },
            },
            'postcss-loader',
            'sass-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'favicons'),
        to: path.resolve(__dirname, 'dist', 'favicons'),
      },
      {
        from: path.resolve(__dirname, 'favicons', 'favicon.ico'),
        to: path.resolve(__dirname, 'dist'),
      },
      {
        from: path.resolve(__dirname, 'logo'),
        to: path.resolve(__dirname, 'dist', 'logo'),
      },
      {
        from: path.resolve(__dirname, 'photo'),
        to: path.resolve(__dirname, 'dist', 'photo'),
      },
    ]),
  ]
});
