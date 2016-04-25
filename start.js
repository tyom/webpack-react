// Use Browser Sync because of issues with Webpack HMR and ExtractTextWebpackPlugin
// https://github.com/webpack/extract-text-webpack-plugin/issues/30
// https://github.com/webpack/webpack/issues/1530

const bs = require('browser-sync').create();
const webpack = require('webpack');

webpack(require('./webpack.config'))
  .watch({}, function(err, stats) {
    if (err) {
      console.error('webpack build error');
    } else {
      console.log('webpack build', stats.endTime);

      const changedModules = stats.compilation.modules.filter((module) => {
        return module.built && module.resource;
      });
      const changedStyleModules = changedModules.filter((module) => {
        return module.resource.match(/\.(css|less|sass)$/);
      });
      const hasOnlyStyleChanges = (changedModules.length === changedStyleModules.length);
      if (hasOnlyStyleChanges) {
        bs.reload('*.css');
      } else {
        bs.reload();}
    }
  });

bs.init({
  server: {
    baseDir: './dist'
  },
  open: false
});
