'use client';
import MotionCircle from '@/app/components/motion/motion-circle';

export default function Circle({
  percent,
  color,
  radius,
  delay,
}: Readonly<{
  percent: number;
  color: string;
  radius: number | string;
  delay: number;
}>) {
  return (
    <>
      <MotionCircle
        cx="50%"
        cy="50%"
        r={radius}
        stroke={color}
        fill="transparent"
        strokeWidth={10}
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: (i) => {
            const delay = i * 0.5;
            return {
              pathLength: percent,
              opacity: 1,
              transition: {
                pathLength: {
                  delay,
                  type: 'spring',
                  duration: 1.5,
                  bounce: 0,
                },
                opacity: { delay, duration: 0.01 },
                ease: 'easeInOut',
              },
            };
          },
        }}
        transition={{
          ease: 'easeInOut',
          repeatDelay: 1,
        }}
        whileInView="visible"
        strokeLinecap="round"
        initial="hidden"
        custom={delay}
      />
      <MotionCircle
        cx="50%"
        cy="50%"
        r={radius}
        strokeWidth={10}
        stroke="#ffffff0d"
        fill="transparent"
        whileInView={{
          pathLength: 0.75,
        }}
        strokeLinecap="round"
      />
    </>
  );
}
