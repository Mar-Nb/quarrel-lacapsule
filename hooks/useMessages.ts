import { getMessages } from '@/services/firebase';
import { Message } from '@/types/Message';
import { useEffect, useState } from 'react';

export function useMessages(channelId: string) {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const unsubscribe = getMessages(channelId, setMessages).catch((err) =>
      console.error(err)
    );
    return () => {
      unsubscribe;
    };
  }, [channelId]);

  return messages;
}
