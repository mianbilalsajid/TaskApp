import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  Alert,
} from "react-native";
import InputField from "../Components/Input/inputField";
import PhotoInput from "../Components/Input/photoInput";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants/GlobalStyles";
import ToggleSwitch from "../Components/Buttons/toggleSwitch";
import CheckBox from "../Components/Buttons/checkBox";
import Button from "../Components/Buttons/Button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState } from "react";
import { createUser } from "../util/auth";


function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnic, setCnic] = useState();
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState();
  const [fName, setfName] = useState("");
  const [lName, setLName] = useState("");

  function loginChangeHanlder() {
    navigation.navigate("Login");
  }

  function submitHandler () {
    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;

    if(!emailIsValid && !passwordIsValid) {
      Alert.alert('Invalid Input', "Please Enter Correct Credentials")
    }
    createUser(email, password)
  }

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEmail(enteredValue);
        break;
      case "fname":
        setfName(enteredValue);
        break;
      case "lname":
        setLName(enteredValue);
        break;
      case "password":
        setPassword(enteredValue);
        break;
      case "cnic":
        setCnic(enteredValue);
        break;
      case "phoneNo":
        setPhoneNo(enteredValue);
        break;
      case "address":
        setAddress(enteredValue);
        break;
    }
  }

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      extraScrollHeight={20}
    >
      <SafeAreaView>
        <View style={{ alignItems: "center" }}>
          <Image style={styles.image} source={require("../assets/3.png")} />
          <Text style={styles.title}>Register Here!</Text>
          <Text style={styles.subHeading}>Upload Photo</Text>
          <PhotoInput />
        </View>
        <View style={{ alignItems: "center", padding: 15 }}>
          <View style={styles.nameContainer}>
            <InputField
              icon="person"
              size={24}
              color={Colors.golden}
              type={1}
              textChange={updateInputValueHandler.bind(this, "fname")}
            >
              First Name
            </InputField>
            <InputField
              icon="people"
              size={24}
              color={Colors.golden}
              type={1}
              textChange={updateInputValueHandler.bind(this, "lname")}
            >
              Last Name
            </InputField>
          </View>
          <InputField
            icon="call"
            size={24}
            color={Colors.golden}
            type={2}
            textChange={updateInputValueHandler.bind(this, "phoneNo")}
          >
            Phone No
          </InputField>
          <InputField
            icon="mail"
            size={24}
            color={Colors.golden}
            type={3}
            textChange={updateInputValueHandler.bind(this, "email")}
          >
            E-Mail
          </InputField>
          <InputField
            icon="lock-closed-sharp"
            size={24}
            color={Colors.golden}
            type={4}
            textChange={updateInputValueHandler.bind(this, "password")}
          >
            Password
          </InputField>
          <InputField
            icon="id-card-sharp"
            size={24}
            color={Colors.golden}
            type={1}
            textChange={updateInputValueHandler.bind(this, "cnic")}
          >
            CNIC
          </InputField>
          <InputField
            icon="location"
            size={24}
            color={Colors.golden}
            textChange={updateInputValueHandler.bind(this, "address")}
          >
            Address
          </InputField>
          <ToggleSwitch icon="scan-circle" size={24} color={Colors.golden}>
            Face Id
          </ToggleSwitch>
          <CheckBox>
            <Text
              style={
                (styles.termandCondition, { color: Colors.placeholderGrey })
              }
            >
              Are You Agree with{" "}
            </Text>
            <Pressable style={{ alignSelf: "center" }} onPress={()=> (navigation.navigate('TermAndCond'))}>
              {({ pressed }) => (
                <Text
                  style={
                    pressed
                      ? [styles.termandCondition, styles.press]
                      : styles.termandCondition
                  }
                >
                  Terms & Conditions
                </Text>
              )}
            </Pressable>
          </CheckBox>
          <Button onPress={submitHandler}>Sign Up</Button>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={
                (styles.termandCondition, { color: Colors.placeholderGrey })
              }
            >
              Already Have An Account?
            </Text>
            <Pressable
              style={{ alignSelf: "center" }}
              onPress={loginChangeHanlder}
            >
              {({ pressed }) => (
                <Text
                  style={
                    pressed
                      ? [styles.termandCondition, styles.press]
                      : styles.termandCondition
                  }
                >
                  Login
                </Text>
              )}
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({
  nameContainer: {
    flexDirection: "row",
    alignContent: "space-between",
  },
  field: {
    flex: 2,
  },
  input: {
    margin: 10,
  },
  image: {
    width: 140,
    height: 140,
  },
  title: {
    fontSize: 28,
    color: "white",
    marginBottom: 18,
  },
  subHeading: {
    fontSize: 19,
    color: "white",
    marginVertical: "10",
  },
  termandCondition: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    marginLeft: 5,
  },
  press: {
    opacity: 0.5,
  },
});
