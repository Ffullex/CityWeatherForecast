<template>
  <div class="WeatherApp">
    <div class="header"> {{msg}}</div>

  </div>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
    msg: String
  },
  data() {
    this.msg = 'Weather'
}
}
</script>

<style lang="scss" scoped>
.header {
  color: palevioletred;
}
</style>
