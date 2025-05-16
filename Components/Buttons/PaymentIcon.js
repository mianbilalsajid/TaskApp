import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../constants/GlobalStyles";

function PaymentIcon({ children, size, color, icon }) {
  return (
    // style={({ pressed }) => (pressed ? styles.pressed : null)}
    <Pressable>
      {({ pressed }) => (
        <View style={pressed ? styles.pressedcontainer : styles.container}>
          <Ionicons
            name={icon}
            size={size}
            color={pressed ? Colors.golden : color}
          />
          <Text style={pressed? styles.pressedText : styles.text}>{children}</Text>
        </View>
      )}
    </Pressable>
  );
}

export default PaymentIcon;

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: 90,
    borderRadius: 35,
    backgroundColor: Colors.bgColor,
    shadowColor: "black",
    shadowOpacity: 2.5,
    shadowRadius: 2,
    shadowOffset: { height: 1, width: 1 },
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  pressedcontainer: {
    height: 90,
    width: 90,
    borderRadius: 35,
    backgroundColor: Colors.bgColor,
    borderColor: Colors.golden,
    borderWidth: 2,
    shadowColor: "black",
    shadowOpacity: 2.5,
    shadowRadius: 2,
    shadowOffset: { height: 1, width: 1 },
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  text: {
    color: "white",
    marginTop: 5,
  },
  pressed: {
    opacity: 0.5,
  },
  pressedText: {
    color: Colors.golden,
    marginTop: 5,
  }
});
