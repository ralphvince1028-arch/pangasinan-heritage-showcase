import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Destination } from '../types/destination';
import { COLORS, SPACING, RADIUS, SHADOWS } from '../theme/tokens';
import { useFavorites } from '../context/FavoritesContext';

interface DestinationCardProps {
  destination: Destination;
  horizontal?: boolean;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination, horizontal = false }) => {
  const router = useRouter();
  const { isFavorite, toggleFavorite } = useFavorites();
  const bookmarked = isFavorite(destination.slug);

  const handlePress = () => {
    router.push(`/destination/${destination.slug}`);
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        horizontal && styles.cardHorizontal,
        pressed && styles.cardPressed,
      ]}
      onPress={handlePress}
    >
      <View style={[styles.imageContainer, horizontal && styles.imageContainerHorizontal]}>
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
          style={styles.favoriteButton}
          onPress={(e) => {
            e.stopPropagation();
            toggleFavorite(destination.slug);
          }}
          hitSlop={8}
        >
          <Ionicons
            name={bookmarked ? 'bookmark' : 'bookmark-outline'}
            size={18}
            color={bookmarked ? COLORS.clay : COLORS.navy}
          />
        </Pressable>
      </View>

      <View style={styles.content}>
        <Text style={styles.location}>
          <Ionicons name="location-outline" size={12} color={COLORS.clay} /> {destination.municipality}
        </Text>
        <Text style={styles.name} numberOfLines={2}>
          {destination.name}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {destination.shortDescription}
        </Text>

        <View style={styles.footer}>
          <Text style={styles.exploreText}>View Details</Text>
          <Ionicons name="arrow-forward" size={14} color={COLORS.clay} />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.cardBg,
    borderRadius: RADIUS.sm,
    borderWidth: 1,
    borderColor: COLORS.borderSubtle,
    overflow: 'hidden',
    marginBottom: SPACING.base,
    ...SHADOWS.card,
  },
  cardHorizontal: {
    width: 280,
    marginRight: SPACING.base,
    marginBottom: 0,
  },
  cardPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.99 }],
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 180,
    backgroundColor: COLORS.sandMuted,
  },
  imageContainerHorizontal: {
    height: 160,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  badge: {
    position: 'absolute',
    top: SPACING.sm,
    left: SPACING.sm,
    backgroundColor: 'rgba(24, 42, 53, 0.85)',
    paddingHorizontal: SPACING.sm,
    paddingVertical: 3,
    borderRadius: RADIUS.xs,
  },
  badgeText: {
    color: COLORS.riceWhite,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  favoriteButton: {
    position: 'absolute',
    top: SPACING.sm,
    right: SPACING.sm,
    backgroundColor: 'rgba(251, 248, 241, 0.92)',
    width: 32,
    height: 32,
    borderRadius: RADIUS.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: SPACING.base,
  },
  location: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.clay,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  name: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.navy,
    marginBottom: 6,
    lineHeight: 22,
  },
  description: {
    fontSize: 13,
    color: COLORS.charcoalMuted,
    lineHeight: 18,
    marginBottom: SPACING.sm,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    paddingTop: SPACING.sm,
    borderTopWidth: 1,
    borderTopColor: COLORS.borderSubtle,
    gap: 4,
  },
  exploreText: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.clay,
  },
});