'use client';

import MotionPath from '@/app/components/motion/motion-path';
import MotionSvg from '@/app/components/motion/motion-svg';

export default function ArrowLeft() {
  return (
    <MotionSvg
      width="141"
      height="127"
      viewBox="0 0 141 127"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <MotionPath
        d="M124.193 1.93635C67.0575 11.081 19.3337 47.7629 17.314 123.116"
        stroke="#F47C2E"
        strokeWidth="3"
        strokeLinecap="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: (i) => {
            const delay = i * 0.5 + 0.5;
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

      <MotionPath
        d="M38.1271 102.326C31.6596 106.555 25.1921 111.53 16.9834 123.718C10.5159 113.022 5.95546 102.823 4.79463 95.3608"
        stroke="#F47C2E"
        strokeWidth="3"
        strokeLinecap="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: (i) => {
            const delay = i * 0.5 + 0.5;
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
        custom={1}
      />
    </MotionSvg>
  );
}
