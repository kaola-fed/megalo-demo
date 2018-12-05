<template>
  <div class="app">
    <ul class="list">
      <li class="list__item" v-for="(item, index) in list" :key="index">
        <a :url="item.link">{{ item.text }}</a>
      </li>
    </ul>

    <div>
      vuex count: {{ $store.state.counter.count }}
    </div>

    <div>
      globalData:{{ globalData }}
    </div>
  </div>
</template>

<script>

(async function() {
  console.log('111')
})()

export default {
  mpType: 'page',
  data() {
    return {
      globalData:{},
      list: [
        {
          link: '/pages/todomvc/index',
          text: 'TodoMVC',
        },
        {
          link: '/pages/v-html/index',
          text: 'v-html',
        },
        {
          link: '/pages/VModel',
          text: 'v-model',
        },
        {
          link: '/pages/vuex/index',
          text: 'vuex',
        },
        {
          link: '/pages/webview/index',
          text: 'web-view',
        },
        {
          link: '/pages/native/index',
          text: '原生自定义组件',
        },
        {
          link: '/packageA/pages/a/index',
          text: 'packageA-a',
        },
        {
          link: '/packageA/pages/todomvc/index',
          text: 'packageA-todomvc',
        },
      ]
    }
  },
  created() {
    var appInstance = getApp()
    this.globalData = appInstance.globalData;
    console.log(this)
  },
  methods: {
    onTouchStart(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  &__item {
    padding: 10px;
    color: blue;
  }
}
</style>
