import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/GlobalStyles";

function Card() {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/card2.png")}
          style={{ flex: 1, opacity: 0.5 }}
        >
          <Text style={styles.bankName}>Trust Bank</Text>
          <View style={styles.cardNumberConatiner}>
            <Text style={styles.cardNumber}>1111</Text>
            <Text style={styles.cardNumber}>1111</Text>
            <Text style={styles.cardNumber}>1111</Text>
            <Text style={styles.cardNumber}>1111</Text>
          </View>
          <View style={styles.cardDetailContainer}>
          <Text style={styles.cardDetail}>Card Holder</Text>
          <Text style={styles.cardDetail}>Balance</Text>
          <Text style={styles.cardDetail}>Valid Through</Text>

          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.name}>Bilal Sajid</Text>
            <Text style={styles.balance}>8783.8</Text>
            <Text style={styles.validDate}>08/30</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/card2.png")}
          style={{ flex: 1, opacity: 0.5 }}
        >
          <Text style={styles.bankName}>Trust Bank</Text>
          <View style={styles.cardNumberConatiner}>
            <Text style={styles.cardNumber}>1111</Text>
            <Text style={styles.cardNumber}>1111</Text>
            <Text style={styles.cardNumber}>1111</Text>
            <Text style={styles.cardNumber}>1111</Text>
          </View>
          <View style={styles.cardDetailContainer}>
          <Text style={styles.cardDetail}>Card Holder</Text>
          <Text style={styles.cardDetail}>Balance</Text>
          <Text style={styles.cardDetail}>Valid Through</Text>

          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.name}>Bilal Sajid</Text>
            <Text style={styles.balance}>8783.8</Text>
            <Text style={styles.validDate}>08/30</Text>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

export default Card;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: "45%",
    borderRadius: 25,
    overflow: "hidden",
    marginHorizontal: 20,
    backgroundColor: "black",
  },
  bankName: {
    color: Colors.golden,
    position: "absolute",
    padding: 25,
    right: 5,
    fontWeight: "bold",
    fontSize: 16,
  },
  cardNumberConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "27%"
  },
  cardNumber: {
    marginHorizontal: 20,
    fontSize: 18,
    color: 'white'
  },
  cardDetailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  cardDetail: {
    fontSize: 10,
    color: 'white',
    marginHorizontal: 22,
  },
  name: {
    position: 'absolute',
    top: 5,
    fontSize: 16,
    color: 'white',
    marginLeft: 25,
  },
  balance: {
    position: 'absolute',
    top: 5,
    fontSize: 16,
    color: 'white',
    marginLeft: 127,
  },
  validDate: {
    position: 'absolute',
    top: 5,
    fontSize: 16,
    color: 'white',
    marginLeft: 210,
  }
});
