import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { COLORS, SPACING, RADIUS, SHADOWS } from '../../src/theme/tokens';
import { Ionicons } from '@expo/vector-icons';

export default function HeritageScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
      {/* Intro Header */}
      <View style={styles.header}>
        <Text style={styles.kicker}>PROVINCIAL IDENTITY</Text>
        <Text style={styles.title}>Heritage Carried Forward</Text>
        <Text style={styles.subtitle}>
          The living stories, sacred shrines, and coastal traditions of the province of salt.
        </Text>
      </View>

      {/* Story 1: Panag-asinan */}
      <View style={styles.storyCard}>
        <Image
          source={{ uri: 'https://ralphvince1028-arch.github.io/pangasinan-heritage-showcase/images/patar-beach.png' }}
          style={styles.storyImage}
          contentFit="cover"
        />
        <View style={styles.storyContent}>
          <Text style={styles.storyKicker}>ORIGIN &amp; IDENTITY</Text>
          <Text style={styles.storyHeading}>The Land of Salt: Panag-asinan</Text>
          <Text style={styles.storyParagraph}>
            The name Pangasinan originates from the root word &quot;asin&quot; (salt), meaning &quot;place where salt is made.&quot; Pre-colonial settlements along the Lingayen Gulf harvested mineral-rich salt using coastal clay pans.
          </Text>
        </View>
      </View>

      {/* Story 2: Maritime & Civic */}
      <View style={styles.storyCard}>
        <Image
          source={{ uri: 'https://ralphvince1028-arch.github.io/pangasinan-heritage-showcase/images/provincial-capitol.png' }}
          style={styles.storyImage}
          contentFit="cover"
        />
        <View style={styles.storyContent}>
          <Text style={styles.storyKicker}>CIVIC &amp; ARCHITECTURE</Text>
          <Text style={styles.storyHeading}>Historic Palaces &amp; Coastal Beacons</Text>
          <Text style={styles.storyParagraph}>
            From the 1905 Cape Bolinao Lighthouse atop Punta Piedra Point to the 1918 neoclassical Provincial Capitol in Lingayen, Pangasinan preserves significant monuments of Philippine history.
          </Text>
        </View>
      </View>

      {/* Story 3: Spiritual Heart */}
      <View style={styles.storyCard}>
        <Image
          source={{ uri: 'https://ralphvince1028-arch.github.io/pangasinan-heritage-showcase/images/manaoag-basilica.png' }}
          style={styles.storyImage}
          contentFit="cover"
        />
        <View style={styles.storyContent}>
          <Text style={styles.storyKicker}>SPIRITUAL TRADITIONS</Text>
          <Text style={styles.storyHeading}>Minor Basilica of Manaoag</Text>
          <Text style={styles.storyParagraph}>
            For over four centuries, Manaoag has stood as the spiritual sanctuary of Northern Luzon, housing antique religious art and sacred reliquaries dating back to 1605.
          </Text>
        </View>
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
    padding: SPACING.base,
    paddingBottom: SPACING.xxl,
  },
  header: {
    marginBottom: SPACING.lg,
  },
  kicker: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.clay,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.navy,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.charcoalMuted,
    lineHeight: 20,
  },
  storyCard: {
    backgroundColor: COLORS.cardBg,
    borderRadius: RADIUS.sm,
    borderWidth: 1,
    borderColor: COLORS.borderSubtle,
    overflow: 'hidden',
    marginBottom: SPACING.base,
    ...SHADOWS.card,
  },
  storyImage: {
    width: '100%',
    height: 180,
  },
  storyContent: {
    padding: SPACING.base,
  },
  storyKicker: {
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.clay,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  storyHeading: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.navy,
    marginBottom: 6,
  },
  storyParagraph: {
    fontSize: 13,
    color: COLORS.charcoalMuted,
    lineHeight: 19,
  },
});