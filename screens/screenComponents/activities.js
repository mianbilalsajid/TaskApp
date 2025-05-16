import { FlatList, StyleSheet, Text, View } from "react-native";
import { DATA } from "../../constants/dummyData";
import ActivityItem from "../../Components/ActivityItem";

function Activities() {
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

  return (
    <View style={{}}>
    <View style={styles.rootContainer}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={activityRenderHandler}
        showsVerticalScrollIndicator={false}
      />
    </View>
    </View>
  );
}

export default Activities;


const styles = StyleSheet.create({
    rootContainer: {
        padding: 20,
    }
})