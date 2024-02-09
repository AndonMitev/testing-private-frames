import { env } from '../config/env';
import { NeynarAPIClient } from '@neynar/nodejs-sdk';

export const neynarClient = new NeynarAPIClient(env.NEYNAR_API_KEY);
