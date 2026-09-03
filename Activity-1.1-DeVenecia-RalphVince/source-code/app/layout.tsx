import type { Metadata, Viewport } from 'next';
import './globals.css';
import { HeaderNavigation } from '@/components/organisms/HeaderNavigation';
import { Footer } from '@/components/organisms/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://ralphvince1028-arch.github.io/pangasinan-heritage-showcase'),
  title: {
    default: 'Pangasinan Heritage & Tourism Digital Showcase',
    template: '%s | Pangasinan Tourism',
  },
  description:
    'Discover the natural wonders, historic monuments, and living cultural heritage of Pangasinan—from Hundred Islands to Cape Bolinao Lighthouse and Mount Balungao Springs.',
  keywords: [
    'Pangasinan',
    'Pangasinan Tourism',
    'Hundred Islands National Park',
    'Cape Bolinao Lighthouse',
    'Balungao Hot Spring',
    'Pangasinan Heritage',
    'Philippine Tourism',
    'Northern Luzon',
  ],
  authors: [{ name: 'Pangasinan Provincial Tourism Office' }],
  openGraph: {
    title: 'Pangasinan Heritage & Tourism Digital Showcase',
    description:
      'Experience the coastal wonders, historic monuments, and living heritage of Pangasinan.',
    url: 'https://ralphvince1028-arch.github.io/pangasinan-heritage-showcase',
    siteName: 'Pangasinan Heritage Digital Showcase',
    locale: 'en_PH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pangasinan Heritage & Tourism Digital Showcase',
    description:
      'Discover the natural wonders, historic monuments, and living cultural heritage of Pangasinan.',
  },
};

export const viewport: Viewport = {
  themeColor: '#182A35',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <HeaderNavigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
