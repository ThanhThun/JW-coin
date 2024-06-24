'use client';
import { ReactLenis } from '@studio-freight/react-lenis';
import { PropsWithChildren } from 'react';

export default function SmoothScrolling({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <ReactLenis root options={{ lerp: 0.2, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
}
