import App from './App'
import Vue from 'vue'
import Vuex from 'vuex'
import VHtmlPlugin from '@megalo/vhtml-plugin'

Vue.use(Vuex)
Vue.use(VHtmlPlugin)

const store = require('./store').default
Vue.prototype.$store = store

const app = new Vue( App )

app.$mount()

export default {
  config: {
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    pages: [
      'pages/index/index',
      'pages/todomvc/index',
      'pages/v-model/index',
      'pages/v-html/index',
      'pages/vuex/index',
      'pages/native/index',
      'pages/webview/index',
    ],
    subPackages: [
      {
          root: 'packageA',
          pages: ['pages/a/index']
      }
    ],
  }
}