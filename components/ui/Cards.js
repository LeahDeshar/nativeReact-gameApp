import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

function Cards({children}) {
  return (
    <View style={styles.card}>
       {children}
    </View>
  )
}

export default Cards;

const styles = StyleSheet.create({
   
      card: 
      {
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 6,
          marginBottom: 6,

          marginHorizontal: 24,
          padding: 20,
          backgroundColor: '#d0d0d0b3',
          borderRadius: 15,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 2,
          elevation: 6,
      }
    });