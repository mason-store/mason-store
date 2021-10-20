const path = require('path');
module.exports = {
  lintOnSave: false,
  productionSourceMap: false,

  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },

  chainWebpack: config => {
    config.module.rule('js')
      .include
      .add(path.resolve(__dirname, 'wuxibocomponents')).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options;
      });
    config.resolve.alias
      .set("@", path.resolve(__dirname, 'examples'));
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: []
    }
  }
}
