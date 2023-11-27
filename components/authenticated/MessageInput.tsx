import { useAuth } from '@/hooks/useAuth';
import { sendMessages } from '@/services/firebase';
import { ChangeEvent, FormEvent, useState } from 'react';

export default function MessageInput({ channelId }: { channelId: string }) {
  const { user } = useAuth();
  const [value, setValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessages(channelId, user, value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-6">
      <input
        type="text"
        placeholder="Message..."
        value={value}
        onChange={handleChange}
        required
        minLength={1}
        className="w-full"
      />
      <button type="submit" disabled={value.length < 1 || !channelId}>
        Envoyer
      </button>
    </form>
  );
}
