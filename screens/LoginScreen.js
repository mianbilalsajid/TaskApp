import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  Alert,
  Platform,
} from "react-native";
import InputField from "../Components/Input/inputField";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants/GlobalStyles";
import Button from "../Components/Buttons/Button";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticate } from "../store/authSlice";
import { login } from "../util/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function loginChangeHandler() {
    navigation.navigate("SignUp");
  }

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEmail(enteredValue);
        break;
      case "password":
        setPassword(enteredValue);
        break;
    }
  }

  async function loginHandler() {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      dispatch(authenticate(token));
    } catch (error) {
      Alert.alert(
        "Authentication Failed",
        "Could not log you in. Please check your credentials or try again later."
      );
      setIsAuthenticating(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        enableOnAndroid={true}
        extraScrollHeight={Platform.select({ ios: 0, android: 20 })}
        keyboardShouldPersistTaps="handled"
        enableResetScrollToCoords={false}
      >
        <View style={styles.headerContainer}>
          <Image style={styles.image} source={require("../assets/3.png")} />
          <Text style={styles.title}>Login Here!</Text>
          <Ionicons
            style={styles.person}
            name="person-circle-outline"
            size={124}
            color="white"
          />
        </View>
        
        <View style={styles.formContainer}>
          <InputField
            icon="mail"
            size={24}
            color={Colors.golden}
            type={3}
            textChange={updateInputValueHandler.bind(this, "email")}
            containerStyle={styles.inputContainer}
          >
            E-Mail
          </InputField>
          <InputField
            icon="lock-closed-sharp"
            size={24}
            color={Colors.golden}
            type={4}
            textChange={updateInputValueHandler.bind(this, "password")}
            containerStyle={styles.inputContainer}
          >
            Password
          </InputField>
          
          <Button onPress={loginHandler} style={styles.loginButton}>
            Login
          </Button>
          
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>
              Don't Have An Account?
            </Text>
            <Pressable onPress={loginChangeHandler}>
              {({ pressed }) => (
                <Text style={[styles.signupLink, pressed && styles.press]}>
                  Sign Up
                </Text>
              )}
            </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500, // Add your background color
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  headerContainer: {
    alignItems: "center",
    paddingTop: 20,
  },
  formContainer: {
    alignItems: "center",
    padding: 15,
    paddingTop: 0,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  image: {
    width: 130,
    height: 130,
  },
  title: {
    fontSize: 28,
    color: "white",
    marginTop: 10,
  },
  person: {
    marginTop: 40,
    marginBottom: 30,
  },
  loginButton: {
    marginTop: 20,
    width: '100%',
  },
  signupContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: 'center',
  },
  signupText: {
    fontSize: 14,
    color: Colors.placeholderGrey,
  },
  signupLink: {
    fontSize: 14,
    color: "white",
    marginLeft: 5,
    fontWeight: 'bold',
  },
  press: {
    opacity: 0.5,
  },
});