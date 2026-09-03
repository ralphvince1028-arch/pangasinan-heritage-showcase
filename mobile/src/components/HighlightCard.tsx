import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DestinationHighlight } from '../types/destination';
import { COLORS, SPACING, RADIUS } from '../theme/tokens';

export const HighlightCard: React.FC<{ highlight: DestinationHighlight }> = ({ highlight }) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Ionicons name="checkmark-circle" size={20} color={COLORS.clay} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{highlight.title}</Text>
        <Text style={styles.desc}>{highlight.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.cardBg,
    padding: SPACING.md,
    borderRadius: RADIUS.xs,
    borderWidth: 1,
    borderColor: COLORS.borderSubtle,
    marginBottom: SPACING.sm,
    alignItems: 'flex-start',
    gap: SPACING.sm,
  },
  iconContainer: {
    marginTop: 2,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.navy,
    marginBottom: 3,
  },
  desc: {
    fontSize: 13,
    color: COLORS.charcoalMuted,
    lineHeight: 18,
  },
});