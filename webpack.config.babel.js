const fs = require('fs');

const webpack = require('webpack');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const ejs = require('ejs');
const template = ejs.compile(fs.readFileSync(__dirname + '/src/template.html', 'utf-8'));

const ROUTES = [
  '/',
  'another-page'
];

console.log(
  require('babel!./src/routes/index')
);

const config = {
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
        loader: ExtractTextPlugin.extract('style',
          'css?modules&importLoaders=1&localIdentName=[name]-[local]&sourceMap!postcss')
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
    stats: {colors: true, chunks: false}
  }
};

module.exports = config;
