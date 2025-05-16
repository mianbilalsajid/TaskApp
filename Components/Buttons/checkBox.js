import { View, Text } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { Colors } from "../../constants/GlobalStyles";

function CheckBox({ children }) {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={{ flexDirection: "row", alignItems: 'center' }}>
      <Checkbox
      style={{margin: 10}}
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? Colors.golden : undefined}
      />
     {children}
    </View>
  );
}

export default CheckBox;
