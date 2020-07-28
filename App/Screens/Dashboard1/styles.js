import {StyleSheet} from 'react-native';
// import {"red", "yellow"} from '../../global';

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    mapView: {
      position: "absolute",
      top: 0,
      height: 436,
      width: 360,
      left: 0
    },
    button: {
      top: 25,
      left: 22,
      width: 42,
      height: 39,
      position: "absolute",
      backgroundColor: "rgba(255,255,255,1)",
      borderRadius: 10,
      shadowColor: "rgba(155,155,155,1)",
      shadowOffset: {
        width: 3,
        height: 3
      },
      elevation: 5,
      shadowOpacity: 1,
      shadowRadius: 0
    },
    icon: {
      color: "rgba(0,0,0,1)",
      fontSize: 30,
      height: 35,
      width: 23,
      marginTop: 4,
      marginLeft: 9
    },
    image: {
      top: 9,
      left: 289,
      width: 50,
      height: 72,
      position: "absolute"
    },
    rect4: {
      top: 233,
      left: 102,
      width: 137,
      height: 36,
      position: "absolute",
      backgroundColor: "rgba(74,74,74,1)",
      borderRadius: 10
    },
    loremIpsum: {
      fontFamily: "roboto-regular",
      color: "rgba(255,255,255,1)",
      marginTop: 11,
      marginLeft: 12
    },
    mapViewStack: {
      width: 360,
      height: 436,
      marginTop: 24
    },
    rect: {
      width: 360,
      height: 177,
      backgroundColor: "#E6E6E6"
    },
    rect2: {
      width: 322,
      height: 40,
      backgroundColor: "rgba(255,255,255,1)",
      borderRadius: 10,
      marginTop: 38,
      marginLeft: 17
    },
    yourLocation: {
      fontFamily: "roboto-regular",
      color: "#121212",
      height: 32,
      width: 100,
      marginTop: 3,
      marginLeft: 12
    },
    rect3: {
      width: 51,
      height: 7,
      backgroundColor: "rgba(0,0,0,1)",
      borderRadius: 5,
      marginTop: 23,
      marginLeft: 158
    },
    noOrdersYet: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginTop: 3,
      marginLeft: 143,
      fontWeight: 'bold'
    }
  });

  export default styles;