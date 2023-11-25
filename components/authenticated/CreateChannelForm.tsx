'use client';

import { useState } from 'react';
import { createChannel } from '@/services/firebase';

export default function CreateChannelForm() {
  const [channelName, setChannelName] = useState<string>('');

  return (
    <>
      <div className="flex items-center gap-6">
        <span>Nom du channel</span>
        <input
          type="text"
          placeholder="Nom du channel..."
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            channelName && createChannel(channelName);
            setChannelName('');
          }}
        >
          Créer
        </button>
      </div>
    </>
  );
}
