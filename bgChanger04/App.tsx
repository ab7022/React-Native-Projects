import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [randomBackgroundColor, setRandomBackgroundColor] = useState('#FFFFFF');
  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackgroundColor(color);
  };
  return (
    <>
      <StatusBar backgroundColor={randomBackgroundColor} />
      <SafeAreaView
        style={[styles.container, {backgroundColor: randomBackgroundColor}]}>
        <TouchableOpacity
          onPress={() => {
            generateColor();
          }}>
          <View style={styles.actionBtn}>
            <Text style={styles.text}>Click me</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },

  text: {
    color: '#FFFFFF',
    fontSize: 24,
    textTransform: 'uppercase',
  },
});
