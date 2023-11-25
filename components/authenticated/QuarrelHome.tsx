import { useState } from 'react';
import ChannelList from './ChannelList';
import CreateChannelForm from './CreateChannelForm';
import MessageInput from './MessageInput';

export default function QuarrelHome() {
  const [channelId, setChannelId] = useState<string>('');

  function handleSelectChannel(id: string) {
    setChannelId(id);
  }

  return (
    <div className="flex flex-col gap-4 h-full">
      <h1 className="text-xl mb-4">Les channels</h1>

      <div className="flex flex-col gap-6 h-full">
        <CreateChannelForm />

        <div className="flex items-start gap-8 h-full mb-4">
          <ChannelList handleSelectChannel={handleSelectChannel} />

          <div className="flex flex-col justify-between self-stretch pt-2 w-3/4 gap-4">
            {!channelId ? <div>Sélectionner un channel</div> : <div></div>}

            <MessageInput channelId={channelId} />
          </div>
        </div>
      </div>
    </div>
  );
}
