import React from 'react'
import { View,Text,StyleSheet,SafeAreaView} from 'react-native'
import Title from '../components/Title'

function generateRandomBetween(min,max,exclude)
{
    const randomNum = Math.floor(Math.random() * (max-min)) + min;

    if(randomNum)
    {
        return generateRandomBetween(min,max,exclude);
    }else 
    {
        return randomNum;
    }
}
function GameScreen() {
  return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <View>
                <Text>Higher or Lower?</Text>
                   {/* + - */}
            </View>
                <View><Text>LOG ROUNDS</Text></View>
        </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
    // inputContainer:
    // {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginTop: 100,
    //     marginHorizontal: 24,
    //     padding: 16,
    //     backgroundColor: 'blue',
    //     borderRadius: 8,
    //     elevation: 4,
    //     shadowColor: 'black',
    //     shadowOffset: {width: 0,height: 2},
    //     shadowRadius: 6,
    //     shadowOpacity: 0.25,
    // },
    // numberInput:
    // {
    //     height: 50,
    // },
    screen : 
    {
        flex: 1,
        padding: 24
    },
    
})