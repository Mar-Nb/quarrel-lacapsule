import { Timestamp } from 'firebase/firestore';

export type Message = {
  id: string;
  uid: string;
  displayName: string;
  text: string;
  timestamp: Timestamp;
};
