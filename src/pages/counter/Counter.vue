<template>
  <div class="counter" :class="[ `counter-${counter}` ]" >
    <!-- <button @click="onPlus">+</button> -->
    <!-- <button @click="onMinus">-</button> -->
    <div class="box box-red" :style="{ flex: '0 0 100px'}" style="display: inline-block;"></div>
    <!-- {{ counter | tail }} -->
  </div>
</template>

<script>
import A from './A.vue'

export default {
  mpType: 'page',
  filters: {
    tail(t) {
      return `${t}_tail`
    }
  },
  components: {
    'abc': A,
  },
  created() {
    console.log( 'created' )
  },

  data() {
    return {
      counter: 5
    }
  },

  methods: {
    onMinus() {
      this.counter = this.counter - 1
    },

    onPlus() {
      this.counter = this.counter + 1
    },
  }
}
</script>

<style lang="less" scoped>
  .app {
    font-size: 29px;
  }

  .app .foo {
    color: blue;
  }

  .box.box-red {
    background: red;
  }
</style>

<style lang="css" scoped>
  .app1 {
    font-size: 29px;
  }
</style>
