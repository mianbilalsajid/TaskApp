import { Text, View } from "react-native";
import BackButton from "./Buttons/BackButton";
import { StyleSheet } from "react-native";
import { Colors } from "../constants/GlobalStyles";
import IconButton from "./IconButton";
import { useNavigation } from "@react-navigation/native";

function Header ({children, text, style}) {
    const navigation = useNavigation();
    function notificationHandler () {
        navigation.navigate("Notification")
    }
    if (style === 1){

        return (
            <View style={styles.container}>
            <View style={styles.container2}>
            <BackButton onPress={() => ( navigation.goBack())}/>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: '2%'}}>

            <Text style={styles.text}>
                {text}
            </Text>
            <Text style={styles.headerText}>
                {children}
            </Text>
            </View>
            <View style={styles.notifyStyle}>
            <IconButton size={24} color="white" icon="notifications" number={3} onPress={notificationHandler}/>
            </View>
            </View>
        </View>
    )
} else if (style === 2) {
    return (

        <View style={styles.container3}>
    <View style={styles.container2}>
    <BackButton onPress={() => ( navigation.goBack())}/>
    <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: '2%'}}>

    <Text style={styles.text}>
        {text}
    </Text>
    <Text style={styles.headerText}>
        {children}
    </Text>
    </View>
    <View style={styles.notifyStyle}>
    <IconButton size={24} color="white" icon="notifications" number={3} onPress={notificationHandler}/>
    </View>
    </View>
</View>
    )
}
}

export default Header;

const styles = StyleSheet.create({
    container: {
        paddingTop: '18%',
        borderBottomColor: 'black',
        backgroundColor: Colors.header,
        height: "18%",
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        shadowColor: 'black',
        shadowRadius: 40,
        shadowOpacity: 0.4
    },
    container2: {
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold'
    },
    text: {
        color: 'white',
        fontSize: 18,
        marginHorizontal: 8,
    },
    notifyStyle: {
        position: 'absolute',
        right: 20,
        marginVertical: 15,
    }, 
    container3: {
        paddingTop: '18%',
        borderBottomColor: 'black',
        backgroundColor: Colors.bgColor,
        height: "15%",
    }
})