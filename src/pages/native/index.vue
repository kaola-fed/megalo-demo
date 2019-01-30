<config>
{
  usingComponents: {
    compa: '../../native/compa/index'
  }
}
</config>

<template>
  <div class="app">
    <compa>
      <span :slot="slotName">
        {{ foot }}
      </span>
      <span>{{ body }}</span>
      <span slot="head">
        {{ title }}
      </span>
    </compa>

    注意：「支付宝小程序暂不支持在 template 中使用自定义组件」
  </div>
</template>

<script>

export default {
  data () {
    return {
      slotName: 'foot',
      title: 'hello',
      body: 'world',
      foot: 'megalo'
    }
  }
}
</script>

<style lang="less" scoped>
</style>
