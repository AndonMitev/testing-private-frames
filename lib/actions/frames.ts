'use server';

import { Frame } from '@neynar/nodejs-sdk/build/neynar-api/v2';
import { neynarClient } from '../config/neynar';
import { Optional } from '../types/common';

export async function fetchFramesFeedAction(
  limit = 10
): Promise<Optional<Frame>[]> {
  const response = await neynarClient.fetchFramesOnlyFeed({ limit });

  return response.casts.map((cast) => cast.frames).flat();
}
