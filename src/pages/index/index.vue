<template>
  <div class="app">
    <ul class="list">
      <li class="list__item" v-for="(item, index) in list" :key="index">
        <a :url="item.link">{{ item.text }}</a>
      </li>
    </ul>

    globalData:{{globalData}}
  </div>
</template>

<script>
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
          link: '/pages/v-model/index',
          text: 'v-model',
        },
        {
          link: '/pages/vuex/index',
          text: 'vuex',
        },
        {
          link: '../../packageA/pages/a/index',
          text: 'packageA-a',
        }
      ]
    }
  },
  created() {
    var appInstance = getApp()
    this.globalData = appInstance.globalData;
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
