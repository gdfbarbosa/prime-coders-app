// module.exports = {
//   transpileDependencies: ["vuetify"],
// };

process.env.VUE_APP_PORT = process.env.PORT || 8080;

module.exports = {
  pluginOptions: {
    i18n: {
      locale: "pt-BR",
      fallbackLocale: "pt-BR",
      localeDir: "locales",
      enableInSFC: true
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData:
          '@import "~@/assets/scss/global.scss"; @import "~@/assets/fonts/font.scss";'
      }
    }
  },
  transpileDependencies: ["vuetify"],
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule.use("html-loader").loader("html-loader");
  },
  configureWebpack: {
    devtool: "source-map",
    resolve: {
      extensions: ['*', '.js', '.vue', '.json']
    }
  }
};
