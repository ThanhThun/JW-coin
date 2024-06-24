import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export default function MyMarquee() {
  return (
    <Marquee className="flex h-[120px] items-center bg-[#F47C2E]">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Marquee>
  );
}

const Item = () => {
  return (
    <div className="flex h-full items-center gap-5 px-5">
      <span className="text-[40px] font-bold text-[#F9FB25]">
        JerryMouse Coin
      </span>
      <Image
        src="/jerry-cheese.png"
        alt="JerryMouse Coin"
        width={80}
        height={89.3}
        style={{
          objectFit: 'contain',
        }}
      />
    </div>
  );
};
