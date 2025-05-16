import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
import { Colors } from "../constants/GlobalStyles";

function DropDown({ data, text }) {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={[isFocus? styles.container1: styles.container]}>
      <Dropdown
        iconStyle={{
          backgroundColor: Colors.placeholderGrey,
          borderRadius: 10,
          tintColor: Colors.inputbox,
          opacity: 0.5,
        }}
        showsVerticalScrollIndicator={false}
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? text : "..."}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
        itemContainerStyle={styles.itemContainer}
        containerStyle={styles.listContainer}
        itemTextStyle={{color: 'grey',}}
        activeColor="#B6B6B6"
        autoScroll={false}
      />
    </View>
  );
}

export default DropDown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.inputbox,
    justifyContent: "center",
    alignItems: "center",
    height: 55,
    width: "86%",
    borderRadius: 13,
    shadowColor: "black",
    shadowOpacity: 2.5,
    shadowRadius: 2,
    shadowOffset: { height: 1, width: 1 },
  },
  container1: {
    backgroundColor: Colors.inputbox,
    justifyContent: "center",
    alignItems: "center",
    height: 55,
    width: "86%",
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    shadowColor: "black",
    shadowOpacity: 2.5,
    shadowRadius: 2,
    shadowOffset: { height: 1, width: 1 },
  },
  dropdown: {
    height: 50,
    width: "100%",
    borderRadius: 13,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 20,
    color: "grey",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "white",
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  itemContainer: {
    backgroundColor: Colors.inputbox,
    color: 'white',
  },
  listContainer: {
    backgroundColor: Colors.inputbox,
    overflow: 'hidden',
    borderColor: Colors.inputbox,
    borderBottomStartRadius: 13,
    borderBottomEndRadius: 13,
  }
});
