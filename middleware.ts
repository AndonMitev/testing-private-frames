import { NextResponse, type NextRequest } from 'next/server';
import { APP_ROUTES } from './lib/constants/common';

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL(APP_ROUTES.FRAMES, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|fonts|examples|[\\w-]+\\.\\w+).*)']
};
