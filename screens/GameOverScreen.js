import React from 'react'
import { View,Text,StyleSheet,SafeAreaView,Alert,Image} from 'react-native'
import Colors from '../const/Colors';
import img2 from '../assets/img-4.jpg'
import Title from '../components/ui/Title';
import PrimaryButtons from '../components/ui/PrimaryButtons';
function GameOverScreen({roundNumber,userNumber,onStartNewGame}) {
  return (
    <View style={styles.rootContainer}>

        <Title>GAME OVER!</Title>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={img2} />
        </View>
        <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundNumber}</Text> rounds to guess the number{' '}
        <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <PrimaryButtons onPress={onStartNewGame}>Start New Game</PrimaryButtons>
    </View>
  )
}

export default GameOverScreen


const styles = StyleSheet.create({
    rootContainer: 
    {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
      alignItems: 'center'
    },
    imageContainer: 
    {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primaryL,
        overflow: 'hidden',
        margin: 36
    },
    image:
    {
        width: '100%',
        height: '100%'
    },
    summaryText:
    {
        color: "white",
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 24
    },
    highlight: 
    {
        color: Colors.primary500
    }
});