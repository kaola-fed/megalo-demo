const webpack = require('webpack')
const EnvPlugin = require('@megalo/env-plugin')
const createBaseConfig = require( './createBaseConfig' )

// 这行代码执行后，会在process.env中注入你配置的环境变量，可在后面的nodejs代码中直接使用环境变量
const EnvPluginInstance = new EnvPlugin()
// 创建webpack配置
const config = createBaseConfig()
// 将插件配置到webpack的plugins选项中，在项目中你可以使用你配置的环境变量了
config.plugins.unshift(EnvPluginInstance)
webpack(config, () => {})
