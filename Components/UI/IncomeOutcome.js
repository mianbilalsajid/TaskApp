import { StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from "../../constants/GlobalStyles";

function IncomeOutcome ({icon, type, amount, color}) {
    return (
        <View style={styles.container}>
            <View style={color? styles.container1 : styles.container4}>
                <View style={styles.container2}>
                    <Ionicons name={icon} color="white" size={20}/>
                </View>
            </View>
            <View style={styles.container3}>
            <Text style={styles.text}>
                {type}
            </Text>
            <Text style={styles.amount}>
               <Text style={styles.text2}>USD</Text> {amount}
            </Text>
            </View>
        </View>
    )
}

export default IncomeOutcome;

const styles = StyleSheet.create({
    container: {
        height: 65,
        width: 180,
        backgroundColor: Colors.bgColor,
        borderRadius: 18,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        shadowColor: "black",
        shadowOpacity: 2.5,
        shadowRadius: 2,
        shadowOffset: { height: 1, width: 1 },
        // marginLeft: 15,
    },
    container1: {
        height: 45,
        width: 45,
        borderRadius: 22.5,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container2: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: Colors.bgColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 16,
        letterSpacing: 2,
    },
    amount: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
    },
    container3: {
        paddingHorizontal: 10,
    },
    text2: {
        color: 'white',
        fontSize: 10,
    },
    container4: {
        height: 45,
        width: 45,
        borderRadius: 22.5,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
})