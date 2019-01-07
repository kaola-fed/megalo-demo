const path = require( 'path' )
const fs = require( 'fs' )
const merge = require('webpack-merge')

function resolve (...args) {
  return path.resolve( __dirname, '../', ...args)
}
/** 合并用户修改后的webpack配置 */
function mergeUserConfig (originConfig) {
  const userConfigPath = process.cwd() + '/megalo.config.js'
  if (fs.existsSync(userConfigPath)) {
    const megaloConfig = require(userConfigPath)
    if (typeof megaloConfig.configureWebpack === 'function') {
      const returnConfig = megaloConfig.configureWebpack(originConfig)
      // 若没有直接修改传入进去的配置，而是返回了一个新的配置对象，就merge处理
      if (returnConfig && returnConfig !== originConfig) {
        originConfig = merge(originConfig, returnConfig)
      }
    }
  }
}

module.exports = {
  resolve,
  mergeUserConfig
}
