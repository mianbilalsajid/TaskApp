import { StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from "../constants/GlobalStyles";

function ActivityItem ({categoryName, title, location, date, amount}) {
    return (
        <View style={styles.rootContainer}>
            <View style={{flexDirection: 'row', marginBottom: 18,}}>
            <View style = {styles.iconBox}>
                <Ionicons name={categoryName} color={Colors.golden} size={24}/>
            </View>
            <View>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.LocaDate}>
            <Text style={styles.location}>{location}</Text>
            <Text style={styles.middle}>|</Text>
            <Text style={styles.date}>{date}</Text>
            </View>
            </View>
            <Text style={styles.amount}>${amount}</Text>
            </View>
        </View>
  )
}

export default ActivityItem;

const styles = StyleSheet.create({
    iconBox: {
        backgroundColor: Colors.inputbox,
        borderRadius: 10,
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rootContainer: {
        // padding: 20,
        borderBottomWidth: 2,
        borderBottomColor: Colors.placeholderGrey,
        margin: 20,
    },
    title: {
        fontSize:  20,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 20,
    },
    LocaDate: {
        flexDirection: 'row'
    },
    location: {
        marginLeft: 20,
        fontSize: 13,
        color: Colors.placeholderGrey,
        paddingTop: 5,
    },
    date: {
        marginLeft: 15,
        fontSize: 13,
        color: Colors.placeholderGrey,
        paddingTop: 5,
    },
    middle: {
        marginLeft: 15,
        fontSize: 13,
        color: Colors.placeholderGrey,
        paddingTop: 5,
    },
    amount: {
        color: 'white',
        fontSize: 20,
        position: 'absolute',
        right: 10,
        top: 5,
    }
})