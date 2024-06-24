import Heading from '@/app/components/heading';
import MotionDiv from '@/app/components/motion/motion-div';
import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-[calc(100vh-176px)] w-full justify-center pb-20 md:min-h-[calc(100vh-102px)]"
    >
      <div className="container my-auto rounded-2xl">
        <div className="relative w-full">
          <div className="relative z-10 flex size-full flex-wrap justify-center gap-10 rounded-2xl bg-[#FFFEF3] px-2 py-14">
            <div className="flex max-w-2xl flex-1 flex-col gap-10">
              <MotionDiv
                initial={{
                  opacity: 0,
                  y: 32,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  repeatDelay: 1,
                  ease: 'easeInOut',
                }}
              >
                <Heading color="#F47C2E" stroke="#FDD907" shadow="#2F0A00">
                  Welcome to JerryMouse Coin (JC) Community
                </Heading>
              </MotionDiv>
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
                  duration: 1,
                  repeatDelay: 1,
                  ease: 'easeInOut',
                }}
              >
                <p className="text-xl text-black">
                  Welcome to the JerryMouse Coin (JC) community - a gathering
                  place for those who love meme coins and fun. With a spirit of
                  no financial expectations and a goal of community building, JC
                  is a meme coin with a competitive vision compared to current
                  dog-cat communities
                </p>
              </MotionDiv>
            </div>
            <MotionDiv
              initial={{
                scale: 1,
              }}
              whileInView={{
                scale: [1, 0.8, 1.2, 1],
              }}
              transition={{
                times: [0, 0.1, 0.5, 1],
                duration: 1,
                ease: 'easeInOut',
              }}
              className="relative aspect-[1.6] min-w-52 max-w-[616px] flex-1 lg:aspect-[1.3]"
            >
              <Image
                src="/mouse.png"
                fill
                alt="Mouse"
                priority
                quality={100}
                style={{
                  objectFit: 'contain',
                }}
                className="bottom-0 !h-auto"
              />
            </MotionDiv>
          </div>
          <div className="absolute inset-x-0 -bottom-2 top-2 rounded-2xl bg-[#F7C36E]"></div>
        </div>
      </div>
    </section>
  );
}
