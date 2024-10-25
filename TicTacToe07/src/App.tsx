import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Vibration,
  View,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import Icon from './components/Icons';
import { requestCameraPermission } from './components/Camera';
function App(): React.JSX.Element {
  const [isCross, setIsCross] = React.useState<boolean>(false);
  const [gameWinner, setGameWinner] = React.useState<string>('');
  const [gameState, setGameState] = React.useState(
    new Array(9).fill('empty', 0, 9),
  );
  requestCameraPermission();

  const reloadGame = () => {
    setIsCross(false);
    setGameWinner('');
    setGameState(new Array(9).fill('empty', 0, 9));
  };

  const checkIsWinner = () => {
    //  checking  winner of the game
    if (
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2] &&
      gameState[0] !== 'empty'
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[3] !== 'empty' &&
      gameState[3] === gameState[4] &&
      gameState[4] === gameState[5]
    ) {
      setGameWinner(`${gameState[3]} won the game! 🥳`);
    } else if (
      gameState[6] !== 'empty' &&
      gameState[6] === gameState[7] &&
      gameState[7] === gameState[8]
    ) {
      setGameWinner(`${gameState[6]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[3] &&
      gameState[3] === gameState[6]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[1] !== 'empty' &&
      gameState[1] === gameState[4] &&
      gameState[4] === gameState[7]
    ) {
      setGameWinner(`${gameState[1]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[5] &&
      gameState[5] === gameState[8]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[4] &&
      gameState[4] === gameState[8]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[4] &&
      gameState[4] === gameState[6]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (!gameState.includes('empty', 0)) {
      setGameWinner('Draw game... ⌛️');
    }
  };
  const onChangeItem = (itemNumber: number) => {
    Vibration.vibrate(100);
    if (gameWinner) {
      return Snackbar.show({
        text: gameWinner,
        backgroundColor: 'black',
        textColor: '#FFFFFF',
      });
    }
    if (gameState[itemNumber] === 'empty') {
      gameState[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    } else {
      return Snackbar.show({
        text: 'Item has already been filled',
        backgroundColor: 'red',
        textColor: '#FFF',
      });
    }
    checkIsWinner();
  };
  return (
    <SafeAreaView>
      <StatusBar />
      {gameWinner ? (
        <>
          <View style={[styles.playerInfo, styles.winnerInfo]}>
            <Text style={styles.gameBtnText}>{gameWinner}</Text>
          </View>
        </>
      ) : (
        <>
          <View
            style={[
              styles.playerInfo,
              isCross ? styles.playerX : styles.playerO,
            ]}>
            <Text style={styles.gameTurnTxt}>
              Playes {isCross ? 'X' : 'O'}'s Turn{' '}
            </Text>
          </View>
        </>
      )}

      <FlatList
        numColumns={3}
        data={gameState}
        style={styles.grid}
        renderItem={({item, index}) => (
          <Pressable
            key={index}
            style={styles.card}
            onPress={() => onChangeItem(index)}>
            <Icon name={item} />
          </Pressable>
        )}
      />
      <Pressable style={styles.gameBtn} onPress={reloadGame}>
        <Text style={styles.gameBtnText}>
          {gameWinner ? 'Start new game' : 'Reload the game'}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}const styles = StyleSheet.create({
  playerInfo: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 12,
    marginVertical: 16,
    marginHorizontal: 20,
    backgroundColor: '#333',
    elevation: 4, // Improved shadow on Android
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: '#000',
    shadowOpacity: 0.3, // Darker shadow
    shadowRadius: 3,
  },
  gameTurnTxt: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '700', // Increased weight for more emphasis
  },
  playerX: {
    backgroundColor: '#4CAF50', // Changed to a richer green
  },
  playerO: {
    backgroundColor: '#FFC107', // Changed to a softer yellow
  },
  grid: {
    margin: 16, // Added more margin for breathing space
  },
  card: {
    height: 110, // Slightly bigger squares
    width: '33.33%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#555', // Softer border color
    backgroundColor: '#F0F0F0', // Subtle background for contrast
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#555',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  winnerInfo: {
    borderRadius: 10,
    backgroundColor: '#4CAF50',
    shadowOpacity: 0.15,
    paddingVertical: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    elevation: 4,
  },
  winnerTxt: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  gameBtn: {
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 10,
    marginHorizontal: 40,
    marginTop: 20,
    backgroundColor: '#6200EE', // Bright purple for better contrast
    elevation: 3,
  },
  gameBtnText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});


export default App;
