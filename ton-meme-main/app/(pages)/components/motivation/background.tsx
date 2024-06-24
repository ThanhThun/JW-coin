import MotionDiv from '@/app/components/motion/motion-div';
import Image from 'next/image';

export default function MotivationBackground() {
  return (
    <div className="relative flex w-full flex-col ">
      <div className="relative w-full">
        <div
          className="relative left-[-20%] top-10 z-10 w-full sm:left-[10%] sm:top-0 sm:w-1/2 xl:left-[20%] xl:w-1/3"
          style={{ aspectRatio: 697 / 504 }}
        >
          <MotionDiv
            whileInView={{
              rotate: 360,
            }}
            transition={{
              duration: 0.5,
              ease: 'linear',
            }}
            className="relative size-full"
          >
            <Image
              src="/meme-2.png"
              alt="Motivation"
              fill
              className="rotate-[-29.46deg]"
              style={{ objectFit: 'contain' }}
            />
          </MotionDiv>
        </div>

        <div
          className="absolute right-[-20%] top-0 z-10 w-2/3 sm:right-3 sm:w-1/3 md:w-[18%] lg:right-[5%]"
          style={{ aspectRatio: 356 / 272 }}
        >
          <MotionDiv
            whileInView={{
              rotate: 360,
            }}
            transition={{
              duration: 0.5,
              ease: 'linear',
            }}
            className="relative size-full"
          >
            <Image
              src="/meme-4.png"
              alt="Motivation"
              fill
              className="rotate-[9.1deg]"
              style={{ objectFit: 'contain' }}
            />
          </MotionDiv>
        </div>
      </div>

      <div className="relative w-full">
        <div
          className="relative left-[-10%] top-0 z-10 w-2/3 sm:left-0 sm:w-1/3 xl:left-[10%] xl:w-1/4"
          style={{
            aspectRatio: 437 / 333,
          }}
        >
          <MotionDiv
            whileInView={{
              rotate: 360,
            }}
            transition={{
              duration: 0.5,
              ease: 'linear',
            }}
            className="relative size-full"
          >
            <Image
              fill
              src="/meme-1.png"
              alt="Motivation"
              className="rotate-[-24.52deg]"
              style={{ objectFit: 'contain' }}
            />
          </MotionDiv>
        </div>
        <div
          className="absolute -top-1/2 right-[-10%] z-10 w-3/4 sm:right-7 sm:w-1/2 lg:right-[10%] lg:w-1/3"
          style={{ aspectRatio: 506 / 300 }}
        >
          <MotionDiv
            whileInView={{
              rotate: 360,
            }}
            transition={{
              duration: 0.5,
              ease: 'linear',
            }}
            className="relative size-full"
          >
            <Image
              src="/meme-3.png"
              alt="Motivation"
              fill
              className=" rotate-[18.74deg]"
              style={{ objectFit: 'contain' }}
            />
          </MotionDiv>
        </div>
        <div
          className="absolute bottom-0 left-1/2 mx-auto w-[30%] max-w-56 translate-x-0 md:w-[20%] md:-translate-x-1/2"
          style={{ aspectRatio: 286 / 319 }}
        >
          <MotionDiv
            whileInView={{
              rotate: 360,
            }}
            transition={{
              duration: 0.5,
              ease: 'linear',
            }}
            className="relative size-full"
          >
            <Image
              src="/jerry-cheese.png"
              alt="Motivation"
              fill
              className="rotate-[21.59deg]"
              style={{ objectFit: 'contain' }}
            />
          </MotionDiv>
        </div>
      </div>

      <div className="!absolute left-4 top-1/3 z-10 hidden aspect-square w-[5%] lg:block">
        <Image
          src="/earth-left.png"
          alt="Motivation"
          style={{
            objectFit: 'contain',
          }}
          fill
        />
      </div>

      <div className="!absolute right-0 top-20 z-10 hidden lg:block">
        <Image
          src="/earth-right.png"
          alt="Motivation"
          style={{
            objectFit: 'contain',
          }}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
