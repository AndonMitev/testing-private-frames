import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    REDIS_URL: z.string().url(),
    NEYNAR_API_KEY: z.string()
  },
  client: {
    NEXT_PUBLIC_APP_DOMAIN: z.string(),
    NEXT_PUBLIC_APP_BASE_URL: z.string().url(),
    NEXT_PUBLIC_AUTH_PROVIDER_RPC_URL: z.string().url()
  },
  runtimeEnv: {
    REDIS_URL: process.env.REDIS_URL,
    NEYNAR_API_KEY: process.env.NEYNAR_API_KEY,
    NEXT_PUBLIC_APP_DOMAIN: process.env.NEXT_PUBLIC_APP_DOMAIN,
    NEXT_PUBLIC_APP_BASE_URL: process.env.NEXT_PUBLIC_APP_BASE_URL,
    NEXT_PUBLIC_AUTH_PROVIDER_RPC_URL:
      process.env.NEXT_PUBLIC_AUTH_PROVIDER_RPC_URL
  }
});
