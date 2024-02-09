import Login from './components/Login';
import Profile from './components/Profile';
import FramesFeed from './components/FramesFeed';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-8'>
      {/* <Profile />
      <Login /> */}
      <FramesFeed />
    </main>
  );
}
