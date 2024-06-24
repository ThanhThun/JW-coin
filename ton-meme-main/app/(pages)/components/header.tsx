import Image from 'next/image';
import JoinButton from './join-button';

export default function Header() {
  return (
    <div className="relative z-50 flex w-full justify-center">
      <div className="container flex flex-wrap items-center gap-5 py-5">
        <Image
          src="/jerry-mouse-coin.png"
          width={224}
          height={48}
          priority
          quality={100}
          alt="JerryMouse Coin"
        />
        <div className="ml-auto hidden sm:block">
          <JoinButton />
        </div>
      </div>
    </div>
  );
}
