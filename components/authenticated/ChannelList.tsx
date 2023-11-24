import { useChannels } from '@/hooks/useChannels';
import ChannelItem from './ChannelItem';

export default function ChannelList() {
  const channels = useChannels();

  return (
    <>
      <div className="flex flex-col gap-4">
        {channels.map((channel, i) => (
          <ChannelItem key={i} channel={channel} />
        ))}
      </div>
    </>
  );
}
