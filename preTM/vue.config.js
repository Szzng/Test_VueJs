// const FileManagerPlugin = require('filemanager-webpack-plugin-fixed');


module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  devServer: {
    proxy: 'http://127.0.0.1:8000',
  },

  outputDir: 'dist',
  publicPath: '/',
  assetsDir: 'static',

  // configureWebpack: {
  //   plugins: [
  //     new FileManagerPlugin({
  //       onStart: {
  //         delete: [
  //           '../backend/static/**/',
  //           '../backend/templates/**/',
  //         ],
  //       },

  //       onEnd: {
  //         copy: [
  //           { source: 'dist/static', destination: '../backend/static/' },
  //           { source: 'dist/favicon.ico', destination: '../backend/static/img' },
  //           { source: 'dist/account*.html', destination: '../backend/templates/account' },
  //         ],
  //       },
  //     })
  //   ]
  // },
}