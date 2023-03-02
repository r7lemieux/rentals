<script>
  import Login from "../components/login/Login.svelte";
  import {auth} from "../config/firebase.config.js";
  import {user} from "../stores/auth.store";
  let loggedin = !$user
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app"/>
</svelte:head>

<section>
<!--  <div style="width:600px; margin: -120px 0 20px -600px;">user:{JSON.stringify(user, null, 2 )}</div>-->
  {#if !$user}
    <Login {loggedin}/>
  {:else}
    <h1>
		<span class="welcome">
		</span>
      Welcome {$user.displayName}
    </h1>
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
