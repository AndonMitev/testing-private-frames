import { Metadata } from 'next';
import Auth from './components/Auth';

export const metadata: Metadata = {
  title: 'Auth'
};

export default function AuthPage() {
  return (
    <main>
      <Auth />
    </main>
  );
}
