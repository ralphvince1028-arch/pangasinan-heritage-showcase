import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { getDestinationBySlug } from '../../src/data/destinations';
import { HighlightCard } from '../../src/components/HighlightCard';
import { useFavorites } from '../../src/context/FavoritesContext';
import { COLORS, SPACING, RADIUS, SHADOWS } from '../../src/theme/tokens';

export default function DestinationDetailScreen() {
  const router = useRouter();
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const destination = getDestinationBySlug(slug as string);
  const { isFavorite, toggleFavorite } = useFavorites();

  if (!destination) {
    return (
      <View style={styles.errorContainer}>
        <Ionicons name="alert-circle-outline" size={48} color={COLORS.clay} />
        <Text style={styles.errorTitle}>Destination Not Found</Text>
        <Pressable style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backBtnText}>Go Back</Text>
        </Pressable>
      </View>
    );
  }

  const bookmarked = isFavorite(destination.slug);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
      {/* Hero Image Header */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: destination.image }}
          style={styles.image}
          contentFit="cover"
          transition={300}
        />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{destination.category.toUpperCase()}</Text>
        </View>

        <Pressable
          style={styles.bookmarkBtn}
          onPress={() => toggleFavorite(destination.slug)}
          hitSlop={8}
        >
          <Ionicons
            name={bookmarked ? 'bookmark' : 'bookmark-outline'}
            size={20}
            color={bookmarked ? COLORS.clay : COLORS.navy}
          />
        </Pressable>
      </View>

      {/* Main Info */}
      <View style={styles.headerContent}>
        <Text style={styles.location}>
          <Ionicons name="location" size={14} color={COLORS.clay} /> {destination.municipality}, Pangasinan
        </Text>
        <Text style={styles.title}>{destination.name}</Text>
        <Text style={styles.tagline}>{destination.tagline}</Text>
      </View>

      {/* Narrative Section */}
      <View style={styles.section}>
        <Text style={styles.sectionKicker}>ABOUT THE DESTINATION</Text>
        <Text style={styles.description}>{destination.description}</Text>
      </View>

      {/* Highlights List */}
      <View style={styles.section}>
        <Text style={styles.sectionKicker}>KEY HIGHLIGHTS</Text>
        {destination.highlights.map((item, idx) => (
          <HighlightCard key={idx} highlight={item} />
        ))}
      </View>

      {/* Visitor Essentials Card */}
      <View style={styles.essentialsCard}>
        <Text style={styles.essentialsTitle}>Visitor Essentials</Text>

        <View style={styles.essentialRow}>
          <Ionicons name="map-outline" size={18} color={COLORS.clay} />
          <View style={styles.essentialTextGroup}>
            <Text style={styles.essentialLabel}>Municipality</Text>
            <Text style={styles.essentialValue}>{destination.municipality}, Pangasinan</Text>
          </View>
        </View>

        {destination.bestTimeToVisit && (
          <View style={styles.essentialRow}>
            <Ionicons name="calendar-outline" size={18} color={COLORS.clay} />
            <View style={styles.essentialTextGroup}>
              <Text style={styles.essentialLabel}>Best Season to Visit</Text>
              <Text style={styles.essentialValue}>{destination.bestTimeToVisit}</Text>
            </View>
          </View>
        )}

        {destination.travelTip && (
          <View style={styles.essentialRow}>
            <Ionicons name="information-circle-outline" size={18} color={COLORS.clay} />
            <View style={styles.essentialTextGroup}>
              <Text style={styles.essentialLabel}>Travel Advice</Text>
              <Text style={styles.essentialValue}>{destination.travelTip}</Text>
            </View>
          </View>
        )}
      </View>

      {/* Action Buttons */}
      <View style={styles.actionRow}>
        <Pressable
          style={[styles.actionBtn, styles.actionBtnPrimary]}
          onPress={() => toggleFavorite(destination.slug)}
        >
          <Ionicons
            name={bookmarked ? 'bookmark' : 'bookmark-outline'}
            size={18}
            color={COLORS.riceWhite}
          />
          <Text style={styles.actionBtnTextPrimary}>
            {bookmarked ? 'Saved to Bookmarks' : 'Save Destination'}
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.screenBg,
  },
  contentContainer: {
    paddingBottom: SPACING.xxl,
  },
  imageContainer: {
    width: '100%',
    height: 240,
    backgroundColor: COLORS.sandMuted,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  badge: {
    position: 'absolute',
    top: SPACING.base,
    left: SPACING.base,
    backgroundColor: 'rgba(24, 42, 53, 0.85)',
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
    borderRadius: RADIUS.xs,
  },
  badgeText: {
    color: COLORS.riceWhite,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  bookmarkBtn: {
    position: 'absolute',
    top: SPACING.base,
    right: SPACING.base,
    backgroundColor: 'rgba(251, 248, 241, 0.95)',
    width: 38,
    height: 38,
    borderRadius: RADIUS.full,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.subtle,
  },
  headerContent: {
    padding: SPACING.base,
    backgroundColor: COLORS.cardBg,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderSubtle,
  },
  location: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.clay,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.navy,
    marginBottom: 4,
  },
  tagline: {
    fontSize: 14,
    color: COLORS.charcoalMuted,
    lineHeight: 20,
  },
  section: {
    paddingHorizontal: SPACING.base,
    paddingTop: SPACING.lg,
  },
  sectionKicker: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.clay,
    letterSpacing: 0.5,
    marginBottom: SPACING.sm,
  },
  description: {
    fontSize: 14,
    color: COLORS.charcoal,
    lineHeight: 22,
  },
  essentialsCard: {
    backgroundColor: COLORS.cardBg,
    borderRadius: RADIUS.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.base,
    margin: SPACING.base,
    marginTop: SPACING.lg,
    ...SHADOWS.subtle,
  },
  essentialsTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.navy,
    marginBottom: SPACING.md,
    paddingBottom: SPACING.xs,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderSubtle,
  },
  essentialRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: SPACING.sm,
    marginBottom: SPACING.md,
  },
  essentialTextGroup: {
    flex: 1,
  },
  essentialLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.charcoalMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  essentialValue: {
    fontSize: 13,
    color: COLORS.navy,
    fontWeight: '600',
    lineHeight: 18,
  },
  actionRow: {
    paddingHorizontal: SPACING.base,
    marginTop: SPACING.sm,
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.md,
    borderRadius: RADIUS.xs,
    gap: SPACING.sm,
  },
  actionBtnPrimary: {
    backgroundColor: COLORS.clay,
  },
  actionBtnTextPrimary: {
    color: COLORS.riceWhite,
    fontSize: 15,
    fontWeight: '700',
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.xl,
  },
  errorTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.navy,
    marginTop: SPACING.md,
    marginBottom: SPACING.base,
  },
  backBtn: {
    backgroundColor: COLORS.navy,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
    borderRadius: RADIUS.xs,
  },
  backBtnText: {
    color: COLORS.riceWhite,
    fontSize: 14,
    fontWeight: '600',
  },
});