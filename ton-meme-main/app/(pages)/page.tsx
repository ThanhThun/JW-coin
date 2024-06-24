import Image from 'next/image';
import SmoothScrolling from '../components/smooth-scrolling';
import About from './components/about';
import Footer from './components/footer';
import Header from './components/header';
import JoinWithUs from './components/join-with-us';
import Motivation from './components/motivation';
import Roadmap from './components/roadmap';
import Tokenomics from './components/tokenomics';
import WhyChooseUs from './components/why-choose-us';

export default function Home() {
  return (
    <SmoothScrolling>
      <div className="bg-background relative w-full">
        <Header />
        <About />
        <WhyChooseUs />
        <JoinWithUs />
        <Motivation />
        <Tokenomics />
        <Roadmap />
        <Footer />
        <Image
          src="/bg.png"
          priority
          alt="JerryMouse Coin"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
          className="!h-auto w-full"
        />
      </div>
    </SmoothScrolling>
  );
}
