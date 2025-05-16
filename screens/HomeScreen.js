import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { logout } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import Item from "../Components/listItem";
import { useEffect, useState } from "react";
import Summary from "./screenComponents/Summary";
import Activities from "./screenComponents/activities";
import SendMoney from "./screenComponents/sendMoney";
import TransferAndRecieve from "./screenComponents/transfer&recieve";
import Payment from "./screenComponents/payment";

function HomeScreen({ navigation }) {
  const [renderedItem, setRenderedItem] = useState();

  function personalScreen() {
    navigation.navigate("Profile");
  }

  const dispatch = useDispatch();
  function logOutHandler() {
    dispatch(logout());
  }

  const [screen, setScreen] = useState("summary");
  const [active, setactive] = useState(false);
  const [active2, setactive2] = useState(false);
  const [active3, setactive3] = useState(false);
  const [active4, setactive4] = useState(false);
  const [active5, setactive5] = useState(false);

  function summaryHandler() {
    return setScreen("summary");
  }

  function activitiesHandler() {
    return setScreen("activities");
  }
  function sendMoneyHandler() {
    return setScreen("sendMoney");
  }
  function paymentHandler() {
    return setScreen("paymentHandler");
  }
  function transsendHandler() {
    return setScreen("TransferMoney");
  }

  useEffect(() => {
    switch (screen) {
      case "summary":
        setRenderedItem(<Summary active={false} />);
        setactive2(false);
        setactive(true);
        setactive3(false);
        setactive4(false);
        setactive5(false);
        break;
      case "activities":
        setRenderedItem(<Activities />);
        setactive2(true);
        setactive(false);
        setactive3(false);
        setactive4(false);
        setactive5(false);
        break;
      case "sendMoney":
        setRenderedItem(<SendMoney />);
        setactive2(false);
        setactive(false);
        setactive3(true);
        setactive4(false);
        setactive5(false);
        break;
      case "paymentHandler":
        setRenderedItem(<Payment />);
        setactive2(false);
        setactive(false);
        setactive3(false);
        setactive4(true);
        setactive5(false);
        break;
      case "TransferMoney":
        setRenderedItem(<TransferAndRecieve />);
        setactive2(false);
        setactive(false);
        setactive3(false);
        setactive4(false);
        setactive5(true);
        break;
    }
  }, [screen, setRenderedItem]);

  return (
    <>
      <SafeAreaView style={{ marginTop: "20%" }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          bounces={false}
        >
          <View style={styles.container}>
            <Item active={active} onPress={summaryHandler}>
              Summary
            </Item>
            <Item active={active2} onPress={activitiesHandler}>
              Activities
            </Item>
            <Item active={active4} onPress={paymentHandler}>
              Payment
            </Item>
            <Item active={active5} onPress={transsendHandler}>
              Transfer & Recieve
            </Item>
            <Item active={active3} onPress={sendMoneyHandler}>
              Send Money
            </Item>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={{ flex: 1 }}>
        {screen === "sendMoney" ? (
          <SendMoney onShowActivities={activitiesHandler} />
        ) : (
          renderedItem
        )}
      </View>
    </>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  container: {
    flexDirection: "row",
    marginHorizontal: 16,
    flex: 1,
  },
});
