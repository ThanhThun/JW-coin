import Heading from '@/app/components/heading';
import MyMarquee from '@/app/components/marquee';
import MotionDiv from '@/app/components/motion/motion-div';
import MotionSvg from '@/app/components/motion/motion-svg';
import Image from 'next/image';
import Card from './card';
import Circle from './circle';

export default function Tokenomics() {
  return (
    <section
      id="tokenomics"
      className="relative z-10 flex min-h-screen w-full flex-col items-center bg-[#392217]"
    >
      <MyMarquee />
      <div className="flex w-full flex-col items-center gap-10 py-10 md:py-16 lg:py-20 xl:gap-20 xl:py-[120px]">
        <MotionDiv
          initial={{ opacity: 0, y: -32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            repeatDelay: 1,
            ease: 'easeInOut',
          }}
        >
          <Heading>Tokenomics</Heading>
        </MotionDiv>
        <div className="container w-full grow">
          <div className="flex size-full flex-wrap gap-20">
            <div className="w-full min-w-64 flex-1">
              <div className="relative aspect-square w-full">
                <div className="absolute left-1/2 top-1/2 flex !w-1/4 -translate-x-1/2 -translate-y-1/2 justify-center">
                  <MotionDiv
                    whileInView={{
                      rotate: 360,
                      scale: [0.3, 0.5, 0.75, 1],
                    }}
                    transition={{
                      duration: 0.5,
                      ease: 'linear',
                      times: [0.3, 0.5, 0.75, 1],
                    }}
                  >
                    <Image
                      src="/cheese.png"
                      alt="Jerry mouse coin"
                      width={108.67}
                      height={71.64}
                      style={{ objectFit: 'contain' }}
                    />
                  </MotionDiv>
                </div>
                <MotionSvg
                  width="100%"
                  height="100%"
                  initial="hidden"
                  animate="visible"
                  className="rotate-90"
                >
                  {/* <Circle
                    radius={'23%'}
                    percent={0.05}
                    color="#FF6F6F"
                    delay={0}
                  />
                  <Circle
                    radius={'31%'}
                    percent={0.05}
                    color="#29FFB7"
                    delay={0.5}
                  /> */}
                  <Circle
                    radius={'39%'}
                    percent={0.75}
                    color="#B96BFF"
                    delay={0.75}
                  />
                  <Circle
                    radius={'47%'}
                    percent={0.75}
                    color="#F47C2E"
                    delay={1}
                  />
                </MotionSvg>
                <div
                  className={
                    // "absolute left-1/2 top-[71%] flex w-1/2 flex-col space-y-[8.5%] pl-5"
                    'absolute left-1/2 top-[86.5%] flex w-1/2 flex-col space-y-[8.5%] pl-5'
                  }
                >
                  {/* <span className="3xl:text-2xl  w-full break-words text-[9px] md:text-[10%] lg:text-sm 2xl:text-lg">
                    20% is on SOLANA
                  </span>
                  <span className="3xl:text-2xl  w-full break-words text-[9px] md:text-[10%] lg:text-sm 2xl:text-lg">
                    20% supply is On ETH Chain
                  </span> */}
                  <span className="3xl:text-2xl w-full break-words text-[9px] md:text-[10%] lg:text-sm 2xl:text-lg">
                    100% Liquidity on BNB Chain
                  </span>
                  <span className="3xl:text-2xl  w-full break-words text-[9px] md:text-[10%] lg:text-sm xl:bottom-0 2xl:text-lg">
                    24,000,000,000,000,000 Total Supply
                  </span>
                </div>
              </div>
            </div>
            <div className="hidden w-[1px] bg-white/10 xl:block"></div>
            <div className="flex aspect-square size-full min-w-64 flex-1 flex-col justify-center gap-6 py-10">
              <Card label="Name">JerryMouse Coin</Card>
              <Card label="Symbol">JC</Card>
              <Card label="Supply">24 Quadrillion</Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
