import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/GlobalStyles";
import { Ionicons } from "@expo/vector-icons";

function IconTextButton({ children, icon, onPress, number, icon2, onPress2 }) {
  if (number === 1) {
    return (
        <View style={styles.rootContainer}>
          <Ionicons name={icon} size={29} color={Colors.golden} />
          <Text style={styles.text}>{children}</Text>
          <View style={{ right: 15, position: "absolute" }}>
          <Pressable
            onPress={onPress2}
            style={({ pressed }) => pressed && styles.pressed}
          >

              <Ionicons name={icon2} size={29} color={Colors.golden} />
          </Pressable>
          </View>
        </View>
    );
  } else {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={styles.rootContainer}>
          <Ionicons name={icon} size={29} color={Colors.golden} />
          <Text style={styles.text}>{children}</Text>
        </View>
      </Pressable>
    );
  }
}

export default IconTextButton;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    backgroundColor: Colors.inputbox,
    marginHorizontal: 22,
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    marginVertical: 5,
  },
  text: {
    fontSize: 20,
    color: "white",
    marginHorizontal: 40,
  },
  pressed: {
    opacity: 0.5,
  },
});
