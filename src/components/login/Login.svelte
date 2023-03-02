<script>
  // https://firebase.google.com/docs/auth/web/firebaseui
  // import {getAuth, signInWithCustomToken} from 'firebase/auth'
  // import {initializeApp} from 'firebase/app'
  // import {getFirestore, collection, getDocs} from 'firebase/firestore/lite'
  import firebase from 'firebase/compat/app'
  import 'firebaseui/dist/firebaseui.css'
  import {onMount} from 'svelte'
  import {config} from '../../config/config'
  import {browser} from '$app/environment'
  import {debug} from "svelte/internal";
  import {user} from "../../stores/auth.store";
  import {auth} from "../../config/firebase.config.js";

  // const app = initializeApp(firebaseConfig)
  // const db = getFirestore(app)
  // const auth = getAuth({})
  const callback = (res) => {
    console.log(`==>Login.svelte:17 richard-88330.firebaseapp.com`, res)
  }
  export let loggedin = false
  onMount(async () => {
    const firebaseui = await import("firebaseui");

    let uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: (authResult, redirectUrl) => {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          console.log(`==>Login.svelte:30 firebaseui loggedin `, loggedin )
          console.log(`==>Login.svelte:31 firebaseui authResult `, authResult.user)
          user.set(authResult.user)
          return false
        }
      },
      signInSuccessUrl: config.signInSuccessUrl,
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
      ],
      // tosUrl and privacyPolicyUrl accept either url string or a callback
      // function.
      // Terms of service url/callback.
      tosUrl: 'http://localhost:5173/about',
      // Privacy policy url/callback.
      privacyPolicyUrl: function () {
        if (browser) {
          window.location.assign('<your-privacy-policy-url>')
        }
      }
    }

    // Initialize the FirebaseUI Widget using Firebase.
    let ui = new firebaseui.auth.AuthUI(auth)
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig)

    // signInWithCustomToken(auth, token)
    // 		.then((userCredential) => {
    // 			// Signed in
    // 			const user = userCredential.user
    // 			// ...
    // 		})
    // 		.catch((error) => {
    // 			const errorCode = error.code
    // 			const errorMessage = error.message
    // 			// ...
    // 		})
  })
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app"/>
  <script src="https://www.gstatic.com/firebasejs/9.13.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.13.0/firebase-auth-compat.js"></script>
  <!-- *******************************************************************************************
     * TODO(DEVELOPER): Paste the initialization snippet from this dialog box:
     * Firebase Console > Project Settings > Add App > Web.
     ***************************************************************************************** -->
  <script src="https://www.gstatic.com/firebasejs/ui/6.0.2/firebase-ui-auth.js"></script>
  <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/6.0.2/firebase-ui-auth.css"/>

</svelte:head>

<div id="firebaseui-auth-container"></div>

