import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/screens/Home';
import { colors } from './src/constants/theme';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <SafeAreaProvider>
          <Home />
        </SafeAreaProvider>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background, 
    flex: 1
  }
});
