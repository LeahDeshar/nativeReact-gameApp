import { View,Text,StyleSheet } from "react-native";


import Colors from '../../const/Colors';
function NumberContainer({children})
{
    console.log(children);
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}
export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.primaryL,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.primaryL,
        fontSize: 36,
        fontWeight: 'bold',
       
    }
})