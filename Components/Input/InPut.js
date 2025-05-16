import { StyleSheet, TextInput, View } from "react-native";
import { Colors } from "../../constants/GlobalStyles";

function InPut({ children, changeText, value, keyboardType }) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={Colors.placeholderGrey}
        placeholder={children}
        onChangeText={changeText}
        style={styles.inputContainer}
        keyboardType={keyboardType}
        value={value}
      />
    </View>
  );
}

export default InPut;

const styles = StyleSheet.create({
  container: {
    height: 55,
    width: "86%",
    backgroundColor: Colors.bgColor,
    fontSize: 20,
    borderRadius: 13,
    marginVertical: 15,
    shadowColor: "black",
    shadowOpacity: 2.5,
    shadowRadius: 2,
    shadowOffset: { height: 1, width: 1 },
  },
  inputContainer: {
    height: "100%",
    width: "100%",
    fontSize: 20,
    padding: 10,
    color: "white",
  },
});