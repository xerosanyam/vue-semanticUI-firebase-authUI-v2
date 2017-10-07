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
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created () {
    var vm = this
    firebase.initializeApp(CONSTANTS.CONFIG)
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        var lastVisited = sessionStorage['lastVisited']
        if (!lastVisited || lastVisited === 'Home') {
          lastVisited = 'Profile'
        }
        console.log('replacing', lastVisited)
        vm.$router.replace({name: lastVisited})
      } else {
        console.log('replacing', 'Home')
        vm.$router.replace({name: 'Home'})
      }
    })
  }
})
