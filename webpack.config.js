var webpack = require('webpack');
var path = require('path');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.jsx',
  output:{
    //path: BUILD_DIR,
    filename: "./dist/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel',
      },
      {
        test:   /\.css$/,
        loader: "style!css!postcss",
      },
      {
        test: /\.svg/,
        loader: 'svg-url-loader?noquotes'
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file',
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      component: path.resolve(APP_DIR, 'components'),
      asset: path.resolve(APP_DIR, 'assets')
    },
  },
  postcss: function() {
    return [precss, autoprefixer];
  },
  devServer: {
      historyApiFallback: true,
      inline:true,
      port: 8080
  }
};

module.exports = config;
