import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { firebaseConfig } from './config';
import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
  orderBy,
  query
} from 'firebase/firestore';
import { Channel } from '@/types/Channel';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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

/**
 * Create a new channel in Firestore Database with the name given.
 * @param name Name of the channel
 */
export async function createChannel(name: string) {
  try {
    await addDoc(collection(db, 'channels'), { name });
    console.info('Channel created');
  } catch (error) {
    console.error('Create channel error:', error);
  }
}

type Callback = (channels: Channel[]) => void;

export async function getChannels(callback: Callback) {
  return onSnapshot(
    query(collection(db, 'channels'), orderBy('name', 'asc')),
    (querySnapshot) => {
      const channels = querySnapshot.docs.map((channel) => ({
        id: channel.id,
        name: channel.data().name
      }));

      callback(channels);
    }
  );
}
