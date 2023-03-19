import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import Colors from '../../const/Colors'

function GuessLogItem({roundNumber,guess}) {
  return (
    <View style={styles.listItem}>
        <Text>#{roundNumber}</Text>
        <Text>Opponent's Guess: {guess}</Text>

    </View>
  )
}

export default GuessLogItem

const styles = StyleSheet.create({
listItem: 
{
    // borderColor: Colors.primary500,
    // borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    opacity: 0.6,
    marginVertical: 8,
    backgroundColor: Colors.primaryL,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0,height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 3
}
})