<template>
  <div class="app">
    <img class="pic" :src="img">
    <img class="pic" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png">
    <img class="pic" src="../../static/megalobox.jpeg">
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      img: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="less">
.pic {
  width: 750rpx;
}
</style>
