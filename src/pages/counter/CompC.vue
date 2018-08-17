<template>
  <div class="c" @click="onClick($event)">
   {{ message }} 
   <div>
    <slot></slot>
   </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: 'CompC'
    }
  },
  methods: {
    onClick(e) {
      this.$emit('click', {
        sender: this,
        comp: 'C',
        e
      })
    }
  }
}
</script>

<style lang="css">
</style>
