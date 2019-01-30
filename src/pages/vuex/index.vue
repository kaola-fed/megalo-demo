<config lang="json">
{
  navigationBarTitleText: 'vuex',
  usingComponents: {

  }
}
</config>

<template>
  <div id="app">
    Clicked: {{ $store.state.counter.count }} times, count is {{ evenOrOdd }}.
    <button @click="increment()|test()">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    globalData:{{ globalData }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([
    'evenOrOdd'
  ]),
  data () {
    return {
      globalData: {}
    }
  },
  methods: {
    ...mapActions([
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync'
    ]),
    test: function () {
      this.globalData['a']++
    }
  },
  created () {
    var appInstance = getApp()
    this.globalData = appInstance.globalData
  }
}
</script>
