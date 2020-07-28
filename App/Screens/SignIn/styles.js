import {StyleSheet} from 'react-native';
// import {"red", "yellow"} from '../../global';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    weAreOnthemoov: {
      fontFamily: "roboto-700",
      color: "rgba(38,172,209,1)",
      fontSize: 25,
      marginTop: 83,
      marginLeft: 18,
      fontWeight: 'bold'
    },
    rect: {
      width: 360,
      height: 44,
      backgroundColor: "rgba(38,172,209,1)",
      marginTop: 195
    },
    rect1: {
      width: 51,
      height: 7,
      backgroundColor: "rgba(255,255,255,1)",
      borderRadius: 5,
      marginTop: 16,
      marginLeft: 154
    },
    button1: {
      width: 332,
      height: 43,
      backgroundColor: "rgba(38,172,209,1)",
      borderRadius: 10,
      marginTop: 209,
      marginLeft: 11
    },
    signIn: {
      fontFamily: "roboto-regular",
      color: "rgba(255,255,255,1)",
      marginTop: 14,
      marginLeft: 147
    },
     signUp: {
      fontFamily: "roboto-regular",
      color: "rgba(38,172,209,1)",
      marginTop: 14,
      marginLeft: 147,
      marginBottom: -10
    },
    rect2: {
      width: 332,
      height: 43,
      backgroundColor: "rgba(255,255,255,1)",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "rgba(155,155,155,1)",
      marginTop: -232,
      marginLeft: 11
    },
    textInput: {
      fontFamily: "roboto-regular",
      color: "#121212",
      height: 31,
      width: 245,
      marginTop: 6,
      marginLeft: 12
    },
    rect3: {
      width: 332,
      height: 43,
      backgroundColor: "rgba(255,255,255,1)",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "rgba(155,155,155,1)",
      flexDirection: "row",
      marginTop: 39,
      marginLeft: 11
    },
    textInput1: {
      fontFamily: "roboto-regular",
      color: "#121212",
      height: 31,
      width: 245
    },
    icon: {
      color: "rgba(128,128,128,1)",
      fontSize: 20,
      height: 20,
      width: 20,
      marginLeft: 46,
      marginTop: 5
    },
    textInput1Row: {
      height: 31,
      flexDirection: "row",
      flex: 1,
      marginRight: 9,
      marginLeft: 12,
      marginTop: 7
    },
    emailAddress: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginTop: -153,
      marginLeft: 10,
      fontWeight: 'bold'
    },
    password: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginTop: 65,
      marginLeft: 12,
      fontWeight: 'bold'
    },
    forgotPassword: {
      fontFamily: "roboto-regular",
      color: "rgba(38,172,209,1)",
      marginTop: 64,
      marginLeft: 231
    }
  });

  export default styles;