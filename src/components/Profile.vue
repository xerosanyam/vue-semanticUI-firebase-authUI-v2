<template>
  <div class="profile ui container">
    <div v-show="$root.userSignedIn=='yes'"></div>
    <br>
    <h1>{{ msg }}</h1>
    <table class="ui compact table">
      <tr>
        <td>displayName</td>
        <td>{{$root.user.displayName}}</td>
      </tr>
      <tr>
        <td>photoURL</td>
        <td>{{$root.user.photoURL}}</td>
      </tr>
    </table>
    <br>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Vuejs</a></li>
      <li><a href="https://semantic-ui.com" target="_blank">Semantic-UI</a></li>
      <li><a href="" @click="signOut">SignOut</a></li>
    </ul>
    <div v-show="$root.user=='checking'">
      <h1>Progress bar</h1>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'profile',
  data () {
    return {
      msg: 'You have been authenticated!'
    }
  },
  created () {
    this.$root.$on('loggedOut', this.routeToHome)
  },
  mounted () {
    console.log('profile mounted')
    if (this.$root.userSignedIn === 'no') {
      this.routeToHome()
    }
  },
  methods: {
    signOut () {
      firebase.auth().signOut()
    },
    routeToHome () {
      console.log('route to home')
      this.$router.replace({'name': 'Home'})
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
