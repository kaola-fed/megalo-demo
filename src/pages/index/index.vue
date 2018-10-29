<template>
  <div class="app">
    <ul class="list">
      <li class="list__item" v-for="item in list">
        <a :url="item.link">{{ item.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mpType: 'page',
  data() {
    return {
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
        }
      ]
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
