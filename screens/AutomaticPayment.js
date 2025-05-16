import { StyleSheet, Text, View } from "react-native";
import Header from "../Components/Header";
import BottomSheet2 from "../Components/UI/BottomSheet2";
import HeadAndSubHead from '../Components/HeadAndSubHead'
import { Colors } from "../constants/GlobalStyles";

function AutomaticPayment() {
  return (
    <>
      <View style={{ flex: 1 }}>
        <Header text="Inbound" style={1}>
          Payment
        </Header>
        <View style={styles.headingConatiner}>
        <HeadAndSubHead title1="Balance" title2="Inquiry"/>
        <View style={styles.balanceConatiner}>
            <View style={styles.balanceInnerConatiner}>
                <Text style={styles.text1}>
                    Balance
                </Text>
                <Text style={styles.text2}>
                    $25,000
                </Text>
            </View>
            <Text style={styles.text3}>
                Pending
            </Text>
            <Text style={styles.text4}>
                $2,350
            </Text>
        </View>
        </View>
        <BottomSheet2/>
      </View>
    </>
  );
}

export default AutomaticPayment;


const styles = StyleSheet.create({
    headingConatiner: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    balanceConatiner: {
        padding: 20,
        backgroundColor:  Colors.inputbox,
        height: 55,
        width: 200,
        borderRadius: 12,
        marginHorizontal: 50,
    },
    balanceInnerConatiner: {
        backgroundColor: Colors.golden,
        height: 48,
        width: 100,
        position: 'absolute',
        marginVertical: 4,
        left: 4,
        borderRadius: 10,
        padding: 5,
    },
    text1: {
        fontSize: 10,
        marginLeft: 8,
    },
    text2: {
        fontSize: 20,
        marginLeft: 6,
        fontWeight: 'bold'
    },
    text3: {
        color: 'white',
        fontSize: 14,
        position: 'absolute',
        right: 28,
        top: 9,
    },
    text4: {
        color: 'white',
        fontSize: 18,
        position: 'absolute',
        right: 18,
        top: 25,
        fontWeight: 'bold'
    },
})