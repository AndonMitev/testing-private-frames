import { Label } from '@/components/ui/label';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Not found'
};

export default function NotFound() {
  return (
    <main className='flex h-[729px] w-[729px] flex-col items-center justify-center gap-16'>
      <section className='flex w-[490px] flex-col items-center justify-center gap-4'>
        <Label className='text-2xl font-medium'>Page not found</Label>
        <Link
          href='/'
          className='w-[180px] cursor-pointer rounded-md bg-sky-500 px-3 py-1 text-center text-base font-medium leading-[35px] text-black'
        >
          Go back home
        </Link>
      </section>
    </main>
  );
}
