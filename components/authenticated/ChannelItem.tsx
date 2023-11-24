import { Channel } from '@/types/Channel';
import styles from './ChannelItem.module.css';

export default function ChannelItem({ channel }: { channel: Channel }) {
  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <span className={`p-3 ${styles.item}`}>{capitalize(channel.name)}</span>
  );
}
