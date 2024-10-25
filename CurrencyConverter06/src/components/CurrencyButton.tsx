import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import type {PropsWithChildren} from 'react';

type CurrencyButtonProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;
const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.country}> {props.name}</Text>
      <Text style={styles.flag}> {props.flag}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center'
    },
    flag:{
        fontSize: 30,
        color:"white",
        marginBottom:4
    },
    country:{
        fontSize: 14,
        color:"#2D3436",
        marginBottom:4
    }
});
export default CurrencyButton;
