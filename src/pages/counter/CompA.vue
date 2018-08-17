<template>
  <div class="a">
   1 {{ message }}
   <!-- 2 {{ message }}
   <div>3 {{ message }}</div>
   <div>4 {{ message }}</div>
   <div>5 {{ message }}</div>
   <div>6 {{ message }}</div>
   <div>7 {{ message }}</div>
   <div>8 {{ message }}</div> -->
   <CompC :message="'CompC in ' + message"/>
   <div class="default-slot">
      <slot :info="info"></slot>
   </div>
   <div class="body-slot">
     <slot name="body" :list="list">
       compA: default body
     </slot>
   </div>
   <div class="footer-slot">
     <slot name="footer">
       compA: default footer
     </slot>
   </div>
  </div>
</template>

<script>
import CompC from './CompC.vue'

export default {
  components: {
    CompC
  },
  props: {
    message: {
      type: String,
      default: 'CompA'
    }
  },
  data() {
    return {
      info: {
        name: 'homer',
        age: 52
      },
      list: [
        { id: 1, text: 10, info: { name: '163' } },
        { id: 2, text: 20, info: { name: '360' } },
        { id: 3, text: 30, info: { name: 'tencent' } },
        { id: 4, text: 40, info: { name: 'alibaba' } }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
