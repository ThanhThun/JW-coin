import MotionDiv from '@/app/components/motion/motion-div';
import { PropsWithChildren } from 'react';

export default function Card({
  label,
  children,
}: PropsWithChildren<{ label: string }>) {
  return (
    <MotionDiv
      initial={{
        opacity: 0,
        y: -32,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        ease: 'easeInOut',
      }}
      className="relative flex h-fit w-full min-w-48 flex-wrap justify-between gap-5 rounded-[20px] bg-[#FFFEF3] p-[30px]"
      style={{
        boxShadow: '0px 8px 0px 0px #F7C36E',
      }}
    >
      <span className="text-2xl font-bold text-black">{label}</span>
      <span className="text-2xl font-semibold text-[#F47C2E]">{children}</span>
    </MotionDiv>
  );
}
