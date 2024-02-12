'use server';

import { cookies, headers } from 'next/headers';
import {
  clearSessionTokenAction,
  getSessionByTokenAction,
  setSessionTokenAction,
  tokenKey
} from './redis';
import { Optional } from '../types/common';

export async function setAuthAction({
  token,
  fid
}: {
  token: string;
  fid: string;
}) {
  cookies().set(tokenKey, token, { secure: true });

  return setSessionTokenAction({ token, fid });
}

export async function getAuthAction(): Promise<Optional<number>> {
  const token = cookies().get(tokenKey)?.value || headers().get(tokenKey);

  if (!token) {
    return null;
  }

  const res = await getSessionByTokenAction({ token });

  const { fid } = res;

  if (!fid) {
    return null;
  }

  return Number(fid);
}

export async function clearAuthAction() {
  const token = cookies().get(tokenKey)?.value || headers().get(tokenKey);

  cookies().delete(tokenKey);

  if (token) {
    await clearSessionTokenAction({ token });
  }
}
