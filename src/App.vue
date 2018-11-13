<template>
  <div>aaxs</div>
</template>

<script>
  export default {
    mpType: 'app',
    onLaunch() {
      console.log('app onLaunch', this)
    },
    globalData() {
      return {
        a: 100
      }
    }
  }
</script>
