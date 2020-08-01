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

  export const createUserProfileDocument = async (userAuth,additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    
    if(!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message)
      }
    }
    return userRef
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase