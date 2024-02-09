import { CircleUser, Layers3 } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='grid grid-cols-2 sticky bottom-0 bg-zinc-900 bg-opacity-90 backdrop-blur-xl backdrop-filter p-4 md:hidden rounded-t-lg'>
      <Link href='/'>
        <Layers3 className='text-primary mx-auto' />
      </Link>
      <Link href='/profile'>
        <CircleUser className='text-primary mx-auto' />
      </Link>
    </footer>
  );
}
