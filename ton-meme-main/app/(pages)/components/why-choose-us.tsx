import MotionDiv from '@/app/components/motion/motion-div';
import Image from 'next/image';

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="flex min-h-screen w-full justify-center overflow-hidden pb-10"
    >
      <div className="container my-auto py-10">
        <div className="grid-cols-fit-64 grid w-full gap-10">
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.25,
              ease: 'easeInOut',
              duration: 0.5,
            }}
          >
            <Card header="Exclusive NFTs" src="/nft-card.png">
              Own these NFTs to access our various use cases in our Ton
              Ecosystem
            </Card>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              ease: 'easeInOut',
              duration: 0.5,
            }}
          >
            <Card header="Don’t miss this token again!" src="/money-card.png">
              Stay with us, an airdrop campaign for the JerryMouse Coin is
              preparing with a 24 quadrillion tokens.
            </Card>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.75,
              ease: 'easeInOut',
              duration: 0.5,
            }}
          >
            <Card header="Unleash the Fun" src="/happy-card.png">
              The coin is completely useless and for entertainment purposes only
            </Card>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}

const Card = ({
  src,
  header,
  children,
}: {
  src: string;
  header: string;
  children: string;
}) => {
  return (
    <div
      className="relative"
      style={{
        aspectRatio: 396 / 487,
      }}
    >
      <div className="absolute inset-0 z-10 flex flex-col gap-6 pt-[20%]">
        <p className="pl-[14%] pr-[12%] text-center">{children}</p>
        <h4 className="w-full flex-1 pl-[14%] pr-[12%] text-center text-[40px] font-extrabold text-[#F9FB25]">
          {header}
        </h4>
      </div>
      <Image
        src={src}
        priority
        fill
        quality={100}
        alt="NFT"
        className="!h-auto !w-full"
        style={{
          objectFit: 'contain',
        }}
      />
    </div>
  );
};
