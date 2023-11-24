import ChannelList from './ChannelList';
import CreateChannelForm from './CreateChannelForm';

export default function QuarrelHome() {
  return (
    <>
      <h1 className="text-xl mb-4">Les channels</h1>

      <div className="flex flex-col gap-6">
        <CreateChannelForm />
        <ChannelList />
      </div>
    </>
  );
}
