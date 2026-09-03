import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { getAllDestinations } from '../../src/data/destinations';
import { DestinationCard } from '../../src/components/DestinationCard';
import { useFavorites } from '../../src/context/FavoritesContext';
import { COLORS, SPACING, RADIUS } from '../../src/theme/tokens';
import { Ionicons } from '@expo/vector-icons';

export default function FavoritesScreen() {
  const router = useRouter();
  const { favorites } = useFavorites();
  const allDestinations = getAllDestinations();

  const savedList = allDestinations.filter((d) => favorites.includes(d.slug));

  return (
    <View style={styles.container}>
      <FlatList
        data={savedList}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Offline Saved Places</Text>
            <Text style={styles.headerSubtitle}>
              Destinations bookmarked for quick offline access and itinerary planning.
            </Text>
          </View>
        }
        renderItem={({ item }) => <DestinationCard destination={item} />}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="bookmark-outline" size={54} color={COLORS.charcoalLight} />
            <Text style={styles.emptyTitle}>No saved places yet</Text>
            <Text style={styles.emptySub}>
              Tap the bookmark icon on any destination card to save it for quick offline viewing.
            </Text>
            <Pressable
              style={styles.exploreBtn}
              onPress={() => router.push('/(tabs)/destinations')}
            >
              <Text style={styles.exploreBtnText}>Browse Destinations</Text>
            </Pressable>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.screenBg,
  },
  listContent: {
    padding: SPACING.base,
    paddingBottom: SPACING.xxl,
  },
  header: {
    marginBottom: SPACING.base,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.navy,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 13,
    color: COLORS.charcoalMuted,
    lineHeight: 18,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
    paddingHorizontal: SPACING.xl,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.navy,
    marginTop: SPACING.md,
    marginBottom: 6,
  },
  emptySub: {
    fontSize: 13,
    color: COLORS.charcoalMuted,
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: SPACING.lg,
  },
  exploreBtn: {
    backgroundColor: COLORS.clay,
    paddingHorizontal: SPACING.xl,
    paddingVertical: 10,
    borderRadius: RADIUS.xs,
  },
  exploreBtnText: {
    color: COLORS.riceWhite,
    fontSize: 14,
    fontWeight: '700',
  },
});