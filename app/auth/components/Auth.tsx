'use client';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { APP_ROUTES } from '@/lib/constants/common';
import {
  useSignOutMutation
  // useSignInMutation
} from '@/lib/hooks/mutations/useAuth';
import useAuthQuery from '@/lib/hooks/queries/useAuth';
import useProfileQuery from '@/lib/hooks/queries/useProfile';
import { SignInButton, StatusAPIResponse } from '@farcaster/auth-kit';
import { useRouter } from 'next/navigation';

export default function Auth() {
  // const { mutate: signIn } = useSignInMutation();
  const { mutate: signOut } = useSignOutMutation();
  const { data: currentUser, isLoading } = useAuthQuery();
  const { refetch } = useProfileQuery();
  const { push } = useRouter();

  const handleSuccessSignIn = async (res: StatusAPIResponse) => {
    await fetch('/api/auth/sign-in', {
      method: 'POST',
      body: JSON.stringify({
        message: res.message,
        nonce: res.nonce,
        signature: res.signature
      })
    });

    push(APP_ROUTES.FRAMES);

    refetch();
  };

  const onSignOut = () => {
    signOut();
  };

  if (isLoading) {
    return <Label>Loading user</Label>;
  }

  return (
    <div>
      {currentUser ? (
        <Button onClick={onSignOut}>Sign Out</Button>
      ) : (
        <SignInButton onSuccess={handleSuccessSignIn} />
      )}
    </div>
  );
}
