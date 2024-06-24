import { PropsWithChildren } from 'react';

const TransitionProvider = ({ children }: PropsWithChildren) => {
  return <div className="bg-background h-screen w-screen">{children}</div>;
};

export default TransitionProvider;
