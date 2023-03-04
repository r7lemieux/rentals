import type { User } from 'firebase/auth';
import {writable} from 'svelte/store'
import type {Writable} from 'svelte/store'
// import {auth} from '../config/firebase.config'

export const user: Writable<User|null> = writable(null)
export const ready: Writable<boolean> = writable(false)

// auth.onAuthStateChanged(currentUSer => {
//   user.set(currentUSer)
//   ready.set(true)
// })