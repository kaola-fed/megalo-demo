<config>
{
  usingComponents: {

  },
  _wechat: {
    usingComponents: {
      textarea: '../../native/textarea/index'
    }
  }
}
</config>
<template>
  <div class="app">
    <div>
      <p>input: </p>
      <input class="input" v-model.number="value">
      <p>binding: </p>
      <div>{{ value }}</div>
    </div>
    <div>
      <p>textarea: </p>
      <textarea class="textarea" v-model="textAreaValue"></textarea>
      <p>binding: </p>
      <div>{{ textAreaValue }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 'input111',
      textAreaValue: 'text222',
      type: 'number',
      list: [1, 2]
    }
  },
  created () {
  }
}
</script>

<style lang="less" scoped>
  .app {
    font-size: 29px;
  }
  .textarea,
  .input {
    border: 1px solid #e5e5e5;
  }
  .textarea {
    height: 100px;
  }
</style>
