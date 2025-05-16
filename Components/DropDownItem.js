import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import iconSet from "@expo/vector-icons/build/Fontisto";

function DropDownItem({ children, onPress, itemkey }) {
  return (
    <Pressable onPress={onPress} key={itemkey}>
  {({ pressed }) => (
    <View style={styles.container}>
      <Text style={pressed ? styles.activetext : styles.text}>
        {children}
      </Text>
    </View>
  )}
</Pressable>

  );
}

export default DropDownItem;

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flexDirection: "row",
  },
  text: {
    color: "grey",
    fontSize: 20,
  },
  icon: {
    position: "absolute",
    right: 10,
    paddingVertical: 15,
  },
  activetext: {
    color: "white",
    fontSize: 20,
  },
});
