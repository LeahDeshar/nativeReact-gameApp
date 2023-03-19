import React from 'react'
import { Text,StyleSheet,View } from 'react-native'
import Colors from '../../const/Colors';
function InstructionText({children,style}) {
  return <Text style={[styles.instructionText,style]}>{children}</Text>
}

export default InstructionText;
const styles = StyleSheet.create({
   
      instructionText: 
      {
        color: Colors.primary600,
        fontSize: 24,
      },
    });