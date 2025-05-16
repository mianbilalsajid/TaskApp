import { Pressable, View, Text, Switch, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../constants/GlobalStyles";
import { useState } from "react";

function ToggleSwitch({ icon, children, size, color }) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.rootContainer}>
        <Ionicons name={icon} size={size} color={color} />
        <Text style={styles.text}>{children}</Text>
        <Switch
          trackColor={{ false: "#767577", true: Colors.placeholderGrey}}
          thumbColor={isEnabled ? Colors.golden : "grey"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
    </View>
  );
}

export default ToggleSwitch;

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.inputbox,
        margin: 14,
        shadowColor: Colors.golden,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowOffset: {height: -2, width: -2},
        borderRadius: 20,
        padding: 15,
        flex: 1,
    },
    text: {
        fontSize: 18,
        color: 'white',
        marginLeft: 18,
        flex: 1,
    }
})
