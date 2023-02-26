import firebase from 'firebase/compat/app'
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: 'AIzaSyBD5fbuykKm0AZw7qtN_bpXW0fdEsPFbFw',
    authDomain: 'auth.cozycat.cc', //'richard-88330.firebaseapp.com',
    projectId: 'richard-88330',
    storageBucket: 'richard-88330.appspot.com',
    messagingSenderId: '921803178362',
    appId: '1:921803178362:web:90d0b1f6d3513e75f8d6c3',
    measurementId: 'G-4406GDS3PJ'
}

const app = firebase.initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export {app, auth, db}

/*
export const initFirebase = () => {
  // https://github.com/vitejs/vite/issues/2579  does not work
  // https://github.com/firebase/firebase-js-sdk/issues/4846
  if (browser) {
    import('firebase/app').then(firebaseAppImpl => {
      app = firebaseAppImpl.initializeApp(firebaseConfig)
      return import('firebase/firestore')
    })
      .then(fs => {
        db = fs.getFirestore()
        firestore = fs
        addDoc = fs.addDoc
        collection = fs.collection
      })
      .then(() => {
        const auth = getAuth()
        return signInAnonymously(auth)
          // .then(() => {
          //   // Signed in..
          // })
          // .catch((error) => {
          //   const errorCode = error.code
          //   const errorMessage = error.message
          //   // ...
          // })
      })
  } else {
    console.log('Not in browser')
  }

  // app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app)
  // db = getFirestore(app)

  if (browser) {
    // import('firebase/app').then(firebaseAppImpl => {
    //   app = firebaseAppImpl.initializeApp(firebaseConfig)
    //
    // })
    // .then(db1 => {
    //   db = db1
    //   console.log(`==>dbService.ts :34`, db)
    // })
    // } else {
    //   console.log('Not in browser');
  }
}


 */