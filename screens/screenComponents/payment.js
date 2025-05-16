import { StyleSheet, Text, View } from "react-native";
import PaymentIcon from "../../Components/Buttons/PaymentIcon";
import TwoButton from "../../Components/Buttons/twoButton";
import { useEffect, useState } from "react";

function Payment() {
  const [renderedItem, setRenderedItem] = useState("BillPay");
  const [component, setComponent] = useState();
  const [active, setactive] = useState(false);
  const [active2, setactive2] = useState(false);

  function billPayHandler() {
    setRenderedItem("BillPay");
  }
  function payHandler() {
    setRenderedItem("Pay");
  }

  useEffect(() => {
    switch (renderedItem) {
      case "BillPay":
        setComponent(<BillPay />);
        setactive(true);
        setactive2(false);
        break;
      case "Pay":
        setComponent(<Pay />);
        setactive2(true);
        setactive(false);
    }
  }, [renderedItem]);

  function BillPay() {
    return (
      <View style={styles.conatiner}>
        <View style={styles.container2}>
          <PaymentIcon icon="bulb" color="white" size={30}>
            Electricity
          </PaymentIcon>
          <PaymentIcon icon="call" color="white" size={30}>
            Telephone
          </PaymentIcon>
          <PaymentIcon icon="flame" color="white" size={30}>
            Gas
          </PaymentIcon>
        </View>
        <View style={styles.container2}>
          <PaymentIcon icon="globe-outline" color="white" size={30}>
            Internet
          </PaymentIcon>
          <PaymentIcon icon="water" color="white" size={30}>
            Water
          </PaymentIcon>
          <PaymentIcon icon="sunny" color="white" size={30}>
            Solar
          </PaymentIcon>
        </View>
        <View style={styles.container2}>
          <PaymentIcon icon="book" color="white" size={30}>
            Education
          </PaymentIcon>
          <PaymentIcon icon="card" color="white" size={30}>
            Credit Card
          </PaymentIcon>
          <PaymentIcon icon="barbell" color="white" size={30}>
            Gym
          </PaymentIcon>
        </View>
        <View style={styles.container2}>
          <PaymentIcon icon="home" color="white" size={30}>
            Rent
          </PaymentIcon>
          <PaymentIcon icon="receipt" color="white" size={30}>
            Govt Fee
          </PaymentIcon>
          <PaymentIcon icon="grid" color="white" size={30}>
            Others
          </PaymentIcon>
        </View>
      </View>
    );
  }

  function Pay() {
    return (
      <View style={styles.conatiner}>
        <View style={styles.container2}>
          <PaymentIcon icon="tv" color="white" size={30}>
            Online Pay
          </PaymentIcon>
          <PaymentIcon icon="ticket" color="white" size={30}>
            Ticketing
          </PaymentIcon>
          <PaymentIcon icon="people" color="white" size={30}>
            Donations
          </PaymentIcon>
        </View>
        <View style={styles.container2}>
          <PaymentIcon icon="car" color="white" size={30}>
            Challans
          </PaymentIcon>
          <PaymentIcon icon="receipt" color="white" size={30}>
            Govt Fee
          </PaymentIcon>
          <PaymentIcon icon="grid" color="white" size={30}>
            Others
          </PaymentIcon>
        </View>
      </View>
    );
  }

  return (
    <>
    <View style={{alignItems: 'center'}}>
      <TwoButton
        type={1}
        active={active}
        active2={active2}
        onPress={billPayHandler}
        onPress1={payHandler}
        text="Bill Payments"
        text2="Payments"
        />
        </View>
      <View>{component}</View>
    </>
  );
}

export default Payment;

const styles = StyleSheet.create({
  conatiner: {
    padding: 16,
  },
  container2: {
    flexDirection: "row",
    marginVertical: 20,
  },
});
