import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";


function Verification(props) {
    const [ phone, setPhone ] = useState("");
    
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.verification}>Verification</Text>
        <Text style={styles.loremIpsum}>
          A 6 digit number has been sent to your phone
        </Text>
        <Text style={styles.loremIpsum2}>enter to verify your account.</Text>
        <View style={styles.rect4Row}>
          <View style={styles.rect4}>
            <TextInput placeholder="" style={styles.textInput}></TextInput>
          </View>
          <View style={styles.rect5}>
            <TextInput placeholder="" style={styles.textInput1}></TextInput>
          </View>
          <View style={styles.rect6}>
            <TextInput placeholder="" style={styles.textInput2}></TextInput>
          </View>
          <View style={styles.rect7}>
            <TextInput placeholder="" style={styles.textInput3}></TextInput>
          </View>
          <View style={styles.rect8}>
            <TextInput placeholder="" style={styles.textInput4}></TextInput>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Verification")}
          style={styles.button1}
        >
          <Text style={styles.verify}>Verify</Text>
        </TouchableOpacity>
        <TouchableOpacity
        >
        <Text style={styles.resend}>Resend</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rect2}>
        <View style={styles.rect3}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 360,
    height: 308,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 332
  },
  verification: {
    fontFamily: "roboto-regular",
    color: "rgba(38,172,209,1)",
    fontSize: 25,
    marginTop: 27,
    marginLeft: 17,
    fontWeight: 'bold'
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 10,
    marginLeft: 21
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 5,
    marginLeft: 23
  },
  rect4: {
    width: 43,
    height: 54,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "rgba(80,227,194,1)"
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 41,
    width: 33,
    marginTop: 5,
    marginLeft: 4
  },
  rect5: {
    width: 43,
    height: 54,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    marginLeft: 18
  },
  textInput1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 41,
    width: 33,
    marginTop: 5,
    marginLeft: 4
  },
  rect6: {
    width: 43,
    height: 54,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    marginLeft: 14
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 41,
    width: 33,
    marginTop: 5,
    marginLeft: 4
  },
  rect7: {
    width: 43,
    height: 54,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    marginLeft: 14
  },
  textInput3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 41,
    width: 33,
    marginTop: 5,
    marginLeft: 4
  },
  rect8: {
    width: 43,
    height: 54,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    marginLeft: 14
  },
  textInput4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 41,
    width: 33,
    marginTop: 5,
    marginLeft: 3
  },
  rect4Row: {
    height: 54,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 37,
    marginRight: 48
  },
  button1: {
    width: 335,
    height: 45,
    backgroundColor: "rgba(38,172,209,1)",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    borderRadius: 10,
    marginTop: 26,
    marginLeft: 8
  },
  verify: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 12,
    marginLeft: 153
  },
  resend: {
    fontFamily: "roboto-regular",
    color: "rgba(38,172,209,1)",
    fontSize: 16,
    marginTop: 10,
    marginLeft: 161
  },
  rect2: {
    width: 367,
    height: 45,
    backgroundColor: "rgba(38,172,209,1)",
    marginTop: -353
  },
  rect3: {
    width: 51,
    height: 7,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    marginTop: 16,
    marginLeft: 154
  }
});

export default Verification;
