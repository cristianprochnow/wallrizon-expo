import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './src/screens/Home';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </>
  );
}
