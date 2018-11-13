import App from './native'
import Vue from 'vue'

const app = new Vue( App )

app.$mount()


export default {
  config: {
    usingComponents: {
      compa: '../../native/compa/index'
    }
  }
}