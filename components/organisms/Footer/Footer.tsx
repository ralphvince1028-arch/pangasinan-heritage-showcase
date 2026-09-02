import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { assetPath } from '@/utils/assetPath';
import { Icon } from '@/components/atoms/Icon';
import styles from './Footer.module.css';

export interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`${styles.footer} ${className}`} role="contentinfo">
      <div className="container">
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <div className={styles.brandHeader}>
              <Image
                src={assetPath('/images/pangasinan-logo.png')}
                alt="Pangasinan Tourism Logo"
                width={36}
                height={36}
                className={styles.logoImage}
              />
              <span className={styles.brandName}>PROVINCE OF PANGASINAN</span>
            </div>
            <p className={styles.brandDesc}>
              The Pangasinan Heritage Digital Showcase is an academic platform developed for the Pangasinan Provincial Tourism Office to promote cultural preservation, eco-tourism awareness, and accessible digital heritage discovery.
            </p>
            <div className={styles.badge}>
              <Icon name="shield" size="xs" ariaHidden />
              <span>WCAG 2.1 AA Compliant &bull; Mobile-First Architecture</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Showcase Navigation</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/" className={styles.link}>
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/heritage" className={styles.link}>
                  Explore Destinations
                </Link>
              </li>
              <li>
                <Link href="/design-system" className={styles.link}>
                  Atomic Design System
                </Link>
              </li>
              <li>
                <Link href="/heritage/hundred-islands" className={styles.link}>
                  Hundred Islands
                </Link>
              </li>
              <li>
                <Link href="/heritage/bolinao-lighthouse" className={styles.link}>
                  Bolinao Lighthouse
                </Link>
              </li>
              <li>
                <Link href="/heritage/balungao-hot-spring" className={styles.link}>
                  Balungao Hot Spring
                </Link>
              </li>
            </ul>
          </div>

          {/* Municipalities & Heritage Sites */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Featured Municipalities</h3>
            <ul className={styles.linkList}>
              <li className={styles.link}>
                <Icon name="map-pin" size="xs" color="var(--color-secondary)" ariaHidden />
                <span>Alaminos City (Hundred Islands)</span>
              </li>
              <li className={styles.link}>
                <Icon name="map-pin" size="xs" color="var(--color-secondary)" ariaHidden />
                <span>Bolinao (Cape Lighthouse &amp; Patar)</span>
              </li>
              <li className={styles.link}>
                <Icon name="map-pin" size="xs" color="var(--color-secondary)" ariaHidden />
                <span>Balungao (Mount Balungao Springs)</span>
              </li>
              <li className={styles.link}>
                <Icon name="map-pin" size="xs" color="var(--color-secondary)" ariaHidden />
                <span>Manaoag (Minor Basilica)</span>
              </li>
              <li className={styles.link}>
                <Icon name="map-pin" size="xs" color="var(--color-secondary)" ariaHidden />
                <span>Lingayen (Provincial Capitol)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>
            &copy; {new Date().getFullYear()} Pangasinan Heritage Digital Showcase. University Activity 1 Submission.
          </p>
          <p>
            Designed with Next.js 14 App Router &amp; Brad Frost&apos;s Atomic Design.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

