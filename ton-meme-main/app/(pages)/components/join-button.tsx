import { Button, cn } from '@nextui-org/react';
import Link from 'next/link';

export default function JoinButton({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <Button
      as={Link}
      href="/"
      className={cn(
        'relative h-auto w-fit max-w-full overflow-visible rounded-2xl p-0',
        className,
      )}
    >
      <div className="text-foreground size-full h-[62px] truncate rounded-2xl border-4 border-[#FFFEF3] bg-[#F47C2E] px-8 py-3 text-xl font-semibold">
        Join our Discord for Updates
      </div>
      <div className="absolute -bottom-2 -right-2 left-2 top-2 -z-10 rounded-2xl bg-[#F7C36E]"></div>
    </Button>
  );
}
