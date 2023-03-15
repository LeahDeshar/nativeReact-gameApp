import {React,useState} from 'react';
import {ImageBackground, StyleSheet,SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen.js';
import { LinearGradient } from 'expo-linear-gradient';
import img1 from './assets/img-1.jpg'
import GameScreen from './screens/GameScreen.js';
const App = () => {
  const [userNum, setuserNum] = useState();
  function pickNum(picked)
  {
    setuserNum(picked);
  }
  let screen = <StartGameScreen onPickNum={pickNum}/>
  if(userNum )
  {
    screen = <GameScreen/>
  }
  return (
 

    <LinearGradient colors={['#b3b3c7', '#44449a','#141578']} style={styles.rootScreen}>
     <ImageBackground source={img1} resizeMode={'cover'} style={styles.rootScreen} imageStyle={styles.backgroundImg}>
      {/* <StartGameScreen/> */}
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
  // backgroundColor: '#5e5e5e',
  // paddingBottom: 30
}  ,
backgroundImg:
{
  opacity: 0.5
},

});

export default App;
