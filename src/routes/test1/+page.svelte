<script lang="ts">
  // https://github.com/firebase/firebaseui-webUI
  import type {PageData} from './$types'
  import {signInWithCustomToken} from 'firebase/auth'
  import {getFirestore, collection, getDocs} from 'firebase/firestore/lite'

  import firebase from 'firebase/compat/app'
  import 'firebaseui/dist/firebaseui.css'
  import {auth} from '../../config/firebase.config'

  export let data: PageData

  const handleClick = () => {
  /*
    auth.currentUser.getIdToken()
      .then(authToken => {
        const headers = new Headers({'Authorization': 'Bearer ' + authToken})

        const myUID = {uid: 'current-user-uid'}    // success 200 response
        const notMyUID = {uid: 'some-other-user-uid'} // error 403 response

        return headers
      })
      .then(headers => {
        return fetch('http://localhost:5001/richard/us-central1/alloRichard7', {headers})
      })
      .then(res => res.json())
      .then(data => console.log(data))
     */
  }

</script>

<button on:click={handleClick}>
    Click me
</button>
*/