import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { getFeaturedDestinations, getAllDestinations } from '../../src/data/destinations';
import { DestinationCard } from '../../src/components/DestinationCard';
import { COLORS, SPACING, RADIUS, SHADOWS } from '../../src/theme/tokens';

export default function HomeScreen() {
  const router = useRouter();
  const featured = getFeaturedDestinations();
  const allDestinations = getAllDestinations();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
      {/* Editorial Hero Banner */}
      <View style={styles.heroCard}>
        <Image
          source={{ uri: 'https://ralphvince1028-arch.github.io/pangasinan-heritage-showcase/images/hero-pangasinan.png' }}
          style={styles.heroImage}
          contentFit="cover"
        />
        <View style={styles.heroOverlay}>
          <Text style={styles.heroKicker}>NORTHERN LUZON &bull; PHILIPPINES</Text>
          <Text style={styles.heroTitle}>Stories shaped by land and sea.</Text>
          <Text style={styles.heroSub}>
            Discover ancient coral islets, century-old coastal lighthouses, and natural geothermal springs.
          </Text>
          <Pressable
            style={styles.heroBtn}
            onPress={() => router.push('/(tabs)/destinations')}
          >
            <Text style={styles.heroBtnText}>Start Exploring</Text>
            <Ionicons name="arrow-forward" size={16} color={COLORS.riceWhite} />
          </Pressable>
        </View>
      </View>

      {/* Featured Destinations Section */}
      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionKicker}>TOP PICKS</Text>
          <Text style={styles.sectionTitle}>Featured Destinations</Text>
        </View>
        <Pressable onPress={() => router.push('/(tabs)/destinations')}>
          <Text style={styles.seeAllText}>See All &rarr;</Text>
        </Pressable>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalScroll}
      >
        {featured.map((dest) => (
          <DestinationCard key={dest.id} destination={dest} horizontal />
        ))}
      </ScrollView>

      {/* Magazine Spotlight: Hundred Islands */}
      <View style={styles.spotlightCard}>
        <View style={styles.spotlightBadge}>
          <Ionicons name="sparkles" size={14} color={COLORS.clay} />
          <Text style={styles.spotlightBadgeText}>EDITORIAL SPOTLIGHT</Text>
        </View>
        <Text style={styles.spotlightTitle}>Hundred Islands National Park</Text>
        <Text style={styles.spotlightDesc}>
          124 ancient mushroom-shaped coral islets formed over two million years ago in the Lingayen Gulf.
        </Text>
        <Pressable
          style={styles.spotlightBtn}
          onPress={() => router.push('/destination/hundred-islands')}
        >
          <Text style={styles.spotlightBtnText}>Read Destination Story</Text>
          <Ionicons name="arrow-forward" size={14} color={COLORS.clay} />
        </Pressable>
      </View>

      {/* All Destinations Grid Section */}
      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionKicker}>ALL PLACES</Text>
          <Text style={styles.sectionTitle}>Explore the Province</Text>
        </View>
      </View>

      {allDestinations.map((dest) => (
        <DestinationCard key={dest.id} destination={dest} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.screenBg,
  },
  contentContainer: {
    padding: SPACING.base,
    paddingBottom: SPACING.xxl,
  },
  heroCard: {
    borderRadius: RADIUS.sm,
    overflow: 'hidden',
    height: 280,
    position: 'relative',
    marginBottom: SPACING.xl,
    ...SHADOWS.card,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(24, 42, 53, 0.65)',
    padding: SPACING.lg,
    justifyContent: 'flex-end',
  },
  heroKicker: {
    color: COLORS.seaglassLight,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 4,
  },
  heroTitle: {
    color: COLORS.riceWhite,
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 28,
    marginBottom: 6,
  },
  heroSub: {
    color: COLORS.sandLight,
    fontSize: 12,
    lineHeight: 16,
    marginBottom: SPACING.md,
  },
  heroBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: COLORS.clay,
    paddingHorizontal: SPACING.base,
    paddingVertical: 8,
    borderRadius: RADIUS.xs,
    gap: 6,
  },
  heroBtnText: {
    color: COLORS.riceWhite,
    fontSize: 13,
    fontWeight: '700',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: SPACING.md,
    marginTop: SPACING.sm,
  },
  sectionKicker: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.clay,
    letterSpacing: 0.5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.navy,
  },
  seeAllText: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.clay,
  },
  horizontalScroll: {
    paddingBottom: SPACING.base,
  },
  spotlightCard: {
    backgroundColor: COLORS.cardBg,
    borderRadius: RADIUS.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.lg,
    marginVertical: SPACING.base,
    ...SHADOWS.subtle,
  },
  spotlightBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 6,
  },
  spotlightBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.clay,
    letterSpacing: 0.5,
  },
  spotlightTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.navy,
    marginBottom: 6,
  },
  spotlightDesc: {
    fontSize: 13,
    color: COLORS.charcoalMuted,
    lineHeight: 18,
    marginBottom: SPACING.md,
  },
  spotlightBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  spotlightBtnText: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.clay,
  },
});