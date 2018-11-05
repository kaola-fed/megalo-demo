import VHtml from './VHtml.vue'
import Vue from 'vue'
import VHtmlPlugin from '@megalo/vhtml-plugin'

Vue.use(VHtmlPlugin)

const app = new Vue( VHtml )

app.$mount()

export default {
  config: {
    usingComponents: {

    }
  }
}
