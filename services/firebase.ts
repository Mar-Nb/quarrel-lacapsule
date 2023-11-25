import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { firebaseConfig } from './config';
import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp
} from 'firebase/firestore';
import { Channel } from '@/types/Channel';
import { QuarrelUser } from '@/types/QuarrelUser';
import { Message } from '@/types/Message';

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

type ChannelsCallback = (channels: Channel[]) => void;

/**
 * Get all channels from Firestore Database and treat it with a callback.
 * @param callback A function using the channels retrieved from the database.
 * @returns void
 */
export async function getChannels(callback: ChannelsCallback) {
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

export async function sendMessages(
  channelId: string,
  user: QuarrelUser | null,
  text: string
) {
  try {
    await addDoc(collection(db, 'channels', channelId, 'messages'), {
      uid: user?.uid,
      displayName: user?.displayName,
      text: text.trim(),
      timestamp: serverTimestamp()
    });
  } catch (error) {
    console.error(error);
  }
}

type MessagesCallback = (messages: Message[]) => void;

export async function getMessages(
  channelId: string,
  callback: MessagesCallback
) {
  return onSnapshot(
    query(
      collection(db, 'channels', channelId, 'messages'),
      orderBy('timestamp', 'asc')
    ),
    (querySnapshot) => {
      const messages = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        uid: doc.data().uid,
        displayName: doc.data().displayName,
        text: doc.data().text,
        timestamp: doc.data().timestamp
      }));

      callback(messages);
    }
  );
}
