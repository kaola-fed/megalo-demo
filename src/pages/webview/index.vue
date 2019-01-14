<template>
  <div class="app">
    <web-view :src="url"></web-view>
  </div>
</template>

<script>

const urls = {
  alipay: 'https://render.alipay.com/p/s/web-view/index',
  swan: 'https://baidu.com/',
  wechat: 'https://mp.weixin.qq.com/'
}

export default {
  data () {
    return {
      url: ''
    }
  },
  created () {
    const { platform } = this.$mp
    this.url = urls[platform]
  }
}
</script>

<style lang="less" scoped>
</style>
