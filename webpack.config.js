var fs = require('fs');

var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var ejs = require('ejs');
var template = ejs.compile(fs.readFileSync(__dirname + '/src/template.html', 'utf-8'));

var ROUTES = [
  '/',
  'another-page'
];

var config = {
  entry: {
    client: ['webpack-dev-server/client?http://localhost:8080', './src/client.js'],
    server: './src/server.js'
  },

  output: {
    filename: '[name].bundle.js',
    path: 'dist',
    publicPath: 'http://localhost:8080/',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]-[local]&sourceMap!postcss')
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  },

  postcss: function() {
    return [
      autoprefixer({browsers: ['> 1%', 'last 2 versions', 'IE 9']}),
      precss
    ];
  },

  plugins: [
    new ExtractTextPlugin('bundle.css', {allChunks: true}),
    new StaticSiteGeneratorPlugin('server', ROUTES, {template: template})
  ],

  devtool: 'cheap-module-source-map',

  devServer: {
    contentBase: './dist',
    stats: { colors: true, chunks: false }
  }
};

module.exports = config;
