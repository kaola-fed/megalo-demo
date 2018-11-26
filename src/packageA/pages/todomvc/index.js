import TodoMVC from './TodoMVC'
import Vue from 'vue'

const app = new Vue( TodoMVC )

app.$mount()

export default {
  config: {
    navigationBarTitleText: 'Megalo TodoMVC',
  }
}
