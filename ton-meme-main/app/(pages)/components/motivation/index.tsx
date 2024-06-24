import Heading from '@/app/components/heading';
import MyMarquee from '@/app/components/marquee';
import MotionDiv from '@/app/components/motion/motion-div';
import Image from 'next/image';
import MotivationBackground from './background';

export default function Motivation() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <div>
        <MyMarquee />
      </div>
      <div className="relative flex w-full grow flex-col gap-10">
        <Image
          src="/motivation.jpeg"
          fill
          sizes="100vw"
          priority
          quality={100}
          alt="JerryMouse Coin"
          style={{
            aspectRatio: 2117.48 / 1180.93,
            objectFit: 'cover',
          }}
        />
        <MotivationBackground />
        <div className="container flex-1">
          <div className="relative z-10 ml-auto mt-auto flex w-full max-w-[745px] flex-col items-start gap-8 pb-20 md:items-center">
            <MotionDiv
              initial={{ opacity: 0, y: -32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                repeatDelay: 1,
                ease: 'easeInOut',
              }}
            >
              <Heading>Motivation</Heading>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1,
                repeatDelay: 1,
                ease: 'easeInOut',
              }}
            >
              <p className="text-sm text-[#FFFEF3] md:text-center md:text-2xl">
                Dogs and cats have stirred up the crypto market frantically over
                the years. With his intelligence, {"Jerry's"} mouse generation
                will defeat cats and dogs and conquer the market like Jerry did
                in the world-famous cartoon
              </p>
            </MotionDiv>
          </div>
        </div>
      </div>
    </div>
  );
}
