import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import CardAndTitle from "../Components/CardAndTitle";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import BottomTab from "../Components/UI/BottomTab";
import OtherCards from "../Components/OtherCards";

function Products() {
  const navigation = useNavigation();
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  function productPressHandler() {
    setActive1(true);
    setActive2(false);
    setActive3(false);
  }
  function investPressHandler() {
    setActive1(false);
    setActive2(true);
    setActive3(false);
  }
  function savingsPressHandler() {
    setActive1(false);
    setActive2(false);
    setActive3(true);
  }

  return (
    <SafeAreaView style={{ marginTop: "27%", flex: 1,}}>
      <View>
        <CardAndTitle />
      </View>
      <View style={styles.bTab}>
        <BottomTab
          onPress1={productPressHandler}
          active1={active1}
          onPress2={investPressHandler}
          active2={active2}
          onPress3={savingsPressHandler}
          active3={active3}
        />
      </View>
      <OtherCards/>
    </SafeAreaView>
  );
}

export default Products;

const styles = StyleSheet.create({
  bTab: {
    height: 50,
    justifyContent: "center",
    marginHorizontal: 30,
    borderRadius: 20,
    position: "absolute",
    width: "85%",
    bottom: 31,
  },
});