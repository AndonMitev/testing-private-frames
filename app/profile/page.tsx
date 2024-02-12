import { fetchProfileAction } from '@/lib/actions/profile';
import { QUERY_KEYS } from '@/lib/constants/common';
import { QueryClient } from '@tanstack/react-query';
import ProfileCard from './components/ProfileCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profile'
};

export default async function ProfilePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.PROFILE],
    queryFn: () => fetchProfileAction()
  });

  return (
    <main className='h-full flex items-center justify-center'>
      <ProfileCard />
    </main>
  );
}
