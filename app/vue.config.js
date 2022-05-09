const { defineConfig } = require('@vue/cli-service')
module.exports = {
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('raw')
      .test(/\.txt$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()
  }
}