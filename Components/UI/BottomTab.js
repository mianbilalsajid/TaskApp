import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/GlobalStyles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

function BottomTab({
  active1,
  onPress1,
  active2,
  onPress2,
  active3,
  onPress3,
}) {
  return (
    <View style={styles.container}>
      {active1 ? (
        <Pressable onPress={onPress1} style={styles.activeIcon}>
          <MaterialCommunityIcons name="package" size={30} color={"black"} />
          <Text style={{ marginLeft: 5 }}>Products</Text>
        </Pressable>
      ) : (
        <Pressable onPress={onPress1} style={styles.icon}>
          <MaterialCommunityIcons name="package" size={30} color={"grey"} />
        </Pressable>
      )}
      {active2 ? (
        <Pressable onPress={onPress2} style={styles.activeIcon}>
          <FontAwesome6
            name="money-bill-trend-up"
            size={26}
            color={"black"}
          />
          <Text style={{ marginLeft: 5 }}>Invest</Text>
        </Pressable>
      ) : (
        <Pressable onPress={onPress2} style={styles.icon}>
          <FontAwesome6
            name="money-bill-trend-up"
            size={26}
            color={"grey"}
          />
        </Pressable>
      )}
      {active3 ? (
        <Pressable onPress={onPress3} style={styles.activeIcon}>
          <MaterialCommunityIcons name="wallet" size={30} color={"black"} />
          <Text style={{ marginLeft: 5 }}>Savings</Text>
        </Pressable>
      ) : (
        <Pressable onPress={onPress3} style={styles.icon}>
          <MaterialCommunityIcons name="wallet" size={30} color={"grey"} />
        </Pressable>
      )}
    </View>
  );
}

export default BottomTab;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.bgColor,
    width: "100%",
    height: "100%",
    borderRadius: 20,
    flexDirection: "row",
    padding: 10,
    zIndex: 10,
    alignSelf: "flex-start",
    position: "absolute",
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 2.5,
    shadowRadius: 2,
    shadowOffset: { height: 1, width: 1 },
  },
  rootContainer: {
    alignItems: "center",
    backgroundColor: "white",
    zIndex: 10,
    alignSelf: "flex-start",
  },
  icon: {
    width: "34%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  activeIcon: {
    width: "34%",
    height: 40,
    alignItems: "center",
    backgroundColor: Colors.golden,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 14,
  },
});
