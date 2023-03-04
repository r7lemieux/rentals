// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import { redirect } from '@sveltejs/kit';
/** @type {import('./$types').PageLoad} */
import {auth} from '../config/firebase.config'
import {ready, user} from '../stores/auth.store'
import {get} from 'svelte/store'
import {resetInitialized} from '$lib/services/db/auth.service'

export const prerender = true;
 export const load = () => {
   // resetInitialized()
   ready.set(true)
 }