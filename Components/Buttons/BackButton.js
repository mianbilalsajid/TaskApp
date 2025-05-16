import { Pressable, StyleSheet, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

function BackButton ({onPress}) {
return( 
    <View style={styles.container}>
        <Pressable onPress={onPress}>
        <Ionicons name="arrow-back-circle-sharp" size={26} color="white" />
        </Pressable>
    </View>
)
}

export default BackButton;

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 50,
        borderRadius: 25,
        alignContent: "center",
        alignSelf: "flex-start",
        zIndex: 15,
        position: "absolute",
        left: 18,
        margin: 12
    }
})