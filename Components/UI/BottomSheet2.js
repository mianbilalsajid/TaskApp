import { View, Text, StyleSheet, FlatList } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useMemo } from "react";
import { Colors } from "../../constants/GlobalStyles";
import HeadAndSubHead from "../HeadAndSubHead";
import { DATA } from "../../constants/dummyData";
import ActivityItem from "../ActivityItem";

function BottomSheet2({ title1, title2 }) {
  function activityRenderHandler({ item }) {
    return (
      <ActivityItem
        categoryName={item.categoryName}
        title={item.title}
        location={item.location}
        date={item.date}
        amount={item.amount}
      />
    );
  }

  const snapPoints = useMemo(() => ["44.9%", "45%"], []);

  return (
    <BottomSheet
      index={1}
      snapPoints={snapPoints}
      backgroundStyle={{ backgroundColor: Colors.bSheet, borderRadius: 35 }}
    >
      <BottomSheetView>
        <HeadAndSubHead title1="Recents" title2="Incomings" />
          <FlatList
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={activityRenderHandler}
          />
      </BottomSheetView>
    </BottomSheet>
  );
}

export default BottomSheet2;

const styles = StyleSheet.create({
  headingContainer: {
    padding: 20,
  },
  title1: {
    fontSize: 15,
    color: "white",
  },
  title2: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
  },
});
