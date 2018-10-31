import Vue from 'vue'
import store from './store'
import App from './Counter.vue'

Vue.prototype.$store = store

const app = new Vue( App )

app.$mount()

export default {
  usingComponents: {

  }
}
