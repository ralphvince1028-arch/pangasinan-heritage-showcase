import React from 'react';
import Link from 'next/link';
import { Typography } from '@/components/atoms/Typography';
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
          {/* Brand & Mission */}
          <div className={styles.brandCol}>
            <div className={styles.brandTitle}>PANGASINAN</div>
            <div className={styles.brandSubtitle}>Heritage &amp; Tourism Digital Showcase</div>
            <Typography variant="body" color="inverse" className={styles.brandDesc}>
              A digital initiative celebrating the cultural legacy, coastal sanctuaries, and historic landmarks of the province of Pangasinan.
            </Typography>
            <div className={styles.badge}>
              <Icon name="shield" size="xs" ariaHidden />
              <span>Official Provincial Tourism Initiative &bull; Northern Luzon</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className={styles.navCol}>
            <h3 className={styles.colHeading}>Explore</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/" className={styles.link}>Home</Link>
              </li>
              <li>
                <Link href="/destinations" className={styles.link}>All Destinations</Link>
              </li>
              <li>
                <Link href="/heritage" className={styles.link}>Heritage &amp; Culture</Link>
              </li>
            </ul>
          </div>

          {/* Municipalities */}
          <div className={styles.destCol}>
            <h3 className={styles.colHeading}>Featured Destinations</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/destinations/hundred-islands" className={styles.link}>Hundred Islands (Alaminos)</Link>
              </li>
              <li>
                <Link href="/destinations/bolinao-lighthouse" className={styles.link}>Cape Bolinao Lighthouse</Link>
              </li>
              <li>
                <Link href="/destinations/balungao-hot-spring" className={styles.link}>Mount Balungao Springs</Link>
              </li>
              <li>
                <Link href="/destinations/manaoag-basilica" className={styles.link}>Manaoag Pilgrimage Basilica</Link>
              </li>
              <li>
                <Link href="/destinations/provincial-capitol" className={styles.link}>Provincial Capitol (Lingayen)</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Province of Pangasinan Tourism. All rights reserved.
          </p>
          <p className={styles.tagline}>
            Stories shaped by land and sea &bull; Gateway to Northern Luzon
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
