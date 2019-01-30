module.exports = {
  // 构件生产模式时的配置（仅在process.env.NODE_ENV === 'production' 时该选项生效）
  build: {
    // 生成分析报告
    bundleAnalyzerReport: false,
    // 生成sourceMap 'none' 或者 'cheap-source-map'
    sourceMap: 'none'
  },
  configureWebpack: config => {
    // 你可以在这里修改webpack的配置并返回
    return config
  },
  // 原生小程序组件存放目录，默认为src/native
  // 如果你有多个平台的原生组件，你应当在此目录下再新建几个子文件夹，我们约定，子文件夹名和平台的名字一致:
  // 微信小程序组件则命名为 'wechat'，支付宝为'alipay', 百度为 'swan'
  // 如果只有一个平台，则无需再新建子文件夹
  nativeDir: '/src/native'
}
