import React, { useState } from 'react'
import { TextInput, View,StyleSheet, Alert } from 'react-native';
import PrimaryButtons from '../components/PrimaryButtons.js';
import Colors from '../const/Colors.js';
const StartGameScreen = ({onPickNum}) => {
  const [enterNum,setEnterNum] = useState('');

  function numberInput(input){
    setEnterNum(input);
  }
  function resetHandler()
  {
    setEnterNum('');
  }
  function confirmInput(){
    const choseNum = parseInt(enterNum);
    if(isNaN(choseNum) || choseNum <= 0 || choseNum > 99 || choseNum == '')
    {
      // Alert.alert('Invalid')
      Alert.alert('Invalid number',"Enter valid Number",[{text: 'Okay',style: 'destructive',onPress: resetHandler}]);
      return;
    }
    onPickNum(choseNum);
  }

  return (
    <View style={styles.inputContainer}>
        <TextInput style={styles.numberInput} maxLength={2} keyboardType={'number-pad'} 
        autoCapitalize={"none"}
        autoCorrect={false}
        onChangeText={numberInput}
        value={enterNum}
        />
        <View style={styles.btnsCon}>
          <View style={styles.btnCon}>
            <PrimaryButtons onPress={resetHandler}>Reset</PrimaryButtons>
          </View>
          <View style={styles.btnCon}>
            <PrimaryButtons onPress={confirmInput}>Confirm </PrimaryButtons>
          </View>
        </View>
    </View>
  )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: 
    {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 20,
        backgroundColor: '#17044a',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 6,
    
        // elevation: 5,
        // shadowColor: 'red',
        // shadowOffset: {width: 0,height: 2},
        // shadowRadius: 6,
        // shadowOpacity: 0.25,

        // borderWidth: 3,
        // borderColor: 'black',
        // borderRadius: 1,
    },
    borderSty:
    {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
    },
    numberInput: 
    {
      height: 50,
      width: 50,
      fontSize: 32,
      borderBottomColor: Colors.primary600,
      borderBottomWidth: 2,
      color: Colors.primary600,
      marginVertical: 8,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    btnsCon:
    {
      flexDirection: 'row',
    },
    btnCon: 
    {
      flex: 1
    }
})

