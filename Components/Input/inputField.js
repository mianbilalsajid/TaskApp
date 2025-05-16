import { TextInput, View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../constants/GlobalStyles";
import { useState, useEffect } from "react";

function InputField({ icon, children, size, color, type, textChange}) {
  const [inputType, setInputType] = useState("default");
  const [isSecure, setIsSecure] = useState(false);
  const [isCapatalize, setisCapatalize] = useState("sentences")

  useEffect(() => {
    switch (type) {
      case 1:
        setInputType("default");
        setIsSecure(false);
        break;
      case 2:
        setInputType("number-pad");
        setIsSecure(false);
        break;
      case 3:
        setInputType("email-address");
        setIsSecure(false);
        setisCapatalize('none')
        break;
      case 4:
        setInputType("default");
        setIsSecure(true); // For password
        break;
      default:
        setInputType("default");
        setIsSecure(false);
    }
  }, [type]);

  return (
    <View style={styles.rootContainer}>
      <Ionicons name={icon} size={size} color={color} />
      <TextInput
        style={styles.inputContainer}
        placeholder={children}
        placeholderTextColor="#888B90"
        keyboardType={inputType}
        secureTextEntry={isSecure}
        onChangeText={textChange}
        autoCapitalize={isCapatalize}
        // autoCapitalize={isCapatalize}
      />
    </View>
  );
}

export default InputField;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    backgroundColor: Colors.inputbox,
    margin: 14,
    shadowColor: Colors.golden,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { height: -2, width: -2 },
    borderRadius: 20,
    padding: 15,
    flex: 1,
  },
  inputContainer: {
    color: "white",
    marginHorizontal: 15,
    flex: 1,
    fontSize: 16,
    backgroundColor: Colors.inputbox,
  },
});
