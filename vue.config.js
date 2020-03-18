const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('component',resolve('./src/component'))
            .set('layout',resolve('./src/layout'))
            .set('base',resolve('src/base'))
            .set('static',resolve('src/static'))
    },
    css: {
      loaderOptions: {
        scss: {
          prependData: `
            @import "@/assets/css/index.scss";
          `
        },
        postcss: {
          plugins: [
            require('postcss-px2rem')({
              remUnit: 18.75
            })
          ]
        }

      }
    },
    devServer: {
      // host: '192.168.31.165',
      port: 8080,
    },

}


