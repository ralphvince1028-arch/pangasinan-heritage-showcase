'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    setIsOpen(false);
  }, [pathname]);

  // Close on Escape key press
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
    { href: '/heritage', label: 'Explore Destinations' },
    { href: '/design-system', label: 'Atomic Design System' },
  ];

  return (
    <header className={`${styles.header} ${className}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Brand Logo & Title */}
        <Link href="/" className={styles.brand} aria-label="Pangasinan Heritage Showcase Home">
          <div className={styles.logoWrapper}>
            <Image
              src="/images/pangasinan-logo.svg"
              alt="Pangasinan Provincial Tourism Logo"
              width={42}
              height={42}
              priority
            />
          </div>
          <div className={styles.brandText}>
            <span className={styles.brandTitle}>PANGASINAN</span>
            <span className={styles.brandSubtitle}>Heritage Digital Showcase</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          {navLinks.map((link) => (
            <NavigationItem
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={pathname === link.href}
            />
          ))}
        </nav>

        {/* Desktop Action CTA */}
        <div className={styles.desktopActions}>
          <Button
            variant="primary"
            size="sm"
            href="/heritage"
            iconRight={<Icon name="arrow-right" size="xs" ariaHidden />}
          >
            Explore Showcase
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className={styles.mobileMenuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-menu"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <Icon name={isOpen ? 'close' : 'menu'} size="md" ariaHidden />
        </button>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <nav
            id="mobile-nav-menu"
            className={styles.mobileDrawer}
            aria-label="Mobile Main Navigation"
          >
            <div className={styles.mobileNavList}>
              {navLinks.map((link) => (
                <NavigationItem
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isActive={pathname === link.href}
                  onClick={() => setIsOpen(false)}
                />
              ))}
            </div>
            <div className={styles.mobileActions}>
              <Button
                variant="primary"
                size="md"
                href="/heritage"
                fullWidth
                onClick={() => setIsOpen(false)}
                iconRight={<Icon name="arrow-right" size="sm" ariaHidden />}
              >
                Explore All Destinations
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default HeaderNavigation;

