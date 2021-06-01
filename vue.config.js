
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

const port = process.env.port || process.env.npm_config_port || 9528 // dev port

module.exports = {
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
  },
  chainWebpack(config) {
    config.module.rules.delete('svg') // 重点:删除默认配置中处理svg,
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(resolve('src/icons')) // 处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/styles/_variables.scss";` //注意：sass-loader@8.0.0之后，要将上面的data替换为prependData
      }
    }
  }
}