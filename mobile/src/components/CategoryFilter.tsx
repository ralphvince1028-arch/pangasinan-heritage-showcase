import React from 'react';
import { ScrollView, Text, StyleSheet, Pressable } from 'react-native';
import { DestinationCategory } from '../types/destination';
import { COLORS, SPACING, RADIUS } from '../theme/tokens';

interface CategoryFilterProps {
  selectedCategory: 'All' | DestinationCategory;
  onSelectCategory: (category: 'All' | DestinationCategory) => void;
}

const CATEGORIES: Array<'All' | DestinationCategory> = ['All', 'Coastal', 'Heritage', 'Nature', 'Culture'];

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {CATEGORIES.map((cat) => {
        const isSelected = selectedCategory === cat;
        return (
          <Pressable
            key={cat}
            style={[styles.pill, isSelected && styles.pillActive]}
            onPress={() => onSelectCategory(cat)}
          >
            <Text style={[styles.pillText, isSelected && styles.pillTextActive]}>
              {cat === 'All' ? 'All Places' : cat}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: SPACING.sm,
    gap: SPACING.sm,
  },
  pill: {
    paddingHorizontal: SPACING.base,
    paddingVertical: 8,
    borderRadius: RADIUS.xs,
    backgroundColor: COLORS.cardBg,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  pillActive: {
    backgroundColor: COLORS.clay,
    borderColor: COLORS.clay,
  },
  pillText: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.navy,
  },
  pillTextActive: {
    color: COLORS.riceWhite,
  },
});