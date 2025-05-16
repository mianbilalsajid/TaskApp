import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import CustomDropDown from "../../Components/CustomDropDown";
import DropDownItem from "../../Components/DropDownItem";
import { useState } from "react";
import InPut from "../../Components/Input/InPut";
import { Colors } from "../../constants/GlobalStyles";
import CheckBox from "../../Components/Buttons/checkBox";
import Ionicons from "@expo/vector-icons/Ionicons";
import Button from "../../Components/Buttons/Button";

function SendMoney({ onShowActivities }) {
  const [bank, setBank] = useState();
  const [placeHolderbank, setplaceHolderbank] = useState("");
  const [fromOpen, setFromOpen] = useState(false);
  const [amount, setAmount] = useState();
  const [tROpen, setTROpen] = useState(false);
  const [placeHolderTR, setplaceHolderTR] = useState("");
  const [tR, setTR] = useState();

  const fromData = [
    <DropDownItem
      onPress={() => {
        setBank("WesternsUnion");
        setplaceHolderbank("Westerns Union");
        setFromOpen(false);
      }}
      key="Westerns Union"
    >
      Westerns Union
    </DropDownItem>,
    <DropDownItem
      onPress={() => {
        setBank("TransferWise");
        setplaceHolderbank("Transfer Wise");
        setFromOpen(false);
      }}
      key="Transfer Wise"
    >
      Transfer Wise
    </DropDownItem>,
    <DropDownItem
      onPress={() => {
        setBank("paypal");
        setplaceHolderbank("PayPal");
        setFromOpen(false);
      }}
      key="payPal"
    >
      PayPal
    </DropDownItem>,
  ];

  const tRData = [
    <DropDownItem
      onPress={() => {
        setTR("Personal");
        setplaceHolderTR("Personal");
        setTROpen(false);
      }}
      key="Personal"
    >
      Personal
    </DropDownItem>,
    <DropDownItem
      onPress={() => {
        setTR("Others");
        setplaceHolderTR("Others");
        setTROpen(false);
      }}
      key="Others"
    >
      Others
    </DropDownItem>,
  ];

  function openFromHandler() {
    if (fromOpen === false) {
      setFromOpen(true);
    } else {
      setFromOpen(false);
      setplaceHolderbank("");
      setBank("");
    }
  }

  function tRFromHandler() {
    if (tROpen === false) {
      setTROpen(true);
    } else {
      setTROpen(false);
      setplaceHolderTR("");
      setTR("");
    }
  }

  function amountHandler(enteredValue) {
    setAmount(enteredValue);
  }

  function sendHandler() {
      if (
        placeHolderTR === "" ||
        placeHolderbank === "" ||
        amount === "0" ||
        amount === undefined || 
        isNaN(Number(amount)) || 
        amount === ""
      ) {
        Alert.alert(
          "Missing Information!",
          "Please Fill in All the Details CareFully!!",
          [
            {
              text: "Try Again",
              style: "cancel",
            },
          ]
        );
      } else {
        setplaceHolderTR("");
        setplaceHolderbank("");
        console.log(amount);
        console.log(bank);
        console.log(tR);
        setAmount("");
      }
    }

  return (
    <ScrollView>
      <View style={styles.searchConatiner}>
        <InPut>Search</InPut>
        <Pressable onPress={onShowActivities} style={styles.button}>
          <Text style={{ letterSpacing: 3.5, fontWeight: "300" }}>Recent</Text>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Activities</Text>
        </Pressable>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.dropDown}>
          <CustomDropDown
            onPress={openFromHandler}
            placeHolder="From"
            data={fromData}
            open={fromOpen}
            text={placeHolderbank}
          />
        </View>
        <Text style={styles.text}>Enter Amount</Text>
        <InPut changeText={amountHandler} value={amount} keyboardType={"numbers-and-punctuation"}>
          USD
        </InPut>
        <View style={styles.dropDown}>
          <CustomDropDown
            onPress={tRFromHandler}
            placeHolder="Transfer Reason"
            data={tRData}
            open={tROpen}
            text={placeHolderTR}
          />
        </View>
        <View style={styles.dropDown}>
          <Pressable style={({pressed}) => pressed? [styles.container, {opacity: 0.5}] : styles.container}>
            <Text style={styles.placeHolder}>Add Message</Text>
            <View style={styles.icon}>
              <Ionicons
                name={"add-circle"}
                size={24}
                color="grey"
              />
            </View>
          </Pressable>
        </View>
        <CheckBox>
          <Text style={styles.checkBox}>
            Mark it if you need Invoice of Payment
          </Text>
        </CheckBox>
        <View style={{ width: "91%", alignItems: "center", marginTop: 15 }}>
        <Button onPress={sendHandler}>Send</Button>
        </View>
      </View>
    </ScrollView>
  );
}

export default SendMoney;

const styles = StyleSheet.create({
  button: {
    height: 55,
    width: 100,
    backgroundColor: Colors.golden,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },
  searchConatiner: {
    marginLeft: "16%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "68%",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginRight: "50%",
    letterSpacing: 2,
  },
  dropDown: {
    width: "100%",
    alignItems: "center",
    marginTop: 15,
  },
  checkBox: {
    fontSize: 14,
    color: "grey",
    textAlign: "center",
  },
  container: {
    backgroundColor: "#5C5858",
    alignItems: "center",
    height: 55,
    width: "86%",
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 15,
    shadowColor: "black",
    shadowOpacity: 2.5,
    shadowRadius: 2,
    shadowOffset: { height: 1, width: 1 },
  },
  icon: {
    position: "absolute",
    right: 15,
  },
  placeHolder: {
    color: "grey",
    fontSize: 20,
    padding: 15,
  },
});
