import React from 'react';
import { Metadata } from 'next';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import { ResponsiveImage } from '@/components/atoms/ResponsiveImage';
import styles from './heritage.module.css';

export const metadata: Metadata = {
  title: 'Heritage & Culture | Pangasinan Tourism',
  description:
    'Explore the deep cultural legacy, pre-colonial salt-making traditions, historic lighthouses, and sacred pilgrimage shrines of Pangasinan.',
  openGraph: {
    title: 'Heritage & Culture of Pangasinan',
    description:
      'Explore the deep cultural legacy, pre-colonial salt-making traditions, historic lighthouses, and sacred pilgrimage shrines of Pangasinan.',
  },
};

export default function HeritagePage() {
  return (
    <div className={styles.pageContainer}>
      {/* Editorial Header */}
      <section className={styles.heroSection} aria-labelledby="heritage-page-title">
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.eyebrowWrapper}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              <Typography variant="eyebrow" color="clay">
                Cultural Legacy &bull; Northern Luzon
              </Typography>
            </div>
            <Typography variant="h1" color="navy" id="heritage-page-title" className={styles.heroTitle}>
              Heritage carried forward.
            </Typography>
            <Typography variant="lead" color="muted" className={styles.heroLead}>
              Rooted in centuries of coastal seamanship, pre-colonial trade routes, and sacred architecture—discover the stories, landmarks, and living traditions that define Pangasinan.
            </Typography>
          </div>
        </div>
      </section>

      {/* Story 1: The Land of Salt */}
      <section className={styles.storySection} aria-labelledby="salt-legacy-title">
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyTextCol}>
              <Typography variant="eyebrow" color="clay" className={styles.sectionKicker}>
                Origin &amp; Identity
              </Typography>
              <Typography variant="h2" color="navy" id="salt-legacy-title" className={styles.storyTitle}>
                The Land of Salt: Panag-asinan
              </Typography>
              <Typography variant="body" color="default" className={styles.storyParagraph}>
                The name <em>Pangasinan</em> originates from the indigenous root word <em>asin</em> (salt), meaning &quot;place where salt is made.&quot; For generations prior to the Spanish era, coastal settlements along the Lingayen Gulf and Dasol Bay harnessed solar evaporation and coastal clay pans to harvest some of the finest sea salts in Southeast Asia.
              </Typography>
              <Typography variant="body" color="muted" className={styles.storyParagraph}>
                Today, artisanal salt-making (such as the famed <em>asin tibook</em> and sea-salt beds) remains a cultural touchstone, sustaining culinary traditions and artisanal livelihoods across coastal municipalities.
              </Typography>
            </div>
            <div className={styles.storyImageCol}>
              <div className={styles.imageCard}>
                <ResponsiveImage
                  src="/images/patar-beach.png"
                  alt="Golden coastal coastline of western Pangasinan where coastal traditions thrive"
                  aspectRatio="4/3"
                  radius="xs"
                />
                <div className={styles.cardCaption}>
                  <span>Western Seaboard &bull; Coastal Heritage Corridor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story 2: Historic Monuments & Civic Architecture */}
      <section className={`${styles.storySection} ${styles.bgAlt}`} aria-labelledby="civic-heritage-title">
        <div className="container">
          <div className={`${styles.storyGrid} ${styles.reversed}`}>
            <div className={styles.storyTextCol}>
              <Typography variant="eyebrow" color="clay" className={styles.sectionKicker}>
                Architecture &amp; Memory
              </Typography>
              <Typography variant="h2" color="navy" id="civic-heritage-title" className={styles.storyTitle}>
                Colonial Beacons &amp; Neoclassical Palaces
              </Typography>
              <Typography variant="body" color="default" className={styles.storyParagraph}>
                Pangasinan’s built environment reflects significant epochs of Philippine history. The 1905 Cape Bolinao Lighthouse stands as a monument to early modern maritime engineering, navigating ships safely through the West Philippine Sea.
              </Typography>
              <Typography variant="body" color="muted" className={styles.storyParagraph}>
                In Lingayen, the 1918 Pangasinan Provincial Capitol—designed by Daniel Burnham and Ralph Harrington Doane—showcases neoclassical grandeur overlooking the historic gulf where Allied forces landed during World War II.
              </Typography>
              <div className={styles.storyAction}>
                <Button variant="editorial-link" href="/destinations/provincial-capitol" iconRight={<Icon name="arrow-right" size="xs" ariaHidden />}>
                  Explore Provincial Capitol &rarr;
                </Button>
              </div>
            </div>
            <div className={styles.storyImageCol}>
              <div className={styles.imageCard}>
                <ResponsiveImage
                  src="/images/provincial-capitol.png"
                  alt="Grand neoclassical façade of the Pangasinan Provincial Capitol in Lingayen"
                  aspectRatio="4/3"
                  radius="xs"
                />
                <div className={styles.cardCaption}>
                  <span>Provincial Capitol &bull; Lingayen, Pangasinan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story 3: Sacred Pilgrimage & Living Communities */}
      <section className={styles.storySection} aria-labelledby="faith-culture-title">
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyTextCol}>
              <Typography variant="eyebrow" color="clay" className={styles.sectionKicker}>
                Spiritual Heritage
              </Typography>
              <Typography variant="h2" color="navy" id="faith-culture-title" className={styles.storyTitle}>
                The Minor Basilica of Manaoag
              </Typography>
              <Typography variant="body" color="default" className={styles.storyParagraph}>
                For over four centuries, the municipality of Manaoag has served as the spiritual sanctuary of Northern Luzon. The Minor Basilica of Our Lady of the Rosary of Manaoag preserves antique religious art, historic bells, and sacred manuscripts that date back to the early 1600s.
              </Typography>
              <Typography variant="body" color="muted" className={styles.storyParagraph}>
                The sanctuary is a vibrant living symbol of communal devotion, welcoming cultural travelers and pilgrims throughout the year.
              </Typography>
              <div className={styles.storyAction}>
                <Button variant="editorial-link" href="/destinations/manaoag-basilica" iconRight={<Icon name="arrow-right" size="xs" ariaHidden />}>
                  Explore Manaoag Basilica &rarr;
                </Button>
              </div>
            </div>
            <div className={styles.storyImageCol}>
              <div className={styles.imageCard}>
                <ResponsiveImage
                  src="/images/manaoag-basilica.png"
                  alt="Historic façade of the Minor Basilica of Our Lady of Manaoag"
                  aspectRatio="4/3"
                  radius="xs"
                />
                <div className={styles.cardCaption}>
                  <span>Minor Basilica &bull; Manaoag, Pangasinan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className={styles.ctaSection} aria-labelledby="heritage-cta-title">
        <div className="container">
          <div className={styles.ctaCard}>
            <Typography variant="eyebrow" color="clay" className={styles.ctaEyebrow}>
              Continue the Journey
            </Typography>
            <Typography variant="h2" color="navy" id="heritage-cta-title" className={styles.ctaTitle}>
              Experience Pangasinan in Person
            </Typography>
            <Typography variant="lead" color="muted" className={styles.ctaText}>
              Discover all 8 featured destinations spanning coastal wonders, historic monuments, and geothermal eco-parks.
            </Typography>
            <Button variant="primary" size="lg" href="/destinations" iconRight={<Icon name="arrow-right" size="sm" ariaHidden />}>
              See All Destinations
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
