<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
console.log('reading app')
export default {
  name: 'app',
  mounted () {
    console.log('mounted App')
  }
}
</script>

<style>
</style>
