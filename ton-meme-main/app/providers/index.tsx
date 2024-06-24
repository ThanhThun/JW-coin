'use client';

import { NextUIProvider } from '@nextui-org/react';
import TransitionProvider from './transition-provider';

export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <NextUIProvider className="size-full">
      <TransitionProvider>{children}</TransitionProvider>
    </NextUIProvider>
  );
}
