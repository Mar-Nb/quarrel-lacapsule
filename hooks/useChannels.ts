import { getChannels } from '@/services/firebase';
import { Channel } from '@/types/Channel';
import { useEffect, useState } from 'react';

export function useChannels() {
  const [channels, setChannels] = useState<Channel[]>([]);

  useEffect(() => {
    (async () => {
      await getChannels(setChannels);
    })();
  }, []);

  return channels;
}
