import App from './App'
import Vue from 'vue'
import VHtmlPlugin from '@megalo/vhtml-plugin'

Vue.use(VHtmlPlugin)

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
    ],
    subPackages: [
      {
          root: 'packageA',
          pages: ['pages/a/index']
      }
    ],
  }
}