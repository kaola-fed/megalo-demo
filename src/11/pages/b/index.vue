<template>
  <div class="b">
    <Button></Button>
    B
  </div>
</template>

<script>
import Button from '../../../components/button.vue'
export default {
  components: {
    Button,
  }
}
</script>

<style lang="less" scoped>
  .b {
    color: blue;
  }
</style>
