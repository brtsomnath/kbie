import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import PageLoader from '@/components/PageLoader';
import WhatsAppChat from '@/components/WhatsAppChat';

export const metadata: Metadata = {
  title: 'KB Tech Solution | Professional Network Services in Biratnagar',
  description:
    'KB Tech Solution provides professional network installation, CCTV, VPN, server setup, hardware repair, and IT support services in Biratnagar, Nepal.',
  keywords:
    'network installation, CCTV, VPN, server setup, IT support, Biratnagar, Nepal, MikroTik, Cisco, Sophos',
  metadataBase: new URL('https://kbts.com.np'),
  openGraph: {
    title: 'KB Tech Solution | Professional Network Services',
    description: 'Professional IT & Network Services in Biratnagar, Nepal',
    url: 'https://kbts.com.np',
    siteName: 'KB Tech Solution',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PageLoader />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollObserver />
        <WhatsAppChat />
      </body>
    </html>
  );
}
