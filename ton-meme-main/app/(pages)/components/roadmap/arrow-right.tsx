'use client';

import MotionPath from '@/app/components/motion/motion-path';
import MotionSvg from '@/app/components/motion/motion-svg';

export default function ArrowRight() {
  return (
    <MotionSvg
      width="142"
      height="127"
      viewBox="0 0 142 127"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <MotionPath
        d="M17.56 1.84602C74.6958 10.9906 122.42 47.6725 124.439 123.026"
        stroke="#F47C2E"
        strokeWidth="3"
        strokeLinecap="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: (i) => {
            const delay = i * 0.5;
            return {
              pathLength: 1,
              opacity: 1,
              transition: {
                pathLength: {
                  delay,
                  type: 'spring',
                  duration: 1.5,
                  bounce: 0,
                },
                opacity: { delay, duration: 0.01 },
              },
            };
          },
        }}
        transition={{
          ease: 'easeInOut',
          repeatDelay: 1,
        }}
        whileInView="visible"
        initial="hidden"
        custom={0.25}
      />
      <MotionPath
        d="M103.626 102.236C110.094 106.464 116.561 111.439 124.77 123.628C131.237 112.932 135.798 102.733 136.959 95.2705"
        stroke="#F47C2E"
        strokeWidth="3"
        strokeLinecap="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: (i) => {
            const delay = i * 0.5;
            return {
              pathLength: 1,
              opacity: 1,
              transition: {
                pathLength: {
                  delay,
                  type: 'spring',
                  duration: 1.5,
                  bounce: 0,
                },
                opacity: { delay, duration: 0.01 },
              },
            };
          },
        }}
        transition={{
          ease: 'easeInOut',
          repeatDelay: 1,
        }}
        whileInView="visible"
        initial="hidden"
        custom={0.5}
      />
    </MotionSvg>
  );
}
