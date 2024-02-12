import { cookies } from 'next/headers';
import { redis } from '../config/redis';

export const tokenKey = 'token';
const ttl = 60 * 60 * 24 * 30;

export async function getCookies() {
  return cookies();
}

interface Session {
  fid?: string;
}

export async function setSessionTokenAction({
  token,
  fid
}: {
  token: string;
  fid: string;
}) {
  return redis.set(`${tokenKey}:${token}`, JSON.stringify({ fid }), 'EX', ttl);
}

export async function clearSessionTokenAction({ token }: { token: string }) {
  return redis.del(`${tokenKey}:${token}`);
}

export async function getSessionByTokenAction({ token }: { token: string }) {
  const session = (await redis.get(`${tokenKey}:${token}`)) ?? '{}';
  return JSON.parse(session) as Session;
}
