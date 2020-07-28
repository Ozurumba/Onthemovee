import {StyleSheet} from 'react-native';
// import {"red", "yellow"} from '../../global';

const styles = StyleSheet.create({
    container: {
      flex: 1
  
      
    },
    image: {
      top: 0,
      left: 2,
      width: 369,
      height: 348,
      position: "absolute"
    },
    image_imageStyle: {},
    loremIpsum: {
      fontFamily: "roboto-700",
      color: "#121212",
      marginTop: 6,
      marginLeft: 14
    },
    rect: {
      top: 319,
      left: 0,
      width: 360,
      height: 236,
      position: "absolute",
      backgroundColor: "rgba(255,255,255,1)",
       borderTopRightRadius:25,
      borderTopLeftRadius:25,
    },
    rect2: {
      width: 45,
      height: 6,
      backgroundColor: "rgba(74,74,74,1)",
      borderRadius: 4,
      marginTop: 6,
      marginLeft: 159
    },
    verification: {
      fontFamily: "roboto-700",
      color: "rgba(0,176,255,1)",
      fontSize: 24,
      marginTop: 23,
      marginLeft: 23,
      fontWeight: 'bold'
    },
    loremIpsum2: {
      fontFamily: "roboto-700",
      color: "#121212",
      marginTop: 15,
      marginLeft: 22
    },
    loremIpsum3: {
      fontFamily: "roboto-700",
      color: "#121212",
      marginTop: 1,
      marginLeft: 21
    },
    button: {
      width: 318,
      height: 41,
      backgroundColor: "rgba(0,176,255,1)",
      borderRadius: 11,
      marginTop: 18,
      marginLeft: 23
    },
    verify: {
      fontFamily: "roboto-700",
      color: "rgba(255,255,255,1)",
      marginTop: 10,
      marginLeft: 140
    },
    resend: {
      fontFamily: "roboto-700",
      color: "rgba(0,176,255,1)",
      marginTop: 10,
      marginLeft: 165
    },
    imageStack: {
      width: 371,
      height: 555,
      marginTop: 85
    },
    sendAnything: {
      fontFamily: "roboto-700",
      color: "rgba(0,176,255,1)",
      fontSize: 24,
      marginTop: -590,
      marginLeft: 16,
      fontWeight: 'bold'
    }
  });

  export default styles;