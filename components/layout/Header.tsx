import { Label } from '../ui/label';

export default function Header() {
  return (
    <header className='sticky text-center z-10 top-0 bg-zinc-900 bg-opacity-90 backdrop-blur-xl backdrop-filter p-4 md:hidden rounded-b-lg'>
      <Label className='text-primary'>Top Frames</Label>
    </header>
  );
}
