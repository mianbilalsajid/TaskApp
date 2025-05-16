import { View } from "react-native";
import Bottomsheet from "../Components/UI/BottomSheet";
import Header from "../Components/Header";
import CardAndTitle from "../Components/CardAndTitle";

function PaymentPreferences() {
  return (
    <>
      <View style={{ flex: 1 }}>
        <Header text="Payment" style={1}>
          Preferences
        </Header>
        <CardAndTitle/>
        <Bottomsheet />
      </View>
    </>
  );
}

export default PaymentPreferences;

