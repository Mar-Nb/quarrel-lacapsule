import { useChannels } from '@/hooks/useChannels';
import ChannelItem from './ChannelItem';
import { useState } from 'react';
import { Channel } from '@/types/Channel';

export default function ChannelList({
  handleSelectChannel
}: {
  handleSelectChannel: (id: string) => void;
}) {
  const channels = useChannels();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number, channel: Channel) => {
    setActiveIndex(index === activeIndex ? null : index);
    handleSelectChannel(channel.id);
  };

  return (
    <>
      <div className="flex flex-col gap-4 w-1/4">
        {channels.map((channel, i) => (
          <ChannelItem
            key={i}
            channel={channel}
            isActive={i === activeIndex}
            onClick={() => handleItemClick(i, channel)}
          />
        ))}
      </div>
    </>
  );
}
