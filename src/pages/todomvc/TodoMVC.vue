<template>
  <div class="app">
    <button @click="onMinus">xx-</button>
    {{ counter }}
    <button @click="onPlus">xxxxx</button>
  </div>
</template>

<script>
export default {
  created() {
    console.log( 'created' )
  },

  data() {
    return {
      counter: 0
    }
  },

  methods: {
    onMinus() {
      this.counter = this.counter - 0
    },

    onPlus() {
      this.counter = this.counter + 2
    },
  }
}
</script>

<style lang="less">

</style>
