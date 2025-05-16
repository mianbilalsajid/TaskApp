import { View, Text, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useEffect, useMemo, useState } from "react";
import TwoButton from "../Buttons/twoButton";

function Bottomsheet() {

        const [renderedItem, setRenderedItem] = useState("prefer");
        const [component, setComponent] = useState();
        const [active, setactive] = useState(false);
        const [active2, setactive2] = useState(false);
        const [active3, setactive3] = useState(false);
    
        function prferHandler () {
            setRenderedItem("prefer")
        }
        function withdrawHandler () {
            setRenderedItem("withdraw")
        }
        function purchaseHandler () {
            setRenderedItem('purchase')
        }
    
    useEffect(() => {
        switch(renderedItem) {
            case "prefer":
                setComponent("Preffer");
                setactive(true)
                setactive2(false)
                setactive3(false)
                break;
            case "withdraw":
                setComponent("withdraw");
                setactive2(true);
                setactive(false);
                setactive3(false)
                break;
            case "purchase":
                setComponent("Purchase");
                setactive2(false);
                setactive(false);
                setactive3(true)
                break;

        }
    }, [renderedItem]);

    const snapPoints = useMemo(() => ["44.9%" ,"45%"], []);

  return (
    // <GestureHandlerRootView style={styles.container}>
      <BottomSheet index={1} snapPoints={snapPoints}
      backgroundStyle={{backgroundColor: '#696666', borderRadius: 35,}}
      >
        <BottomSheetView style={styles.contentContainer}>
          <TwoButton
            active={active}
            active2={active2}
            active3={active3}
            onPress={prferHandler}
            onPress1={withdrawHandler}
            onPress3={purchaseHandler}
            text="Preference"
            text2="Withdraw"
            text3="Purchase"
            type={2}
          />
          <View>
            <Text>
            {component}
            </Text>
          </View>
        </BottomSheetView>
      </BottomSheet>
  );
    {/* </GestureHandlerRootView> */}
}

export default Bottomsheet;

const styles = StyleSheet.create({
  container: {
    height: 350,
    backgroundColor: "pink",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flex: 1
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#696666',
    alignItems: 'center'
  },
});
