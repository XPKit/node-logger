const config = require('./config')
const { defineConfig } = require('@vue/cli-service')

const serverPort = config.port
const devPort = 10000 + serverPort

module.exports = defineConfig({
  productionSourceMap: process.env.NODE_ENV !== 'production',
  devServer: {
    port: devPort,
    proxy: {
      '^/(bsl|api|config)': {
        target: `http://localhost:${serverPort}`,
        ws: true,
        changeOrigin: true
      },
      '^/bsl/api/getImageFile': {
        target: `http://localhost:${serverPort}`
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
})
