var fs = require('fs');

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var ejs = require('ejs');
var template = ejs.compile(fs.readFileSync(__dirname + '/src/template.html', 'utf-8'));

var config = {
  entry: './src/index.js',

  output: {
    filename: 'index.js',
    path: 'dist',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new StaticSiteGeneratorPlugin('main', ['/'], {
      template: template
    })
  ]
};

module.exports = config;
