import { Message } from '@/types/Message';
import { Timestamp } from 'firebase/firestore';

export default function Message({
  message,
  isOwnMessage
}: {
  message: Message;
  isOwnMessage: boolean;
}) {
  // On traite la date comme une donnée potentiellement absente, car une phase de render
  // ne comporte pas cette infos
  const firestoreTimestamp: Timestamp = message?.timestamp;
  const msgDate: Date = firestoreTimestamp?.toDate();
  const formatted = new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(msgDate ?? undefined);

  return (
    <div
      className={`flex flex-col p-2 rounded-lg w-3/4 ${
        isOwnMessage ? 'self-end msg-own' : 'self-start msg-other'
      }`}
    >
      <p className="text-justify">{message.text}</p>
      <span className="text-xs">
        {message.displayName} | {formatted}
      </span>
    </div>
  );
}
