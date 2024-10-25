/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {currencyByRupee} from './constants';
import CurrencyButton from './components/CurrencyButton';
import Snackbar from 'react-native-snackbar';

function App(): React.JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrenct, setTargetCurrency] = useState('');

  const buttonPress = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Enter a value to convert',
        backgroundColor: '#EA7773',
        textColor: 'black',
      });
    }
    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text: 'Not a valid number to convert',
        backgroundColor: '#F4BE2C',
        textColor: 'black',
      });
    }
  };
  const clearText = () => {
    setInputValue('');
    setResultValue('');
    setTargetCurrency('');
  };

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.heading}>Currency Calculator</Text>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
              style={styles.inputAmountField}
              maxLength={14}
              value={inputValue}
              clearButtonMode="always"
              keyboardType="numeric"
              onChangeText={setInputValue}
              placeholder="Enter amount in Rupees"
              placeholderTextColor="#888"
            />
          </View>
          {resultValue && <Text style={styles.resultTxt}>{resultValue}</Text>}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <Pressable
                style={[
                  styles.button,
                  targetCurrenct === item.name && styles.selected,
                ]}
                onPress={() => buttonPress(item)}>
                <CurrencyButton {...item} />
              </Pressable>
            )}
          /> 



          <TouchableOpacity style={styles.clear} onPress={clearText}>
            <Text>Clear</Text>
          </TouchableOpacity> //TODO: 
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  clear: {
    backgroundColor: 'black',
    color: 'white',
    padding: 15,
    alignContent: 'center',
  },
  heading: {
    fontSize: 28,
    color: 'black',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  resultTxt: {
    fontSize: 32,
    color: '#333333',
    fontWeight: 'bold',
    marginTop: 20,
  },
  rupee: {
    fontSize: 24,
    color: '#555',
    fontWeight: '600',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f3f5',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d1d1d1',
  },
  inputAmountField: {
    flex: 1,
    height: 45,
    fontSize: 18,
    paddingHorizontal: 10,
    color: '#333',
    borderRadius: 10,
    backgroundColor: '#fff',
    borderColor: '#d1d1d1',
    borderWidth: 1,
    marginLeft: 10,
  },
  bottomContainer: {
    flex: 2,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#f8f9fa',
  },
  button: {
    flex: 1,
    margin: 10,
    paddingVertical: 15,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#333',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  selected: {
    backgroundColor: '#dfe6e9',
    borderWidth: 1,
    borderColor: '#74b9ff',
  },
});

export default App;
