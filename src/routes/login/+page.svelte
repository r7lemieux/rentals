<script lang="ts">
  import Login from '../../components/login/Login.svelte'
  import {auth} from '../../config/firebase.config'

  const user = auth.currentUser
</script>
<div>
  User: {user}
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
