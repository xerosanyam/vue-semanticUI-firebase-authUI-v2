import firebase from 'firebase'
export default (to, from, next) => {
  // if someone opens http://localhost:8080/ directly & he is logged in,
  // he will still be able to see the '/' screen, if this code is removed

  // if currentUser code is used, then index page comes for fraction of seconds
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      next({name: 'Profile'})
    } else {
      next()
    }
  })
}
