import { useChannels } from '@/hooks/useChannels';
import ChannelItem from './ChannelItem';
import { useState } from 'react';

export default function ChannelList() {
  const channels = useChannels();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <div className="flex flex-col gap-4 w-1/4">
        {channels.map((channel, i) => (
          <ChannelItem
            key={i}
            channel={channel}
            isActive={i === activeIndex}
            onClick={() => handleItemClick(i)}
          />
        ))}
      </div>
    </>
  );
}
