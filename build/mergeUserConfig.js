const fs = require('fs')
const merge = require('webpack-merge')
const { contextDir } = require('./util')

const defaultConfig = {
  bundleAnalyzerReport: false
}

/** 合并用户修改后的webpack配置 */
exports.mergeUserConfig = (webpackBaseConfig) => {
  const userConfigPath = contextDir + '/megalo.config.js'
  if (fs.existsSync(userConfigPath)) {
    const userConfig = require(userConfigPath)
    if (!userConfig) return
    Object.assign(defaultConfig, userConfig)

    if (defaultConfig.bundleAnalyzerReport === true) {
      const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
      webpackBaseConfig.plugins.push(new BundleAnalyzerPlugin())
    }

    // 合并用户自定义webpack配置
    if (typeof defaultConfig.configureWebpack === 'function') {
      const returnConfig = defaultConfig.configureWebpack(webpackBaseConfig)
      // 若没有直接修改传入进去的配置，而是返回了一个新的配置对象，就merge处理
      if (returnConfig && returnConfig !== webpackBaseConfig) {
        webpackBaseConfig = merge(webpackBaseConfig, returnConfig)
      }
    }
  }
}
