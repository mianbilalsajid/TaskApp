import { View,Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/GlobalStyles";

function DetailBox () {
    return (
        <View style={styles.detailContainer}>
        <View style={styles.detailInnerContainer}>
          <View style={styles.icon}>
          <Ionicons name="person-circle-outline" size={80} color="white" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.name}>Mian Bilal Sajid</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="location" color={Colors.golden} size={18}/>
            <Text style={styles.address}>Address</Text>
            </View>
          </View>
        </View>
      </View>
    )
}

export default DetailBox;

const styles = StyleSheet.create({
    detailContainer: {
        flexDirection: "row",
        marginHorizontal: 35,
        marginTop: 70,
      },
      detailInnerContainer: {
        flexDirection: "row",
        alignItems: "center",
      },
      name: {
        fontSize: 28,
        color: "white",
      },
      address: {
        color: "white",
        fontSize: "14",
        paddingHorizontal: 5,
      },
      textContainer: {
        marginHorizontal: 8,
      },
      icon: {
        shadowColor: "black",
        shadowOpacity: 2.5,
        shadowRadius: 2,
        shadowOffset: { height: 1, width: 1 },
      }
})