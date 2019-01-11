const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const createMegaloTarget = require( '@megalo/target' )
const compiler = require( '@megalo/template-compiler' )
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' )
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const VueLoaderPlugin = require( 'vue-loader/lib/plugin' )
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { pagesEntry } = require('@megalo/entry')
const { contextDir } = require('./util')
const appMainFile = `${contextDir}/src/index.js`

const CSS_EXT = {
  wechat: 'wxss',
  alipay: 'acss',
  swan: 'css',
}

const cssLoaders = [
  MiniCssExtractPlugin.loader,
  'css-loader'
]

function createBaseConfig() {
  const platform = process.env.PLATFORM
  const NODE_ENV = process.env.NODE_ENV
  const isDEV = NODE_ENV === 'development'
  console.log('当前编译平台:', platform)
  console.log('环境变量NODE_ENV:', NODE_ENV)
  const cssExt = CSS_EXT[platform]

  const webpackBaseConfig = {
    mode: isDEV ? NODE_ENV : 'production',
  
    target: createMegaloTarget( {
      compiler: Object.assign( compiler, { } ),
      platform,
      htmlParse: {
        templateName: 'octoParse',
        src: `${contextDir}/node_modules/octoparse/lib/platform/${platform}`
      }
    } ),

    entry: {
      'app': appMainFile,
      ...pagesEntry(appMainFile)
    },

    output: {
      path:  `${contextDir}/dist-${platform}/` ,
      filename: 'static/js/[name].js',
      chunkFilename: 'static/js/[name].js',
      pathinfo: false
    },
    watch: isDEV,
    devServer: {
      // hot: true,
      progress: isDEV,
      quiet: true
    },

    optimization: {
      noEmitOnErrors: true,
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]|megalo[\\/]/,
            name: 'vendor',
            chunks: 'initial'
          },
          common: {
            name: 'common',
            minChunks: 2
          }
        }
      },
      runtimeChunk: {
        name: 'runtime'
      }
    },
    devtool: isDEV ? 'cheap-source-map' : 'none',

    resolve: {
      extensions: ['.vue', '.js', '.json'],
      alias: {
        'vue': 'megalo',
        '@': `${contextDir}/src`
      }
    },

    module: {
      noParse: /^(vue|vuex)$/,
      rules: [
        {
          test: /\.vue$/,
          use: [
            {
              loader: 'vue-loader',
              options: {
                compilerOptions: {
                  preserveWhitespace: false
                }
              }
            }
          ]
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: cssLoaders
        },
        {
          test: /\.less$/,
          use: [
            ...cssLoaders,
            'less-loader',
          ]
        },
        {
          test: /\.styl(us)?$/,
          use: [
            ...cssLoaders,
            'stylus-loader',
          ]
        },
        {
          test: /\.scss$/,
          use: [
            ...cssLoaders,
            'sass-loader',
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                // TODO 这里有个小bug, static的图片会生成在dist下面的src目录，子包的图片会生成在子包下的src目录，不影响分包策略，仅仅是路径看着有些别扭
                name: '[path][name].[ext]'
              }
            }
          ]
        }
      ]
    },

    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin( {
        filename: `./static/css/[name].${cssExt}`,
      } ),
      new CopyWebpackPlugin([
        {
          context: `src/native/${platform}/`,
          from: `**/*`,
          to: `${contextDir}/dist-${platform}/native`
        }
      ]),
      new webpack.ProgressPlugin(),
      new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your miniprogram application has been compiled successfully`],
          notes: isDEV ? [] :[`The compiled files are in directory dist-${platform}  (*^▽^*) Enjoy it~`]
        },
        onErrors: function (severity, errors) {
          if (severity !== 'error') {
            return
          }
          console.log('(⊙﹏⊙) \n', errors[0].webpackError)
        },
        clearConsole: true,
        additionalFormatters: [],
        additionalTransformers: []
      })
    ]
  }

  if (!isDEV) {
    webpackBaseConfig.optimization.minimizer = [
      new TerserPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: new RegExp(`\\.${cssExt}$`, 'g')
      })
    ]
  }
  
  return webpackBaseConfig
}

module.exports = createBaseConfig
