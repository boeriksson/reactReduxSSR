const webpack = require('webpack');

module.exports = {
  entry: [
    './client/index.js'
  ],
  devtool: 'source-map',
  output: {
    path: './static/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      'node_modules',
      './static'
    ]
  }
};
