'use server';

import { neynarClient } from '../config/neynar';
import { getAuthAction } from './auth';

export async function fetchProfileAction() {
  const fid = await getAuthAction();

  if (!fid) {
    return null;
  }

  const response = await neynarClient.lookupUserByFid(fid);

  return response.result.user;
}
