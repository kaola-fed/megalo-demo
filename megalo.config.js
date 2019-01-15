module.exports = {
  // 构件生产模式时的配置（仅在process.env.NODE_ENV === 'production' 时该选项生效）
  build: {
    // 生成分析报告
    bundleAnalyzerReport: false,
    // 生成sourceMap
    sourceMap: false
  },
  configureWebpack: config => {
    // 你可以在这里修改webpack的配置并返回
    return config
  }
}
