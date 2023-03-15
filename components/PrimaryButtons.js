import React from 'react'
import { Pressable, Text, View,StyleSheet } from 'react-native'
import Colors from '../const/Colors'
function PrimaryButtons({children,onPress}) {

  return (
    <View style={styles.btnOuterContainer}>
    <Pressable style={({pressed}) =>pressed ? [styles.btnInnerContainer,styles.pressed]: styles.btnInnerContainer} onPress={onPress} 
    android_ripple={{color: '#4550b05e'}}>
        <Text style={styles.btnText}>{children}</Text>
    </Pressable>
    </View>
  )
}

export default PrimaryButtons;


const styles = StyleSheet.create({
  btnOuterContainer:
  {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
    
  },
  btnInnerContainer: 
  {
    backgroundColor: '#f8f8f88f',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
     
  },
  btnText: 
  {
    // color: '#090039',
    color: Colors.primary600,
    textAlign: 'center'
  },
  pressed: 
  {
    opacity: 0.75,
  }
});