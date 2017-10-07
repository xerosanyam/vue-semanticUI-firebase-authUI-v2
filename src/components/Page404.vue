<template>
  <div class="page404">
    <h1>Page 404</h1>
    <h2>We haven't built that page yet :)</h2>
  </div>
</template>

<script>
export default {
  name: 'page404',
  mounted () {
    console.log('page404 mounted')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
