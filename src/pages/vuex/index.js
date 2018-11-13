import Vue from 'vue'
import App from './Counter.vue'

const app = new Vue( App )

app.$mount()

export default {
  config: {
    usingComponents: {

    }
  }
}
