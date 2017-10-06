<template>
  <div id="app">
    <img src="./assets/logo.png" style="vertical-align:middle;">
    <span style="font-size:40px;margin:auto;">+</span>
    <img src="./assets/semantic.png" style="vertical-align:middle;">
    <span style="font-size:40px;margin:auto;">+</span>
    <img src="./assets/firebase.png" style="vertical-align:middle;">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
