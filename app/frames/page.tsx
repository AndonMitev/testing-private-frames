import { QueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/lib/constants/common';
import { fetchFramesFeedAction } from '@/lib/actions/frames';
import FramesFeed from './components/FramesFeed';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frames'
};

export default async function FramesPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.FRAMES_FEED],
    queryFn: () => fetchFramesFeedAction()
  });

  return (
    <main className='p-8'>
      <FramesFeed />
    </main>
  );
}
