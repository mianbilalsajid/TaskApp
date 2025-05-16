import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import BackButton from "../Components/Buttons/BackButton";
import IconTextButton from "../Components/Buttons/iconTextButton";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import DetailBox from "../Components/UI/DetailBox";

function Profile({ navigation }) {
    const dispatch = useDispatch();
    
    function logOutHandler() {
        Alert.alert("Confirm LogOut", "Are You Sure You Want to LogOut?", [
            {
                text: 'Cancel',
                style: 'cancel'
            },
            {
                text: 'Yes',
                style: 'destructive',
                onPress: () => (dispatch(logout()))
            }
        ])
    }

  return (
    <SafeAreaView>
      <View style={{ flex: 1 }}>
        <BackButton onPress={() => (navigation.goBack())}/>
      </View>
      <DetailBox/>
      <View style={{ marginTop: 25 }}>
        <IconTextButton icon="scan" number={1} icon2="qr-code">UserName</IconTextButton>
        <IconTextButton
          icon="person"
          onPress={() => navigation.navigate("Personal Information")}
        >
          Presonal Information
        </IconTextButton>
        <IconTextButton
          icon="cash"
          onPress={() => navigation.navigate("Automatic Payment")}
        >
          Automatic Payment
        </IconTextButton>
        <IconTextButton
          icon="list-sharp"
          onPress={() => navigation.navigate("Payment Preferences")}
        >
          Payment Preferences
        </IconTextButton>
        <IconTextButton
          icon="gift"
          onPress={() => navigation.navigate("Loyalty Program")}
        >
          Loyalty Program
        </IconTextButton>
        <IconTextButton
          icon="notifications"
          onPress={() => navigation.navigate("Notification")}
        >
          Notification
        </IconTextButton>
        <Pressable
          style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
          onPress={() => (navigation.navigate('TermAndCond'))}
        >
          <Text style={styles.termcond}>Terms & Conditions</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.pressable2,
            pressed && styles.pressed,
          ]}
          onPress={() => (navigation.navigate('FAQs'))}
        >
          <Text style={styles.termcond}>Faqs</Text>
        </Pressable>
        <IconTextButton icon="log-out" onPress={logOutHandler}>
          Log Out
        </IconTextButton>
      </View>
    </SafeAreaView>
  );
}

export default Profile;

const styles = StyleSheet.create({
  pressable: {
    marginHorizontal: 33,
    marginTop: 10,
  },
  pressable2: {
    marginHorizontal: 33,
    marginTop: 10,
    marginBottom: 10,
  },
  pressed: {
    opacity: 0.5,
  },
  termcond: {
    fontSize: 18,
    color: "white",
    padding: 5,
  },
});
