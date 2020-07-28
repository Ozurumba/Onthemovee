import {StyleSheet} from 'react-native';
// import {"red", "yellow"} from '../../global';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gray'
    },
    scrollArea1: {
      width: 368,
      height: 308,
      backgroundColor: "rgba(255,255,255,1)",
      borderTopRightRadius:25,
      borderTopLeftRadius:25,
      marginTop: 334
    },
    scrollArea1_contentContainerStyle: {
      height: 308,
      width: 368
    },
    successfulPayment1: {
      top: 0,
      left: 27,
      position: "absolute",
      fontFamily: "roboto-700",
      color: "#121212",
      fontSize: 16
    },
    image: {
      top: 6,
      left: 0,
      width: 200,
      height: 200,
      position: "absolute"
    },
    successfulPayment1Stack: {
      width: 200,
      height: 206,
      marginTop: 31,
      marginLeft: 90
    },
    button1: {
      width: 319,
      height: 57,
      backgroundColor: "rgba(38,172,209,1)",
      borderRadius: 19,
      marginLeft: 20
    },
    back1: {
      fontFamily: "roboto-700",
      color: "rgba(255,255,255,1)",
      marginTop: 19,
      marginLeft: 153
    }
  });

export default styles;