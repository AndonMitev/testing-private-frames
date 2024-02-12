'use client';

import { Label } from '@/components/ui/label';
import useProfileQuery from '@/lib/hooks/queries/useProfile';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useSignOutMutation } from '@/lib/hooks/mutations/useAuth';

export default function ProfileCard() {
  const { mutate: signOut } = useSignOutMutation();
  const { data: profile } = useProfileQuery();

  if (!profile) {
    return;
  }

  const handleLogoutClick = () => {
    signOut();
  };

  return (
    <Card className='rounded-lg shadow-md overflow-hidden sm:w-full transition-all duration-300 hover:shadow-lg'>
      <CardContent className='w-full h-full grid justify-center items-center grid-cols-[1fr] p-4 gap-4 break-all text-sky-500'>
        <Label className='font-extrabold'>Hello, {profile.username}</Label>
        <Label className='text-xs'>Bio: {profile.profile.bio.text}</Label>
        <Label className='text-wrap text-xs'>
          Address: {profile.custodyAddress}
        </Label>
        <div className='relative w-full h-[200px] sm:h-[200px]'>
          <Image
            src={profile?.pfp.url}
            alt='frame-image'
            fill
            priority
            className='object-fit'
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className='w-full' onClick={handleLogoutClick}>
          Logout
        </Button>
      </CardFooter>
    </Card>
  );
}
