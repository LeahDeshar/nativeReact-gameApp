import {React,useState,useEffect} from 'react'
import { View,Text,StyleSheet,SafeAreaView,Alert, FlatList} from 'react-native'
import NumberContainer from '../components/game/NumberContainer';
import Cards from '../components/ui/Cards';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButtons from '../components/ui/PrimaryButtons';
import Title from '../components/ui/Title';
import {Ionicons} from '@expo/vector-icons';
import GuessLogItem from '../components/ui/GuessLogItem';

function generateRandomBetween(min,max,exclude)
{
    const randomNum = Math.floor(Math.random() * (max-min)) + min;

    if(randomNum === exclude)
    {
        return generateRandomBetween(min,max,exclude);
    }else 
    {
        return randomNum;
    }
}
let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({userNumber,onGameOver}) {
    const initialGuess = generateRandomBetween(1,100,userNumber);
    const [currentGuess,setCurrentGuess] = useState(initialGuess);
    const [guessRound, setGuessRound] = useState([initialGuess]);

    useEffect(() => {
     if(currentGuess === userNumber){
      onGameOver(guessRound.length);
     }
    }, [currentGuess,userNumber,onGameOver])
    
    useEffect(() => {
      minBoundary = 1;
      maxBoundary = 100;
    }, [])
    
    function nextGuessHandler(direction) {
        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber))
        {
            Alert.alert('Don\'t lie','You know this is wrong...',[{text: 'Sorry!',style: 'cancel'}])
            return;
        }
        if(direction === 'lower')
        {
            maxBoundary = currentGuess;
        }else 
        {
            minBoundary = currentGuess + 1;    
        }
        const newRanNumber =generateRandomBetween(minBoundary,maxBoundary,currentGuess);
        setCurrentGuess(newRanNumber)
        setGuessRound(prevRound => [newRanNumber,...prevRound])
    }

    const guessRoundLength = guessRound.length;
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Cards>
                <InstructionText style={styles.InstructionText}>Higher or Lower?</InstructionText>
                  <View style={styles.btnsCon}>
                      <View style={styles.btnCon}> 
                        <PrimaryButtons onPress={nextGuessHandler.bind(this,'lower')}>
                          <Ionicons name='md-add' size={24} color="black"/>
                        </PrimaryButtons>
                      </View>
                  </View>
                  <View style={styles.btnsCon}>
                      <View style={styles.btnCon}> 
                       <PrimaryButtons onPress={nextGuessHandler.bind(this,'greater')}>
                       <Ionicons name='md-remove' size={24} color="black"/>
                        
                       </PrimaryButtons>
                      </View>
                  </View>
                       
            </Cards>
                <View>
                  <FlatList data={guessRound} renderItem={(itemData)=><GuessLogItem roundNumber={guessRoundLength-itemData.index} guess={itemData.item}></GuessLogItem>} keyExtractor={(item)=> item}/>
                  </View>
        </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
       screen : 
      {
          flex: 1,
          padding: 24
      },
      InstructionText:
      {
        marginBottom: 12
      },
    btnsCon:
    {
      flexDirection: 'row',
    },
    btnCon: 
    {
      flex: 2
    }
    
})