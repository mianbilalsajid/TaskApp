import { ScrollView, StyleSheet, Text, View } from "react-native";
import CardAndTitle from "../../Components/CardAndTitle";
import IncomeOutcome from "../../Components/UI/IncomeOutcome";
import MoneyCards from "../../Components/UI/MoneyCards";
import BottomTab from "../../Components/UI/BottomTab";
import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
function Summary({ active }) {
  const navigation = useNavigation();
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(active);
  const [active3, setActive3] = useState(active);

  function productPressHandler() {
    setActive1(true);
    setActive2(false);
    setActive3(false);
    navigation.navigate("Products");
    setActive1(false)
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
    <View style={{ justifyContent: "center" }}>
      <CardAndTitle />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <IncomeOutcome
          icon="trending-up-outline"
          type="Income"
          amount="250.00"
          color={true}
        />
        <IncomeOutcome
          icon="trending-down-outline"
          type="Outcome"
          amount="650.00"
        />
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <ScrollView
          style={{ paddingHorizontal: 10, paddingVertical: 10 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <MoneyCards icon="dollar" text="Savings" amount={"2485.00"} />
          <MoneyCards icon="exchange" text="Loan" amount={"875.78"} />
          <MoneyCards />
        </ScrollView>
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
    </View>
  );
}

export default Summary;

const styles = StyleSheet.create({
  bTab: {
    height: 50,
    justifyContent: "center",
    marginHorizontal: 30,
    borderRadius: 20,
    position: "absolute",
    top: "102%",
    width: "85%",
  },
});
