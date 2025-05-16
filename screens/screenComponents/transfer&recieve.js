import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import InPut from "../../Components/Input/InPut";
import Button from "../../Components/Buttons/Button";
import { useState } from "react";
import CustomDropDown from "../../Components/CustomDropDown";
import DropDownItem from "../../Components/DropDownItem";
import { useNavigation } from "@react-navigation/native";

function TransferAndRecieve() {
  const [amount, setAmount] = useState();
  const [fromOpen, setFromOpen] = useState(false);
  const [placeHolderbank, setplaceHolderbank] = useState("");
  const [bank, setBank] = useState();
  const navigation = useNavigation();
  const [toOpen, setToOpen] = useState(false);
  const [placeHolderTo, setplaceHolderTo] = useState("");
  const [to, setTo] = useState();
  const [tROpen, setTROpen] = useState(false);
  const [placeHolderTR, setplaceHolderTR] = useState("");
  const [tR, setTR] = useState();

  const fromData = [
    <DropDownItem
      onPress={() => {
        setBank("Shaky Bank");
        setplaceHolderbank("Shaky Bank");
        setFromOpen(false);
      }}
      key="Shaky Bank"
    >
      Shaky Bank
    </DropDownItem>,
    <DropDownItem
      onPress={() => {
        setBank("Current Account");
        setplaceHolderbank("Current Account");
        setFromOpen(false);
      }}
      key="Current Account"
    >
      Current Account
    </DropDownItem>,
    <DropDownItem
      onPress={() => {
        setBank("Bank b ODA");
        setplaceHolderbank("Bank b ODA");
        setFromOpen(false);
      }}
      key="Bank b ODA"
    >
      Bank b ODA
    </DropDownItem>,
    <DropDownItem
      onPress={() => {
        setBank("Credit Card");
        setplaceHolderbank("Credit Card");
        setFromOpen(false);
      }}
      key="Credit Card"
    >
      Credit Card
    </DropDownItem>,
      <DropDownItem
      onPress={() => {
        navigation.navigate("AddAccount");
      }}
      key="add"
    >Add Others</DropDownItem>,

  ];

  const toData = [
    <DropDownItem
      onPress={() => {
        setTo("Current Account");
        setplaceHolderTo("Current Account");
        setToOpen(false);
      }}
      key="Current Account"
    >
      Current Bank
    </DropDownItem>,
    <DropDownItem
      onPress={() => {
        setTo("ODA Account");
        setplaceHolderTo("ODA Account");
        setToOpen(false);
      }}
      key="ODA Account"
    >
      ODA Account
    </DropDownItem>,
    <DropDownItem
      onPress={() => {
        setTo("Prepared Card");
        setplaceHolderTo("Prepared Card");
        setToOpen(false);
      }}
      key="Prepared Card"
    >
      Prepared Card
    </DropDownItem>,
    <DropDownItem
      onPress={() => {
        setTo("Bills Payment");
        setplaceHolderTo("Bills Payment");
        setToOpen(false);
      }}
      key="Bills Payment"
    >
      Bills Payment
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

  function toFromHandler() {
    if (toOpen === false) {
      setToOpen(true);
    } else {
      setToOpen(false);
      setplaceHolderTo("");
      setTo("");
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
      placeHolderTo === "" ||
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
      setplaceHolderTo("");
      setplaceHolderbank("");
      console.log(amount);
      console.log(bank);
      console.log(to);
      console.log(tR);
      setAmount("");
    }
  }

  return (
    <>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View style={styles.dropDown}>
          <CustomDropDown
            onPress={openFromHandler}
            placeHolder="From"
            data={fromData}
            open={fromOpen}
            text={placeHolderbank}
          />
        </View>
        <View style={styles.dropDown}>
          <CustomDropDown
            onPress={toFromHandler}
            placeHolder="To"
            data={toData}
            open={toOpen}
            text={placeHolderTo}
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
        <View style={{ width: "91%", alignItems: "center", marginTop: 15 }}>
          <Button onPress={sendHandler}>Send</Button>
        </View>
      </ScrollView>
    </>
  );
}

export default TransferAndRecieve;

const styles = StyleSheet.create({
  dropDown: {
    width: "100%",
    alignItems: "center",
    marginTop: 15,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginRight: "50%",
    letterSpacing: 2,
  },
});
