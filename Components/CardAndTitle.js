import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "./Card";
function CardAndTitle() {
  return (
    <>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.amountContainer}>
          <Text style={styles.title}>Total Balance</Text>
          <Text style={styles.amount}>$25,627.6</Text>
        </View>
        <Image style={styles.image} source={require("../assets/trend2.png")} />
      </View>
      <View style={styles.card}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Card/>
        </ScrollView>
      </View>
    </>
  );
}

export default CardAndTitle;

const styles = StyleSheet.create({
    card: {
      padding: 2,
      alignItems: "center",
    },
    title: {
      color: "white",
      fontSize: 16,
    },
    amount: {
      fontSize: 28,
      fontWeight: "bold",
      color: "white",
    },
    amountContainer: {
      paddingLeft: 28,
      paddingVertical: 18,
    },
    image: {
      height: 40,
      width: 60,
      marginTop: 20,
      marginLeft: 15,
    }
  });