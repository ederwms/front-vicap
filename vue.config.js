module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title =
          'ViCap - Geração de legendas para vídeos online'
        return args
      })
  },
  devServer: {
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/_variables.scss";
        `
      }
    }
  }
}
