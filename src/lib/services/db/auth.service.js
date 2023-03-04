import { user, ready } from '../../../stores/auth.store';
import { auth } from '../../../config/firebase.config';
export let initialized = false;
export const resetInitialized = () => initialized = false;
auth.onAuthStateChanged(currentUser => {
    user.set(currentUser);
    initialized = true;
    ready.set(true);
});
//# sourceMappingURL=auth.service.js.map