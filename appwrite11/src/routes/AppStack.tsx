import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
export type AppStackParamList = {
  Home: undefined;
};
import Home from '../screens/Home';
const Stack = createNativeStackNavigator<AppStackParamList>();
//test
const num = 123;
export const AppStack = () => {
  return <Stack.Navigator screenOptions={{
    headerTitleAlign: 'center',
    headerBackTitleVisible: false,
  }}>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>;
};


const styles = StyleSheet.create({});
