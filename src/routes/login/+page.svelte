<script lang="ts">
  import Login from '../../components/login/Login.svelte'
  import {auth} from '../../config/firebase.config'
  import { getFunctions, httpsCallable } from "firebase/functions";

  const functions = getFunctions();
  let data1, data2, data3, data4, data7
  const alloRichard1 = httpsCallable(functions, 'alloRichard1');
  const alloRichard2 = httpsCallable(functions, 'alloRichard2');
  const alloRichard3 = httpsCallable(functions, 'alloRichard3');
  const alloRichard4 = httpsCallable(functions, 'alloRichard4');
  const alloRichard7 = httpsCallable(functions, 'alloRichard7');
  const callAlloRichard1 = () => {
    alloRichard1({text: "yoyo1"})
      .then((result) => {
        // Read result of the Cloud Function.
        /** @type {any} */
        data2 = result.data;
        console.log(`==>+page.svelte:11 data1`, data2)
      });
  }
  const callAlloRichard2 = () => {
    alloRichard2({text: "yoyo2"})
      .then((result) => {
        // Read result of the Cloud Function.
        /** @type {any} */
        data2 = result.data;
        console.log(`==>+page.svelte:12 data2`, data2)
      });
  }
  const callAlloRichard3 = () => {
    alloRichard3({text: "yoyo3"})
      .then((result) => {
        // Read result of the Cloud Function.
        /** @type {any} */
        data3 = result.data;
        console.log(`==>+page.svelte:13 data3`, data3)
      });
  }
  const callAlloRichard4 = () => {
    alloRichard4({text: "yoyo4"})
      .then((result) => {
        // Read result of the Cloud Function.
        /** @type {any} */
        data4 = result.data;
        console.log(`==>+page.svelte:14 data4`, data4)
      });
  }
  const callAlloRichard7 = () => {
    alloRichard7({text: "yoyo"})
      .then((result) => {
        // Read result of the Cloud Function.
        /** @type {any} */
        data2 = result.data;
        console.log(`==>+page.svelte:17 data`, data2)
      });
  }
  const user = auth.currentUser
</script>
<div>
  <button on:click={callAlloRichard1}>AlloRichard1</button>
  <div>data1 {JSON.stringify(data1, null, 2)}</div>
  <button on:click={callAlloRichard2}>AlloRichard2</button>
  <div>data2 {JSON.stringify(data2, null, 2)}</div>
  <button on:click={callAlloRichard3}>AlloRichard3</button>
  <div>data3 {JSON.stringify(data3, null, 2)}</div>
  <button on:click={callAlloRichard4}>AlloRichard4</button>
  <div>data4 {JSON.stringify(data4, null, 2)}</div>
  <button on:click={callAlloRichard7}>AlloRichard7</button>
  <div>data7 {JSON.stringify(data7, null, 2)}</div>
  <p>User: {user}</p>
  {#if !user}
    <Login></Login>
  {:else}
    Welcome {user.uid} !
  {/if}
</div>
<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app"/>
</svelte:head>
