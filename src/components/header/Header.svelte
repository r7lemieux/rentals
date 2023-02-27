<script>
  import {page} from '$app/stores'
  import logo from '$lib/images/svelte-logo.svg'
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import RiUserUser3Fill from 'svelte-icons-pack/ri/RiUserUser3Fill'
  import {auth} from "../../config/firebase.config.js";
  import Login from "../login/Login.svelte";

  const user = auth.currentUser;

  const logout = () => {
    auth.signOut()
      .then(() => alert('OUT!'))
      .catch(error => alert('Fail to logout ' + error.message))
  }

  let showLoginModal = false
  const login = () => {
    showLoginModal = true
  }

</script>
<header>
  <div class="corner">
    <a href="https://kit.svelte.dev">
      <img src={logo} alt="SvelteKit"/>
    </a>
  </div>
  <nav>
    <ul>
      <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
        <a href="/">Home</a>
      </li>
      <li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
        <a href="/about">About</a>
      </li>
      <li aria-current={$page.url.pathname === '/login' ? 'page' : undefined}>
        <a href="/login">Login</a>
      </li>
    </ul>
  </nav>
  <div class="corner">
    {#if !user}
      <button on:click={logout}>log out</button>
    {:else}
      <button on:click={login}>log in</button>
    {/if}
    <a href="https://github.com/sveltejs/kit">
      <Icon class="header-icon" src={RiUserUser3Fill}/>
    </a>
  </div>
<!--  <div id="loginModal" class="modal" style-=""><Login/></div>-->
</header>
<style lang="sass">
  header
    display: flex
    justify-content: space-between
    background: #4075a6

  .corner
    width: 3em
    height: 3em
    display: flex
    justify-content: flex-end
    align-items: center
    gap: 1em
    margin-right: 1em

    button
      background: transparent
      color: var(--color-text-rev)
      font-family: var(--font-body)
      border: none
      font-weight: 700

    a
      display: flex
      align-items: center
      justify-content: center
      width: 100%
      height: 100%

    img
      width: 2em
      height: 2em
      object-fit: contain

    :global(svg)
      width: 1.8em
      height: 1.8em

  nav
    display: flex
    justify-content: center
    color: #FFEEDD

  //svg
  //  width: 2em
  //  height: 3em
  //  display: block
  //
  //path
  //  fill: var(--background)

  ul
    position: relative
    padding: 0
    margin: 0
    height: 3em
    display: flex
    justify-content: center
    align-items: center
    list-style: none
    background: var(--background)
    background-size: contain

  li
    position: relative
    height: 100%
    color: #FFEEDD

    &[aria-current='page']
      background: var(--color-theme-1)

      &::before
        --size: 10px
        content: ''
        width: 0
        height: 0
        position: absolute
        top: 0
        left: calc(50% - var(--size))
        border: var(--size) solid transparent
        border-top: var(--size) solid var(--color-theme-1)

  nav a
    display: flex
    height: 100%
    align-items: center
    padding: 0 0.5rem
    color: var(--color-text-rev)
    font-weight: 700
    font-size: 1rem
    text-transform: uppercase
    letter-spacing: 0.1em
    text-decoration: none
    transition: color 0.2s linear

  a:hover
    color: var(--color-focus-rev)

</style>