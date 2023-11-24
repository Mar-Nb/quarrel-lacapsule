import { Channel } from '@/types/Channel';
import styles from './ChannelItem.module.css';

export default function ChannelItem({
  channel,
  isActive,
  onClick
}: {
  channel: Channel;
  isActive: boolean;
  onClick: () => void;
}) {
  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <span
      className={`p-3 ${styles.item} hover:opacity-75 cursor-pointer ${
        isActive && 'border-4 border-white'
      }`}
      onClick={onClick}
    >
      {capitalize(channel.name)}
    </span>
  );
}
