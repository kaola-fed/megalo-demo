const createMegaloTarget = require( '@megalo/target' )
const compiler = require( '@megalo/template-compiler' )
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' )
const VueLoaderPlugin = require( 'vue-loader/lib/plugin' )
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { pagesEntry, getSubPackagesRoot } = require('@megalo/entry')
const _ = require( './util' );
const appMainFile = _.resolve('src/index.js')
const CSS_EXT = {
  wechat: 'wxss',
  alipay: 'acss',
  swan: 'css',
};

function createBaseConfig() {
  const platform = process.env.PLATFORM
  const NODE_ENV = process.env.NODE_ENV
  const isDEV = NODE_ENV === 'development'
  console.log('当前编译平台:', platform)
  console.log('环境变量NODE_ENV:', NODE_ENV)
  const cssExt = CSS_EXT[platform]

  return {
    mode: isDEV ? NODE_ENV : 'production',

    target: createMegaloTarget( {
      compiler: Object.assign( compiler, { } ),
      platform,
      htmlParse: {
        templateName: 'octoParse',
        src: _.resolve(`./node_modules/octoparse/lib/platform/${platform}`)
      }
    } ),

    entry: {
      'app': appMainFile,
      ...pagesEntry(appMainFile)
    },

    output: {
      path: _.resolve( `dist-${platform}/` ),
      filename: 'static/js/[name].js',
      chunkFilename: 'static/js/[id].js'
    },
    watch: isDEV,
    devServer: {
      // hot: true,
    },

    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]|megalo[\\/]/,
            name: 'vendor',
            chunks: 'all'
          }
        }
      },
      runtimeChunk: {
        name: 'runtime'
      }
    },

    // devtool: 'cheap-source-map',
    devtool: false,

    resolve: {
      extensions: ['.vue', '.js', '.json'],
      alias: {
        // 'vue': _.resolve('../../megalo-workspace/megalo/dist/megalo.mp.esm'),
        'vue': 'megalo',
        '@': _.resolve('src')
      },
    },

    module: {
      rules: [
        // ... other rules
        {
          test: /\.vue$/,
          use: [
            {
              loader: 'vue-loader',
              options: {}
            }
          ]
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        },
        {
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'less-loader',
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
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
      new CopyWebpackPlugin( [ {
        context: `src/native/${platform}/`,
        from: `**/*`,
        to: _.resolve( `dist-${platform}/native` )
      } ], {} )
    ]
  }
}

module.exports = createBaseConfig
