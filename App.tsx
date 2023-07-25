import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts, 
  Dosis_300Light, 
  Dosis_400Regular, 
  Dosis_700Bold
} from '@expo-google-fonts/dosis';
import * as SplashScreen from 'expo-splash-screen';
import Home from './src/screens/Home';
import { colors } from './src/constants/theme';

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    Dosis_300: Dosis_300Light, 
    Dosis_400: Dosis_400Regular, 
    Dosis_700: Dosis_700Bold
  });

  const onLayoutAvailable = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return;

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container} onLayout={onLayoutAvailable}>
        <SafeAreaProvider>
          <Home />
        </SafeAreaProvider>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundDarker, 
    flex: 1
  }
});
