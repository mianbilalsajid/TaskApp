import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

function OtherCards() {
  function Card({ children, source, style }) {
    if (style === "add") {
      return (
        <Pressable style={({pressed}) => pressed? [styles.cardContainer2, {opacity: 0.5}] : styles.cardContainer2}>
          <FontAwesome6 name="add" color={"grey"} size={30} />
          {children}
        </Pressable>
      );
    }
    return (
      <Pressable style={({pressed}) => pressed? [styles.cardContainer, {opacity: 0.5}] : styles.cardContainer}>
        <LinearGradient
          colors={["black", "transparent"]}
          style={styles.rootBackground}
        >
          <ImageBackground
            source={source}
            resizeMode="cover"
            style={styles.rootBackground}
            imageStyle={styles.bgpic}
          >
            {children}
          </ImageBackground>
        </LinearGradient>
      </Pressable>
    );
  }
  return (
    <>
      <Text style={styles.text}>Other Cards</Text>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 30 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <Card style={"add"}>
          <Text style={{ fontSize: 16, color: "grey", paddingTop: 10 }}>
            Add More
          </Text>
        </Card>
        <Card source={require("../assets/greyDoo.png")}>
          <Text style={styles.text2}>Cash Card</Text>
          <Text style={styles.amount}><Text style={styles.usd}>USD</Text>45k</Text>
        </Card>
        <Card source={require("../assets/blueDoo.png")}>
          <Text style={styles.text2}>Internet Card</Text>
          <Text style={styles.amount}><Text style={styles.usd}>USD</Text>850</Text>
        </Card>
        <Card source={require("../assets/redDoo.png")}>
          <Text style={styles.text2}>Any Card</Text>
          <Text style={styles.amount}><Text style={styles.usd}>USD</Text>243</Text>
        </Card>
      </ScrollView>
    </>
  );
}

export default OtherCards;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    padding: 30,
    color: "white",
    fontWeight: "bold",
  },
  rootBackground: {
    flex: 1,
  },
  bgpic: {
    opacity: 0.15,
  },
  text2: {
    transform: [{ rotate: "90deg" }],
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 140,
    bottom: 50,
  },
  cardContainer: {
    height: 300,
    width: 120,
    borderRadius: 15,
    overflow: "hidden",
    marginRight: 10,
  },
  cardContainer2: {
    height: 300,
    width: 120,
    borderRadius: 15,
    overflow: "hidden",
    marginRight: 10,
    borderColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
  },
  amount: {
    color: 'white',
    fontSize: 22,
    position: 'absolute',
    bottom: 50,
    marginLeft: "25%",
    fontWeight: 'bold'
  },
  usd: {
    color: 'white',
    fontSize: 11,
    position: 'absolute',
    bottom: 56,
    marginLeft: "25%",
    fontWeight: 'bold'
  }
});
