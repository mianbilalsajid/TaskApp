import { Pressable, ScrollView, StyleSheet, Text, View, Animated } from "react-native";
import { Colors } from "../constants/GlobalStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useRef } from "react";

function CustomDropDown({ placeHolder, data, onPress, open, text }) {
  const slideAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  function PlaceHolderText ({text1, placeholder, openn}) {
    if (text1 === "") {
      return(
        <Text style={styles.placeHolder}>{openn ? "..." : placeholder}</Text>
      )
    } else {
      return (
        <Text style={styles.placeHoldertext}>{text1}</Text>
      )
    }
  }

  useEffect(() => {
    if (open) {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [open]);

  const translateY = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-20, 0],
  });

  return (
    <>
      <Pressable 
        onPress={onPress} 
        style={open ? styles.activeContainer : styles.container}
      >
        <PlaceHolderText openn={open} text1={text} placeholder={placeHolder}/>
        <View style={styles.icon}>
          <Ionicons 
            name={open ? "arrow-up-circle" : "arrow-down-circle"} 
            size={24} 
            color="grey" 
          />
        </View>
      </Pressable>

      <Animated.View 
        style={[
          styles.listContainer,
          {
            opacity: fadeAnim,
            transform: [{ translateY }],
            display: open ? 'flex' : 'none',
          }
        ]}
      >
        <ScrollView showsVerticalScrollIndicator={false} style={{ maxHeight: 240 }}>
          {data}
        </ScrollView>
      </Animated.View>
    </>
  );
}

export default CustomDropDown;

const styles = StyleSheet.create({
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
  activeContainer: {
    backgroundColor: "#5C5858",
    alignItems: "center",
    height: 55,
    width: "86%",
    borderRadius: 10,
    flexDirection: "row",
    zIndex: 10,
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
  placeHoldertext: {
    color: "white",
    fontSize: 20,
    padding: 15,
  },
  listContainer: {
    width: "86%",
    backgroundColor: Colors.inputbox,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    position: 'relative',
    top: -25, // Adjust this to overlap with the button
    shadowColor: "black",
    shadowOpacity: 2.5,
    shadowRadius: 2,
    shadowOffset: { height: 1, width: 1 },
  },
  pressed: {
    opacity: 0.5
  }
});