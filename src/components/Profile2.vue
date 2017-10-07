<template>
  <div class="profile2">
    <h1>This is my second profile</h1>
  </div>
</template>

<script>
export default {
  name: 'profile2',
  mounted () {
    console.log('profile2 mounted')
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
