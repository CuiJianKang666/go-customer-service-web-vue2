const { defineConfig } = require('@vue/cli-service')
const { createProxyMiddleware } = require('http-proxy-middleware');
const webpack = require('webpack')

module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  //请求代理
  devServer: {
    proxy: 'http://localhost:8081'
  },
  chainWebpack: config => {
    config.plugin('define').tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      })
      return definitions
    })
    config.plugin('provide').use(webpack.ProvidePlugin, [{
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }])
  }
})

function isStaticResourceRequest(requestPath) {
  const staticExtensions = ['.jpg', '.png', '.css', '.js'];
  return staticExtensions.some(extension => requestPath.endsWith(extension));
}


