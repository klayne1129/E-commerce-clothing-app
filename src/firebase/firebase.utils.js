import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCSP1-pRC9aniiuVumBIqF5_z_ikTfRxiY",
    authDomain: "crwn-db-b82ce.firebaseapp.com",
    databaseURL: "https://crwn-db-b82ce.firebaseio.com",
    projectId: "crwn-db-b82ce",
    storageBucket: "crwn-db-b82ce.appspot.com",
    messagingSenderId: "815324630892",
    appId: "1:815324630892:web:27963779c8355309a7ed49"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase