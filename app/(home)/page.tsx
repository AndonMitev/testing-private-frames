import Login from './components/Login';
import Profile from './components/Profile';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <Profile />
      <Login />
    </main>
  );
}
