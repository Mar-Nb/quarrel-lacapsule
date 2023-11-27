import { useAuth } from '@/hooks/useAuth';
import { useMessages } from '@/hooks/useMessages';
import { useLayoutEffect, useRef } from 'react';
import Message from './Message';

export default function MessageList({ channelId }: { channelId: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { user } = useAuth();
  const messages = useMessages(channelId);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  });

  return (
    <div
      className="flex flex-col gap-2 rounded-xl msg-list p-3 max-h-80 overflow-y-auto"
      ref={ref}
    >
      {!channelId && <div>Sélectionner un channel</div>}

      {channelId && !messages.length && (
        <div>Aucun message dans ce channel</div>
      )}

      {messages.length > 0 &&
        messages.map((msg) => (
          <Message
            key={msg.id}
            message={msg}
            isOwnMessage={msg.uid === user?.uid}
          />
        ))}
    </div>
  );
}
