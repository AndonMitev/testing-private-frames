'use client';

import { SignInButton, useProfile } from '@farcaster/auth-kit';

export default function Login() {
  const { isAuthenticated } = useProfile();

  return <div>{!isAuthenticated && <SignInButton />}</div>;
}
