<script>
  /** @type {import('./$types').PageData} */
  import Login from "../components/login/Login.svelte";
  import {auth} from "../config/firebase.config.js";
  import {user, ready} from "../stores/auth.store";
  import {beforeUpdate, onMount} from "svelte";
  import {initialized} from '../lib/services/db/auth.service'
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app"/>
</svelte:head>

<section>
  <!--  <div style="width:600px; margin: -120px 0 20px -600px;">user:{JSON.stringify(user, null, 2 )}</div>-->
<!--    <h2>user: {$user}</h2>-->
<!--    <h2>name: {$user?.displayName}</h2>-->
<!--    <h2>current user: {auth.currentUser}</h2>-->
<!--    <h2>initialized:  {initialized}</h2>-->
<!--    <h2>ready:  {$ready}</h2>-->
<!--    <h2>ready true:  {$ready === true}</h2>-->

    {#if $ready === true && initialized}
    {#if !$user }
      <Login/>
    {:else}
      <h1>
		<span class="welcome">
		</span>
        Welcome {$user.displayName}
      </h1>
    {/if}
  {/if}

</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.6;
    }

    h1 {
        width: 100%;
    }

    .welcome {
        display: block;
        position: relative;
        width: 100%;
        height: 0;
        padding: 0 0 calc(100% * 495 / 2048) 0;
    }

</style>
