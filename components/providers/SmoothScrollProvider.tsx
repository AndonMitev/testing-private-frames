'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import { ReactNode } from 'react';

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export default function SmoothScrollProvider({
  children
}: SmoothScrollProviderProps) {
  return <ReactLenis root>{children}</ReactLenis>;
}
