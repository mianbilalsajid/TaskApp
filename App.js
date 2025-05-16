import { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import store from "./store/store";
import { loadToken } from "./store/authSlice"; // Changed from setTokenFromStorage to loadToken

import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import PersonalInfo from "./screens/PersonalInfo";
import AutomaticPayment from "./screens/AutomaticPayment";
import PaymentPreferences from "./screens/PaymentPreferences";
import LoyaltyProgram from "./screens/LoyaltyProgram";
import Language from "./screens/Language";
import Notification from "./screens/Notification";
import IconButton from "./Components/IconButton";
import Profile from "./screens/Profile";
import { StatusBar } from "expo-status-bar";
import TermAndCond from "./screens/TermAndCond";
import FAQ from "./screens/FAQ";
import AddBankAcc from "./screens/AddBankAccount";
import Products from "./screens/Products";
import Invest from "./screens/Invest";
import Savings from "./screens/Savings";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: "#413839" },
      }}
    >
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={"TermAndCond"}
        component={TermAndCond}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      screenOptions={{
        sceneStyle: {
          backgroundColor: "#413839",
        },
        drawerContentStyle: { backgroundColor: "#413839" },
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "gray",
        headerTransparent: true,
        headerTintColor: "white",
        headerShown: false,
        headerStyle: {
          height: 130,
        },
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: "bold",
          color: "white",
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          title: "Home",
          headerTitle: "",
          headerRight: () => (
            <IconButton
              icon="person-circle-outline"
              size={33}
              color={"white"}
              onPress={() => navigation.navigate("Profile")}
              number={2}
              icon2="notifications"
              icon3="filter"
              onPress2={() => navigation.navigate("Notification")}
            />
          ),
        }}
      />
      <Drawer.Screen name="Personal Information" component={PersonalInfo} />
      <Drawer.Screen name="Automatic Payment" component={AutomaticPayment} />
      <Drawer.Screen
        name="Payment Preferences"
        component={PaymentPreferences}
      />
      <Drawer.Screen name="Loyalty Program" component={LoyaltyProgram} />
      <Drawer.Screen name="Language" component={Language} />
      <Drawer.Screen name="Notification" component={Notification} />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          // drawerItemStyle: { display: "none" },
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="AddAccount"
        component={AddBankAcc}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen name={"TermAndCond"} component={TermAndCond} />
      <Drawer.Screen name={"FAQs"} component={FAQ} />
      <Drawer.Screen
        name="Products"
        component={Products}
        options={{
          drawerItemStyle: { display: "none" },
          headerShown: true,
          headerTitleStyle: {
            fontSize: 32,
            fontWeight: "bold",
            position: "absolute",
            right: 1,
          },
          headerRight: () => (
            <IconButton
              icon="person-circle-outline"
              size={33}
              color={"white"}
              onPress={() => navigation.navigate("Profile")}
              number={2}
              icon2="notifications"
              icon3="filter"
              onPress2={() => navigation.navigate("Notification")}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function Root() {
  const [appIsReady, setAppIsReady] = useState(false);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    async function prepare() {
      try {
        await dispatch(loadToken());
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, [dispatch]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) return null;

  return (
    <>
      <StatusBar style="light" />
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <NavigationContainer>
          {isAuthenticated ? <AuthenticatedStack /> : <AuthStack />}
        </NavigationContainer>
      </View>
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
