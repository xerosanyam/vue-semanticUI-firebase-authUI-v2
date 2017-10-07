<template>
  <div class="home">
      <br>
      <h2>
          Login
      </h2>
      <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import firebase from 'firebase'
import firebaseui from 'firebaseui'
require('firebaseui/dist/firebaseui.css')
export default {
  name: 'home',
  mounted () {
    console.log('home mounted')
    this.generateFirebaseAuthUI()
  },
  methods: {
    generateFirebaseAuthUI () {
      var vm = this
      const uiConfig = {
        callbacks: {
          signInSuccess: function (currentUser, credential, redirectUrl) {
            // save user credential to firebase if you want to user it later; optional
            return false
          }
        },
        credentialHelper: firebaseui.auth.CredentialHelper.NONE,
        signInFlow: 'popup',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
              // Whether the display name should be displayed in the Sign Up page.
            requireDisplayName: true
          }
        ]
      }

      if (vm.$root.ui !== '') {
        vm.$root.ui.reset()
      } else {
        vm.$root.ui = new firebaseui.auth.AuthUI(firebase.auth())
      }
      vm.$root.ui.start('#firebaseui-auth-container', uiConfig)
    }
  }
}
</script>

<style scoped>

</style>
