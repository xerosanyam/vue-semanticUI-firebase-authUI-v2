<template>
  <div class="profile ui container">
    <br>
    <h1>{{ msg }}</h1>
    <table class="ui compact table">
      <tr v-for="(value,key) in user">
        <td>{{key}}</td>
        <td>{{value}}</td>
      </tr>
    </table>
    <br>
    <h3>Message from Firebase: {{message}}</h3>
    <br>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Vuejs</a></li>
      <li><a href="https://semantic-ui.com" target="_blank">Semantic-UI</a></li>
      <li><a href="" @click="signOut">SignOut</a></li>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'profile',
  data () {
    return {
      msg: 'You have been authenticated!',
      message: 'Add CONFIG settings in static/CONSTANTS.js, for firebase to work!',
      user: ''
    }
  },
  mounted () {
    console.log('profile mounted')
    var vm = this
    vm.user = firebase.auth().currentUser.providerData[0]
    firebase.database().ref('message').once('value').then(function (snapshot) {
      if (snapshot.val() !== null) {
        vm.message = snapshot.val()
      }
    })
  },
  methods: {
    signOut () {
      firebase.auth().signOut()
    }
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
