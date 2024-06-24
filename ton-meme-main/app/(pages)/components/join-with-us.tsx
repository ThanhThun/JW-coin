import Heading from '@/app/components/heading';
import MotionDiv from '@/app/components/motion/motion-div';
import Image from 'next/image';
import JoinButton from './join-button';

export default function JoinWithUs() {
  return (
    <div className="relative z-10 flex min-h-screen w-full justify-center bg-[#361E13] py-10">
      <div className="container my-auto">
        <div className="flex w-full flex-wrap items-center gap-10">
          <div className="flex w-full flex-1 shrink flex-col gap-[30px]">
            <MotionDiv
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                repeatDelay: 1,
                ease: 'easeInOut',
              }}
            >
              <Heading>What is JerryMouse Coin (JC)?</Heading>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                repeatDelay: 1,
                ease: 'easeInOut',
              }}
            >
              <p className="text-xl font-medium">
                JerryMouse Coin (JC) focuses on developing a community of people
                who like meme coins, with a vision to build a project that can
                rival existing dog-cat communities. Zero taxes, LP locked, all
                convenience is set up so you can easily have JC in your wallet.
              </p>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                repeatDelay: 1,
                ease: 'easeInOut',
              }}
              className="flex"
            >
              <JoinButton />
            </MotionDiv>
          </div>
          <MotionDiv
            whileInView={{
              rotate: 360,
            }}
            transition={{
              duration: 0.5,
              ease: 'linear',
            }}
            className="relative aspect-square flex-1"
          >
            <Image
              src="/mouse-envelop.png"
              fill
              alt="JerryMouse Coin"
              style={{
                objectFit: 'contain',
              }}
              className="!h-auto"
            />
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}
