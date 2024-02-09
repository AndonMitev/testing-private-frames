'use client';

import '@farcaster/auth-kit/styles.css';
import { AuthKitProvider as NextAuthKitProvider } from '@farcaster/auth-kit';
import { ReactNode } from 'react';
import { env } from '@/lib/config/env';

/**
 * TODO:
 * For a production app, replace this with an Optimism Mainnet
 * RPC URL from a provider like Alchemy or Infura.
 */

const config = {
  rpcUrl: 'https://mainnet.optimism.io',
  domain: env.NEXT_PUBLIC_APP_DOMAIN,
  siweUri: env.NEXT_PUBLIC_APP_BASE_URL
};

type AuthKitProviderProps = {
  children: ReactNode;
};

export default function AuthKitProvider({ children }: AuthKitProviderProps) {
  return <NextAuthKitProvider>{children}</NextAuthKitProvider>;
}
