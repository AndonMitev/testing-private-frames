'use client';

import { Label } from '@/components/ui/label';
import { useProfile } from '@farcaster/auth-kit';

export default function Profile() {
  const {
    isAuthenticated,
    profile: { username, fid }
  } = useProfile();

  const labelText = isAuthenticated
    ? `Hello, ${username}! Your fid is: ${fid}`
    : `You're not signed in.`;

  return (
    <div>
      <Label className='text-white'>{labelText}</Label>
    </div>
  );
}
