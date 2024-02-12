import { getAuthAction } from '@/lib/actions/auth';
import { APP_ROUTES } from '@/lib/constants/common';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

type ProfileLayoutProps = {
  children: ReactNode;
};

export default async function ProfileLayout({ children }: ProfileLayoutProps) {
  const auth = await getAuthAction();

  if (!auth) {
    redirect(APP_ROUTES.AUTH);
  }

  return <main>{children}</main>;
}
