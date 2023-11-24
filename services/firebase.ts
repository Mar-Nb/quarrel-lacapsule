import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { firebaseConfig } from './config';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = initializeApp(firebaseConfig);

export async function loginWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const { user } = await signInWithPopup(auth, provider);

    return { uid: user.uid, displayName: user.displayName };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.code !== 'auth/cancelled-popup-request') {
      console.error(error);
    }

    return null;
  }
}
