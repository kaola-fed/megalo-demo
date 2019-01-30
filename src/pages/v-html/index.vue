<template>
  <div class="app">
    <div v-html="html"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      html: `
        <img src="//pop.nosdn.127.net/e2170dcf-efd0-4906-9da9-3a9900e52b39"><br/>
        <img src="//pop.nosdn.127.net/929408c3-7a72-44d2-9b11-8d5c6ea98dbb"><br/>
        <span>
          <span>test</span><br/><span>test2</span>
        </span>
      `
    }
  },
  created () {
  }
}
</script>

<style lang="less" scoped>
</style>
