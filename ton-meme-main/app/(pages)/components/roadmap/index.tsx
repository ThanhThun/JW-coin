import Heading from '@/app/components/heading';
import MotionDiv from '@/app/components/motion/motion-div';
import MotionLi from '@/app/components/motion/motion-li';
import { cn } from '@nextui-org/react';
import Image from 'next/image';
import JoinButton from '../join-button';
import ArrowLeft from './arrow-left';
import ArrowRight from './arrow-right';

const Order = ({ order }: { order: number }) => {
  return (
    <h1
      className={cn('textWhite text-[96px] font-bold leading-[96px]')}
      style={{
        textShadow: '0px 4px 4px #EE883D',
        WebkitTextStrokeWidth: 2.5,
        WebkitTextStrokeColor: '#005CFF',
      }}
    >
      {order}
    </h1>
  );
};

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="flex min-h-screen w-full justify-center py-10"
    >
      <div className="container relative flex flex-col gap-20">
        <MotionDiv
          initial={{ opacity: 0, y: -32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeInOut' }}
          className="mx-auto"
        >
          <Heading>Roadmap</Heading>
        </MotionDiv>
        <div className="flex w-full flex-col gap-20">
          <div className="left-2/3 top-[15%] flex w-full flex-col items-center lg:absolute lg:w-1/3">
            <MotionDiv
              className="relative mb-10 w-full"
              style={{
                aspectRatio: 708 / 623,
              }}
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
              }}
            >
              <Image
                fill
                src="/jerry-n-cheese.png"
                alt="JerryMouse Coin"
                style={{
                  objectFit: 'contain',
                }}
                priority
                quality={100}
              />
            </MotionDiv>
            <MotionDiv
              initial={{ y: -32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{}}
              className="mx-auto max-w-full"
            >
              <JoinButton />
            </MotionDiv>
          </div>
          <div className="flex w-full flex-col gap-32 lg:w-2/3">
            <Milestone
              title={roadmap[0].title}
              contents={roadmap[0].contents}
              order={0}
            >
              <div className="absolute left-[100%] top-[100%] hidden lg:block">
                <ArrowRight />
              </div>
            </Milestone>

            <Milestone
              title={roadmap[1].title}
              contents={roadmap[1].contents}
              order={1}
              className="ml-auto"
            >
              <div className="absolute left-0 top-[88%] hidden -translate-x-1/2 lg:block">
                <ArrowLeft />
              </div>
            </Milestone>

            <Milestone
              title={roadmap[2].title}
              contents={roadmap[2].contents}
              order={2}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const roadmap = [
  {
    title: 'Launch & Community Building (Month 1-3)',
    contents: [
      {
        title: 'Resale & Fair Launch',
        description:
          'Conduct a transparent presale and fair launch on decentralized exchanges (DEX) to ensure wide distribution.',
      },
      {
        title: 'Community Building',
        description:
          'Establish a strong community presence on social media platforms like X, Telegram, and Discord.',
      },
      {
        title: 'Meme & Content Creation',
        description:
          'Develop engaging memes, social media content, and mascot illustrations to build brand recognition and humor.',
      },
    ],
  },
  {
    title: 'Exchange Listings & Marketing (Month 4-6)',
    contents: [
      {
        title: 'Decentralized Exchange Listings',
        description:
          'Secure listings on reputable exchanges (Meme DEX) to increase accessibility for a wider audience.',
      },
      {
        title: 'Marketing Campaigns',
        description:
          'Launch targeted marketing campaigns to spread awareness and attract new investors.',
      },
      {
        title: 'Influencer Collaborations',
        description:
          'Partner with relevant social media influencers to promote JerryMouse Coin.',
      },
      {
        title: 'Community Contests & Giveaways',
        description:
          'Host fun contests and giveaways to incentivize community participation and reward loyal holders.',
      },
    ],
  },
  {
    title: 'Utility & Development (Month 7-12)',
    contents: [
      {
        title: 'JC Staking',
        description:
          'Introduce staking functionality for JC holders to earn passive income.',
      },
      {
        title: 'NFT Marketplace Integration',
        description:
          'Develop a platform for users to buy, sell, and trade Jerry Mouse-themed NFTs.',
      },
      {
        title: 'Play-to-Earn Game Development',
        description:
          'Begin development of a simple, community-oriented play-to-earn game that utilizes JC tokens.',
      },
      {
        title: 'Governance Features',
        description:
          'Implement a decentralized autonomous organization (DAO) structure to allow community members to vote on future project decisions.',
      },
    ],
  },
];

const Milestone = ({
  title,
  contents,
  children,
  order,
  className,
}: {
  title: string;
  contents: { title: string; description: string }[];
  children?: React.ReactNode;
  order: number;
  className?: string;
}) => {
  return (
    <div className={cn('relative flex w-full max-w-xl gap-5', className)}>
      <MotionDiv
        initial={{ opacity: 0, y: -32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeInOut' }}
      >
        <Order order={order + 1} />
      </MotionDiv>
      <div className="flex flex-1 flex-col gap-8">
        <MotionDiv
          initial={{ opacity: 0, y: -32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeInOut' }}
          className="w-full break-all"
        >
          <Heading>{title}</Heading>
        </MotionDiv>
        <ul className="list-disc space-y-8 marker:text-[#F4D153]">
          {contents.map(({ title, description }, index) => {
            return (
              <MotionLi
                key={index}
                initial={{ y: -32, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="text-xl font-medium"
                transition={{
                  delay: index * 0.1,
                }}
              >
                <span className="font-semibold text-[#F4D153]">{title}:</span>{' '}
                {description}
              </MotionLi>
            );
          })}
        </ul>
      </div>
      {children}
    </div>
  );
};
