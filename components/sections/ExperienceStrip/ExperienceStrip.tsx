import React from 'react';
import Link from 'next/link';
import { Typography } from '@/components/atoms/Typography';
import { Icon, IconName } from '@/components/atoms/Icon';
import styles from './ExperienceStrip.module.css';

interface ExperienceCategory {
  title: string;
  category: string;
  icon: IconName;
  description: string;
}

const CATEGORIES: ExperienceCategory[] = [
  {
    title: 'Coastal Wonders',
    category: 'Coastal',
    icon: 'waves',
    description: 'Ancient limestone islets, turquoise lagoons, and pristine golden sand beaches.',
  },
  {
    title: 'Heritage Landmarks',
    category: 'Heritage',
    icon: 'landmark',
    description: 'Century-old beacons, neoclassical civic palaces, and historic seaboard fortifications.',
  },
  {
    title: 'Nature & Wellness',
    category: 'Nature',
    icon: 'sun',
    description: 'Geothermal hot springs, volcanic foothills, and award-winning river eco-corridors.',
  },
  {
    title: 'Culture & Pilgrimage',
    category: 'Culture',
    icon: 'compass',
    description: 'Revered spiritual basilicas, sacred museums, and traditional coastal communities.',
  },
];

export const ExperienceStrip: React.FC = () => {
  return (
    <section className={styles.section} aria-labelledby="experience-strip-title">
      <div className="container">
        <div className={styles.header}>
          <Typography variant="eyebrow" color="clay">
            Curated Experiences
          </Typography>
          <Typography variant="h2" color="navy" id="experience-strip-title" className={styles.title}>
            Explore Pangasinan by Experience
          </Typography>
          <Typography variant="body" color="muted" className={styles.subtitle}>
            From coastal adventures along the western seaboard to inland geothermal retreats and cultural sanctuaries.
          </Typography>
        </div>

        <div className={styles.grid}>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.category}
              href={`/destinations?category=${encodeURIComponent(cat.category)}`}
              className={styles.card}
            >
              <div className={styles.iconWrapper}>
                <Icon name={cat.icon} size="md" color="var(--color-clay)" ariaHidden />
              </div>
              <h3 className={styles.catTitle}>{cat.title}</h3>
              <p className={styles.catDesc}>{cat.description}</p>
              <span className={styles.cardLink}>
                <span>View Destinations</span>
                <Icon name="arrow-right" size="xs" ariaHidden />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceStrip;
