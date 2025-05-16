import { Text, StyleSheet, Pressable, View } from "react-native";
import { Colors } from "../../constants/GlobalStyles";

function Button({ children, onPress }) {
  return (
    <View style={styles.wrapper}>
      <Pressable onPress={onPress} style={({ pressed }) => [styles.container, pressed && styles.pressed]}>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    margin: 10,
    paddingHorizontal: 10,
  },
  container: {
    backgroundColor: Colors.golden,
    padding: 18,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: 'black',
  },
  pressed: {
    opacity: 0.7,
  },
});
