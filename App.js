import {React,useState,useEffect} from 'react';
import {ImageBackground, StyleSheet,SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen.js';
import { LinearGradient } from 'expo-linear-gradient';
import img1 from './assets/img-3.jpg'
import GameScreen from './screens/GameScreen.js';
import GameOverScreen from './screens/GameOverScreen.js';
const App = () => {
  const [userNum, setuserNum] = useState();
  const [gameIsOver, setgameIsOver] = useState(true);
  const [guess, setGuess] = useState(0);

  function pickNum(picked)
  {
    setuserNum(picked);
    setgameIsOver(false);
  }
  function gameOverHandler(numberOfRounds)
  {
    setgameIsOver(true);
    setGuess(numberOfRounds);
  }
  function StartNewGame()
  {
    setuserNum(null);
    setGuess(0)
  }
  let screen = <StartGameScreen onPickNum={pickNum}/>
  if(userNum )
  {
    screen = <GameScreen userNumber={userNum} onGameOver={gameOverHandler}/>
  }
  if (gameIsOver && userNum)
  {
    screen = <GameOverScreen userNumber={userNum} roundNumber={guess} onStartNewGame={StartNewGame}/>
  }


  return (
 

    <LinearGradient colors={['#5474dcab', '#020009','#f2e3ab']} style={styles.rootScreen}>
     <ImageBackground source={img1} resizeMode={'cover'} style={styles.rootScreen} imageStyle={styles.backgroundImg}>
      <SafeAreaView style={styles.rootScreen}>
      {screen}
      </SafeAreaView>
     </ImageBackground>

    </LinearGradient>


  
  );
};

const styles = StyleSheet.create({
rootScreen: 
{
  flex: 1,
}  ,
backgroundImg:
{
  opacity: 0.6
},

});

export default App;
