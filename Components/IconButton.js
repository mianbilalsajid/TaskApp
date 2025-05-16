import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
function IconButton({
  icon,
  color,
  size,
  onPress,
  number,
  icon2,
  icon3,
  onPress2,
  onpress3,
}) {
  if (number === 1) {
    return (
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={onPress}
      >
        <View style={{ flex: 1 }}>
          <Ionicons name={icon} color={color} size={size} />
        </View>
      </Pressable>
    );
  } else if (number === 2) {
    return (
      <>
        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.pressed,]}
          onPress={onPress}
        >
          <View style={[styles.icon,]}>
            <Ionicons name={icon} color={color} size={size} />
          </View>
        </Pressable>
        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.pressed]}
          onPress={onPress2}
        >
          <View style={styles.icon}>
            <Ionicons name={icon2} color={color} size={size} />
          </View>
        </Pressable>
        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.pressed]}
          onPress={onpress3}
        >
          <View style={styles.icon}>
            <Ionicons name={icon3} color={color} size={size} />
          </View>
        </Pressable>
      </>
    );
  } else if (number === 3) {
    return (
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onPress}
      >
        <View style={{ flex: 1 }}>
          <Ionicons name={icon} color={color} size={size} />
        </View>
      </Pressable>
    );
  } else if (number === 4) {
    return(

      <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
      >
      <View style={{ flex: 1, top: 5, marginRight: 8,}}>
        <MaterialCommunityIcons name={icon} color={color} size={size} />
      </View>
    </Pressable>
    )
  }
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    alignItems: "center",
    marginHorizontal: 2,
    marginTop: 10,
    paddingTop: "10%",
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    marginRight: 4,
    flex: 1,
  },
});
