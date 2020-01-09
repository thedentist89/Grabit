import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDomGogRhIdJKCMLkOdWSOgODioOHM4KMw',
  authDomain: 'grabit-a3def.firebaseapp.com',
  databaseURL: 'https://grabit-a3def.firebaseio.com',
  projectId: 'grabit-a3def',
  storageBucket: 'grabit-a3def.appspot.com',
  messagingSenderId: '619099806044',
  appId: '1:619099806044:web:b7944e6d09ec85410ac999'
}
// Initialize Firebase
firebase.initializeApp(config)

export const firestore = firebase.firestore()
export const auth = firebase.auth()
export const provider = new firebase.auth.FacebookAuthProvider()
export const signInWithFacebook = () => auth.signInWithPopup(provider)
export const signOut = () => auth.signOut()

export default firebase
