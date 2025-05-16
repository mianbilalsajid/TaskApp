import { Pressable, StyleSheet, Text } from "react-native";

function Item({children, onPress, active}) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      <Text style={active? styles.activeText: styles.text}>{children}</Text>
    </Pressable>
  );
}

export default Item;


const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5
    },
    text: {
        marginHorizontal: 8,
        color: 'grey',
        fontSize: 16
    },
    activeText: {
        color: 'white',
        fontSize: 15,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginHorizontal: 8,
        fontWeight: '600'
    }
})
