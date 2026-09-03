import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { FavoritesProvider } from '../src/context/FavoritesContext';
import { COLORS } from '../src/theme/tokens';

export default function RootLayout() {
  return (
    <FavoritesProvider>
      <StatusBar style="light" backgroundColor={COLORS.navy} />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.navy,
          },
          headerTintColor: COLORS.riceWhite,
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 18,
          },
          contentStyle: {
            backgroundColor: COLORS.screenBg,
          },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="destination/[slug]"
          options={{
            headerTitle: 'Destination Details',
            headerBackTitle: 'Back',
            presentation: 'card',
          }}
        />
      </Stack>
    </FavoritesProvider>
  );
}