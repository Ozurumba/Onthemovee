import {StyleSheet} from 'react-native';
// import {"red", "yellow"} from '../../global';

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    mapView: {
      position: "absolute",
      top: 0,
      left: 0,
      height: 437,
      width: 360
    },
    rect: {
      top: 335,
      left: 35,
      width: 291,
      height: 40,
      position: "absolute",
      backgroundColor: "rgba(255,255,255,1)",
      borderTopRightRadius:13,
      borderTopLeftRadius:13,
    },
    yourLocation: {
      fontFamily: "roboto-regular",
      color: "#121212",
      height: 19,
      width: 100,
      marginTop: 11,
      marginLeft: 15
    },
    rect2: {
      top: 412,
      left: 0,
      width: 360,
      height: 213,
      position: "absolute",
      backgroundColor: "rgba(255,255,255,1)",
      borderRadius: 28
    },
    rect3: {
      width: 36,
      height: 3,
      backgroundColor: "rgba(0,0,0,1)",
      borderRadius: 16,
      marginTop: 15,
      marginLeft: 169
    },
    noOrdersYet: {
      fontFamily: "roboto-700",
      color: "#121212",
      marginTop: 10,
      marginLeft: 142,
     fontWeight: 'bold'
    },
    image: {
      top: 449,
      left: 76,
      width: 215,
      height: 181,
      position: "absolute"
    },
    button1: {
      top: 21,
      left: 11,
      width: 35,
      height: 30,
      position: "absolute",
      backgroundColor: "rgba(255,255,255,1)",
      borderRadius: 6
    },
    icon: {
      top: 22,
      left: 18,
      position: "absolute",
      color: "rgba(0,0,0,1)",
      fontSize: 28
    },
    rect4: {
      top: 260,
      left: 108,
      width: 108,
      height: 30,
      position: "absolute",
      backgroundColor: "rgba(74,74,74,1)",
      borderRadius: 10
    },
    loremIpsum: {
      fontFamily: "roboto-regular",
      color: "rgba(255,255,255,1)",
      marginTop: 6,
      marginLeft: 7
    },
    image1: {
      top: 10,
      left: 305,
      width: 45,
      height: 47,
      position: "absolute"
    },
    mapViewStack: {
      width: 360,
      height: 630,
      marginTop: 20
    }
  });

  export default styles;