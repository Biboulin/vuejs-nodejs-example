module.exports = {
    disableHostCheck: true,
    devServer: {
      proxy: {
        '^/api': {
          target: process.env.API_HOST + ':3070',
          changeOrigin: true
        },
      }
    }
  }
