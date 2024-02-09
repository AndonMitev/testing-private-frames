'use client';

import { SignInButton, useProfile } from '@farcaster/auth-kit';

export default function Login() {
  const handleSuccess = () => {
    console.log('success');
  };

  const handleError = () => {
    console.log('error');
  };

  return (
    <div>
      <SignInButton onSuccess={handleSuccess} onError={handleError} />
    </div>
  );
}
