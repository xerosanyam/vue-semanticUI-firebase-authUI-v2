<template>
  <div class="hello">
    <br>
    <h1>{{ msg }}</h1>
    <br>
    <h3>Message from Firebase:</h3>
    <h2>{{message}}</h2>
    <br>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Vuejs</a></li>
      <li><a href="https://semantic-ui.com" target="_blank">Semantic-UI</a></li>
      <li><a href="https://firebase.google.com" target="_blank">Firebase</a></li>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App based on Semantic UI Framework & Firebase',
      message: 'Add CONFIG settings in static/CONSTANTS.js, for firebase to work!'
    }
  },
  mounted () {
    var vm = this
    firebase.database().ref('message').once('value').then(function (snapshot) {
      if (snapshot.val() !== null) {
        vm.message = snapshot.val()
      }
    })
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
