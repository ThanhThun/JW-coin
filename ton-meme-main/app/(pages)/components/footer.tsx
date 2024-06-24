import Heading from '@/app/components/heading';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import JoinButton from './join-button';

export default function Footer() {
  return (
    <footer className="mt-20 flex w-full justify-center">
      <div className="container">
        <div className="flex flex-col overflow-hidden rounded-t-xl border-x-2 border-t-2 border-white">
          <div className="relative flex w-full flex-col items-center gap-6 bg-[#F47C2E] px-4 py-10">
            <div className="relative z-10 w-full text-center">
              <Heading stroke="#FBBF25">Disclaimer</Heading>
            </div>
            <p className="relative z-10 w-full max-w-3xl px-4 text-center">
              $JC is a meme coin with no intrinsic value or expectation of
              financial return. There is no formal team or roadmap. The coin is
              completely useless and for entertainment purposes only.
            </p>
            <div className="relative z-10 flex w-full justify-center">
              <JoinButton />
            </div>
            <Image
              src="/heart.png"
              width={90}
              height={81}
              className="absolute bottom-10 left-[10%] hidden rotate-[19deg] lg:block"
              alt="heart"
            />
            <Image
              src="/envelop.png"
              width={118}
              height={84}
              className="absolute -bottom-2 right-[10%] hidden rotate-[-24.16deg] lg:block"
              alt="heart"
            />
          </div>
          <div className="flex w-full flex-wrap justify-between gap-10 bg-[#392217] p-10 lg:px-10">
            <Image
              src="/jerry-mouse-coin.png"
              width={224}
              height={48}
              alt="JerryMouse Coin"
            />
            <div className="flex flex-wrap items-center justify-center gap-5">
              <Button
                isIconOnly
                aria-label="Tiktok"
                className="size-8 rounded-full bg-[#F47C2E]"
              >
                <Image src="/tiktok.png" width={16} height={16} alt="tiktok" />
              </Button>
              <Button
                isIconOnly
                aria-label="Telegram"
                className="size-8 rounded-full bg-[#F47C2E]"
              >
                <Image src="/tele.png" width={13} height={11} alt="tiktok" />
              </Button>
              <Button
                isIconOnly
                aria-label="Ig"
                className="size-8 rounded-full bg-[#F47C2E]"
              >
                <Image src="/ig.png" width={17} height={17} alt="tiktok" />
              </Button>
              <Button
                isIconOnly
                aria-label="Discord"
                className="size-8 rounded-full bg-[#F47C2E]"
              >
                <Image src="/discord.png" width={15} height={11} alt="tiktok" />
              </Button>
              <Button
                isIconOnly
                aria-label="Fb"
                className="size-8 rounded-full bg-[#F47C2E]"
              >
                <Image src="/fb.png" width={8} height={17} alt="tiktok" />
              </Button>
              <Button
                isIconOnly
                aria-label="X"
                className="size-8 rounded-full bg-[#F47C2E]"
              >
                <Image src="/x.png" width={15} height={13} alt="tiktok" />
              </Button>
              <Button
                isIconOnly
                aria-label="Youtube"
                className="size-8 rounded-full bg-[#F47C2E]"
              >
                <Image src="/youtube.png" width={17} height={12} alt="tiktok" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
