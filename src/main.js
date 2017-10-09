// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

window.$ = window.jQuery = require('jquery')
require('semantic-ui-css/semantic.css')
require('semantic-ui-css/semantic.js')

import firebase from 'firebase'
import CONSTANTS from './assets/js/CONSTANTS'

Vue.config.productionTip = false

/* eslint-disable no-new */
console.log('reading mainjs')
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  beforeCreate () {
    console.log('creating mainjs')
  },
  mounted () {
    console.log('mounted mainjs')
  },
  data () {
    return {
      ui: '',
      user: '',
      userSignedIn: 'checking'
    }
  },
  created () {
    console.log('created mainjs')
    var vm = this
    firebase.initializeApp(CONSTANTS.CONFIG)
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        vm.userSignedIn = 'yes'
        vm.user = user
        vm.$emit('loggedIn')
      } else {
        vm.userSignedIn = 'no'
        vm.user = ''
        vm.$emit('loggedOut')
      }
    })
  }
})
