import type { Metadata, Viewport } from 'next';
import './globals.css';
import { HeaderNavigation } from '@/components/organisms/HeaderNavigation';
import { Footer } from '@/components/organisms/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://pangasinan-heritage.local'),
  title: {
    default: 'Pangasinan Heritage Digital Showcase',
    template: '%s | Pangasinan Heritage Digital Showcase',
  },
  description:
    'Explore the heritage, culture, and iconic destinations of Pangasinan through a fast, accessible, and mobile-first digital tourism experience.',
  keywords: [
    'Pangasinan',
    'Pangasinan Tourism',
    'Hundred Islands',
    'Bolinao Lighthouse',
    'Balungao Hot Spring',
    'Pangasinan Heritage',
    'Philippine Tourism',
  ],
  authors: [{ name: 'Pangasinan Provincial Tourism Office' }],
  openGraph: {
    title: 'Pangasinan Heritage Digital Showcase',
    description:
      'Explore the heritage, culture, and iconic destinations of Pangasinan through a fast, accessible, and mobile-first digital tourism experience.',
    url: 'https://pangasinan-heritage.local',
    siteName: 'Pangasinan Heritage Digital Showcase',
    locale: 'en_PH',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#0F4C81',
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
