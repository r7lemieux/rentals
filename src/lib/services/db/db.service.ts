// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import type firebase from 'firebase/compat'
// import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, signInAnonymously, onAuthStateChanged} from "firebase/auth"
import {browser} from '$app/environment'

export let db
export let addDoc
export let collection
export let firestore
let app
export const prerender = true


const authChanged = () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
  } else {
    // User is signed out
  }
});
}



