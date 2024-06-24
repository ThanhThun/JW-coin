import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'JerryMouse Coin',
  description: '',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
