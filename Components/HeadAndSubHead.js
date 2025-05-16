import { View, Text, StyleSheet } from "react-native";
function HeadAndSubHead ({title1, title2}) {
    return (
        <View style={styles.headingContainer}>
        <Text style={styles.title1}>
            {title1}
        </Text>
        <Text style={styles.title2}>
            {title2}
        </Text>
    </View>
    )
}

export default HeadAndSubHead;

const styles = StyleSheet.create({
    headingContainer: {
        padding: 20,
    },
    title1: {
        fontSize: 15,
        color: 'white',
        letterSpacing: 4,
    },
    title2: {
        fontSize:  28,
        color: 'white',
        fontWeight: 'bold'
    }
})