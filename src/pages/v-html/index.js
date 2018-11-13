import VHtml from './VHtml.vue'
import Vue from 'vue'

const app = new Vue( VHtml )

app.$mount()

export default {
  config: {
    usingComponents: {

    }
  }
}
