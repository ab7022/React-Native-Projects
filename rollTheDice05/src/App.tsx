import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';
import DiceOne from './images/One.png';
import DiceTwo from './images/Two.png';
import DiceThree from './images/Three.png';
import DiceFour from './images/Four.png';
import DiceFive from './images/Five.png';
import DiceSix from './images/Six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;
const Dice = ({imageUrl}: DiceProps) => {
  return (
    <View style={styles.diceContainer}>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  );
};

function App() {
  const [diseImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const [currentNumber, setCurrentNumber] = useState<number>(1);
  const rollDiceOnTap = () => {
    const randomNumber = Math.round(Math.random() * 5) + 1;
    if (currentNumber === randomNumber || randomNumber === 0) {
      rollDiceOnTap();
      return;
    }
    console.log(randomNumber);
    Vibration.vibrate(50);
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        break;
    }
    setCurrentNumber(randomNumber);
  };
  return (
    <View style={styles.container}>
      <Dice imageUrl={diseImage} />
      <TouchableOpacity onPress={rollDiceOnTap} style={styles.btn}>
        <Text style={styles.rollDiceBtnText}>Roll Dice</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF2F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  btn: {
    marginTop: 20,
    backgroundColor: 'blue',
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
