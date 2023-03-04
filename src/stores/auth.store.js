import { writable } from 'svelte/store';
// import {auth} from '../config/firebase.config'
export const user = writable(null);
export const ready = writable(false);
// auth.onAuthStateChanged(currentUSer => {
//   user.set(currentUSer)
//   ready.set(true)
// })
//# sourceMappingURL=auth.store.js.map