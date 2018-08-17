<template>
  <div class="b">
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
      default: 'CompB'
    }
  }
}
</script>

<style lang="css">
</style>
