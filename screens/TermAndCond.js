import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Colors } from "../constants/GlobalStyles";
import BackButton from "../Components/Buttons/BackButton";

function TermAndCond({navigation}) {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={{ alignItems: "center"}}>
        <BackButton onPress={() => (navigation.goBack())}/>
        <Image style={styles.image} source={require("../assets/4.png")} />
        <Text style={styles.title}>Terms & Conditions</Text>
      </View>
        <View>

        <Text style={{textAlign: 'center',padding: 40, fontSize: 19,}}>
          Her extensive perceived may any sincerity extremity. Indeed add rather
          may pretty see. Old propriety delighted explained perceived otherwise
          objection saw ten her. Doubt merit sir the right these alone keeps. By
          sometimes intention smallness he northward. Consisted we otherwise
          arranging commanded discovery it explained. Does cold even song like
          two yet been. Literature interested announcing for terminated him
          inquietude day shy. Himself he fertile chicken perhaps waiting if
          highest no it. Continued promotion has consulted fat improving not
          way. Must you with him from him her were more. In eldest be it result
          should remark vanity square.
        </Text>
        </View>
    </SafeAreaView>
  );
}

export default TermAndCond;

const styles = StyleSheet.create({
  image: {
    width: 140,
    height: 140,
  },
  rootContainer: {
    height: "90%",
    backgroundColor: Colors.golden,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  title: {
    fontSize: 28,
    color: "black",
    marginBottom: 18,
  },
});
