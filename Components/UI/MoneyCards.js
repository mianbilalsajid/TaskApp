import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/GlobalStyles";
import FontAwesome from "@expo/vector-icons/FontAwesome";

function MoneyCards({ icon, text, amount }) {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <FontAwesome name={icon} color="white" size={30} />
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.usd}>USD</Text>
        <Text style={styles.amount}>{amount}</Text>
      </View>
    </View>
  );
}

export default MoneyCards;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 180,
    backgroundColor: Colors.bgColor,
    shadowColor: "black",
    shadowOpacity: 2.5,
    shadowRadius: 2,
    shadowOffset: { height: 1, width: 1 },
    borderRadius: 18,
    marginRight: 15,
  },
  container2: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 19,
    letterSpacing: 3,
    paddingLeft: 15,
    fontWeight: "bold",
  },
  usd: {
    fontSize: 14,
    color: "white",
    fontWeight: "600",
    marginRight: 5,
    marginBottom: 6,
  },
  amount: {
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
    marginBottom: 10,
},
amountContainer: {
    marginHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
  }
});
