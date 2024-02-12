import { clearAuthAction } from '@/lib/actions/auth';
import { NextResponse } from 'next/server';

export async function POST() {
  await clearAuthAction();
  return NextResponse.json({ success: true });
}
