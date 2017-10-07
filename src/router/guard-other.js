import firebase from 'firebase'
export default (to, from, next) => {
// if someone opens http://localhost:8080/#/profile directly & he is logged out,
// he will still be able to see the screen, if this code is removed
  if (firebase.auth().currentUser) {
    next()
  } else {
    next({name: 'Home'})
  }
}
