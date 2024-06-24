import { cn } from '@nextui-org/react';
import { PropsWithChildren } from 'react';
import { browoodFont } from '../fonts';

export default function Heading({
  children,
  stroke = '#850400',
  color = '#fff',
  shadow = '#EE883D',
}: PropsWithChildren<{ stroke?: string; color?: string; shadow?: string }>) {
  return (
    <h2
      className={cn('text-[52px]', browoodFont.className)}
      style={{
        textShadow: `0px 4px 4px ${shadow}`,
        WebkitTextStrokeWidth: 2.5,
        WebkitTextStrokeColor: stroke,
        lineHeight: '57.6px',
        color,
      }}
    >
      {children}
    </h2>
  );
}
