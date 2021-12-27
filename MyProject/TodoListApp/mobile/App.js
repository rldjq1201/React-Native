import React, {useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
} from 'react-native';

import {ThemeProvider} from 'styled-components/native';
import ListScreen from './src/screens/ListScreen';

export default function App() {
  useEffect(() => SplashScreen.hide());
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ListScreen />
      {/*<BottomTabNavComponent />*/}
      {/* <Test></Test> */}
      {/* <ProfileSettingNav /> */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
