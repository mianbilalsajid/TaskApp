import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Item from "./listItem";
import { useState } from "react";

function MenuList ({screen2}) {

    const [screen, setScreen] = useState();

    function summaryHandler() {
        return (
            setScreen('summary')
        )
    }

    screen2= screen;

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

        <View style={styles.container}>
            <Item onPress={summaryHandler}>Summary</Item>
            <Item>Activities</Item>
            <Item>Payment</Item>
            <Item>Transfer & Recieve</Item>
            <Item>Send Money</Item>
    </View>
        </ScrollView>
    )
}

export default MenuList;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5
    },
    container: {
        flexDirection: 'row',
        marginHorizontal: 12,
    }
})