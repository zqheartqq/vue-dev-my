const path = require('path')

const resolve = p => path.resolve(__dirname, '../', p)

module.exports = {
  vue: resolve('src/platforms/web/entry-runtime-with-compiler'),
  compiler: resolve('src/compiler'),
  core: resolve('src/core'),
  shared: resolve('src/shared'),
  web: resolve('src/platforms/web'), // /Users/admin/Desktop/project/vue-dev/src/platforms/web
  weex: resolve('src/platforms/weex'),
  server: resolve('src/server'),
  sfc: resolve('src/sfc')
}
console.log(path.resolve('/Users/admin/Desktop/project/vue-dev/src/platforms/web', 'entry-runtime-with-compiler.js'))