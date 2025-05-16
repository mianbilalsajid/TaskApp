import { Pressable, StyleSheet, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from "../../constants/GlobalStyles";


function PhotoInput () {

    function addPhotoHandler () {
        return console.log("Pressed")
    }

    return (
        <View style={styles.container}>
        <Pressable onPress={addPhotoHandler} style={({pressed}) => pressed ? styles.buttonPress : null}>
            <Ionicons name="person" size={28} color={Colors.golden}/>
            <View style={styles.plusButton}>
            <Ionicons name="add-circle-sharp" size={16} color={Colors.golden}/>
            </View>
        </Pressable>
        </View>
    )
}

export default PhotoInput;
const styles= StyleSheet.create({
    container: {
        height: 75,
        width: 75,
        borderRadius: 15,
        backgroundColor: Colors.inputbox,
        shadowColor: Colors.golden,
        shadowOpacity: 0.05,
        shadowRadius: 15,
        shadowOffset: {height: 2, width: 0},
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    buttonPress: {
        opacity: 0.5
    },
    plusButton: {
        position: 'absolute',
        top: 30,
        left: 30,
    }
})
