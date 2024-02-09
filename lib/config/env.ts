import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NEYNAR_API_KEY: z.string()
  },
  client: {
    NEXT_PUBLIC_APP_DOMAIN: z.string(),
    NEXT_PUBLIC_APP_BASE_URL: z.string().url()
  },
  runtimeEnv: {
    NEYNAR_API_KEY: process.env.NEYNAR_API_KEY,
    NEXT_PUBLIC_APP_DOMAIN: process.env.NEXT_PUBLIC_APP_DOMAIN,
    NEXT_PUBLIC_APP_BASE_URL: process.env.NEXT_PUBLIC_APP_BASE_URL
  }
});
