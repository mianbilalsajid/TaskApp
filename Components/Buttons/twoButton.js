import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/GlobalStyles";

function TwoButton({
  text,
  text2,
  active,
  onPress,
  onPress1,
  active2,
  type,
  text3,
  active3,
  onPress3,
}) {
  if (type === 1) {
    return (
      <View style={styles.rootConatiner}>
        <Pressable
          onPress={onPress}
          style={active ? styles.buttonactive : styles.button}
          >
          <Text style={active ? styles.textActive : styles.text}>{text}</Text>
        </Pressable>
        <Pressable
          onPress={onPress1}
          style={active2 ? styles.buttonactive : styles.button}
          >
          <Text style={active2 ? styles.textActive : styles.text}>{text2}</Text>
        </Pressable>
      </View>
    );
  } else if (type === 2) {
    return (
      <View style={styles.rootConatiner}>
          <Pressable
            onPress={onPress}
            style={active ? styles.buttonactive : styles.button}
          >
            <Text style={active ? styles.textActive : styles.text}>{text}</Text>
          </Pressable>
          <Pressable
            onPress={onPress1}
            style={active2 ? styles.buttonactive : styles.button}
          >
            <Text style={active2 ? styles.textActive : styles.text}>
              {text2}
            </Text>
          </Pressable>
          <Pressable
            onPress={onPress3}
            style={active3 ? styles.buttonactive : styles.button}
          >
            <Text style={active3 ? styles.textActive : styles.text}>
              {text3}
            </Text>
          </Pressable>
      </View>
    );
  }
}

export default TwoButton;

const styles = StyleSheet.create({
  rootConatiner: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    height: 45,
    backgroundColor: Colors.inputbox,
    width: 350,
    borderRadius: 10,
    padding: 5,
  },
  button: {
    borderColor: "black",
    flex: 1,
    backgroundColor: Colors.inputbox,
    borderRadius: 10,
  },
  text: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    textAlign: "center",
    color: "grey",
  },
  buttonactive: {
    backgroundColor: Colors.placeholderGrey,
    borderRadius: 5,
    flex: 1,
  },
  textActive: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    textAlign: "center",
    color: "white",
//    fontWeight: 'bold'
  },
  buttonConainer: {
    backgroundColor: Colors.inputbox,
    height: 30,
  },
});
