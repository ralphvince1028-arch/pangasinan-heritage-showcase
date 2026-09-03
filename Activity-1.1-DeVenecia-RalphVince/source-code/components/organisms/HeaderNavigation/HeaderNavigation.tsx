'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavigationItem } from '@/components/molecules/NavigationItem';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import styles from './HeaderNavigation.module.css';

export interface HeaderNavigationProps {
  className?: string;
}

export const HeaderNavigation: React.FC<HeaderNavigationProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer when route changes
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(false), 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/destinations', label: 'Destinations' },
    { href: '/heritage', label: 'Heritage & Culture' },
  ];

  const isLinkActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className={`${styles.header} ${className}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Brand / Wordmark */}
        <Link href="/" className={styles.brand} aria-label="Pangasinan Tourism Home">
          <div className={styles.brandText}>
            <span className={styles.brandTitle}>PANGASINAN</span>
            <span className={styles.brandSubtitle}>Heritage &amp; Tourism</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Primary Navigation">
          {navLinks.map((link) => (
            <NavigationItem
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={isLinkActive(link.href)}
            />
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className={styles.desktopCta}>
          <Button variant="primary" size="sm" href="/destinations" iconRight={<Icon name="arrow-right" size="xs" ariaHidden />}>
            Explore
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className={styles.mobileToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-drawer"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <Icon name={isOpen ? 'close' : 'menu'} size="md" ariaHidden />
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div id="mobile-navigation-drawer" className={styles.mobileDrawer} role="dialog" aria-modal="true">
          <nav className={styles.mobileNav} aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.mobileLink} ${isLinkActive(link.href) ? styles.mobileActive : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className={styles.mobileCtaWrapper}>
              <Button variant="primary" size="md" fullWidth href="/destinations" onClick={() => setIsOpen(false)}>
                Explore Destinations
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default HeaderNavigation;
