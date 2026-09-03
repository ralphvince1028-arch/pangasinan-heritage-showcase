import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getAllDestinations } from '../../src/data/destinations';
import { DestinationCategory } from '../../src/types/destination';
import { DestinationCard } from '../../src/components/DestinationCard';
import { SearchBar } from '../../src/components/SearchBar';
import { CategoryFilter } from '../../src/components/CategoryFilter';
import { COLORS, SPACING } from '../../src/theme/tokens';
import { Ionicons } from '@expo/vector-icons';

export default function DestinationsScreen() {
  const allDestinations = useMemo(() => getAllDestinations(), []);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | DestinationCategory>('All');

  const filtered = useMemo(() => {
    return allDestinations.filter((dest) => {
      const matchCat = selectedCategory === 'All' || dest.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        dest.name.toLowerCase().includes(q) ||
        dest.municipality.toLowerCase().includes(q) ||
        dest.category.toLowerCase().includes(q) ||
        dest.shortDescription.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [allDestinations, searchQuery, selectedCategory]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          onClear={() => setSearchQuery('')}
        />
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.metaRow}>
            <Text style={styles.countText}>
              Showing {filtered.length} {filtered.length === 1 ? 'place' : 'places'}
            </Text>
          </View>
        }
        renderItem={({ item }) => <DestinationCard destination={item} />}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="search-outline" size={48} color={COLORS.charcoalLight} />
            <Text style={styles.emptyTitle}>No destinations found</Text>
            <Text style={styles.emptySub}>
              Try a different search keyword or switch your category filter.
            </Text>
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
  searchContainer: {
    paddingHorizontal: SPACING.base,
    paddingTop: SPACING.base,
    backgroundColor: COLORS.screenBg,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderSubtle,
  },
  listContent: {
    padding: SPACING.base,
    paddingBottom: SPACING.xxl,
  },
  metaRow: {
    marginBottom: SPACING.md,
  },
  countText: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.charcoalMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
    paddingHorizontal: SPACING.xl,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.navy,
    marginTop: SPACING.md,
    marginBottom: 4,
  },
  emptySub: {
    fontSize: 13,
    color: COLORS.charcoalMuted,
    textAlign: 'center',
    lineHeight: 18,
  },
});