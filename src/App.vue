<template>
  <div id="app">
    <MainPage />
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue'

export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style>
/*@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

html, body {
  font-family: 'Roboto', sans-serif;
}*/

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2c1147;
  margin: 0;
  padding: 0;
  height: 100vh;
}
body {
  margin: 0;
}
</style>
