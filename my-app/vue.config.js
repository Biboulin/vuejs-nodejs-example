module.exports = {
    devServer: {
      disableHostCheck: true,
      proxy: {
        '^/api': {
          target: process.env.API_HOST + ':3070',
          changeOrigin: true
        },
      }
    }
  }
