import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, useColorScheme } from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }]}>
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
          Hello World
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // This ensures the SafeAreaView takes up the full screen
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',  // Centers the content both horizontally and vertically
  },
  whiteText: {
    color: 'white',
  },
  blackText: {
    color: 'black',
  },
});

export default AppPro;
