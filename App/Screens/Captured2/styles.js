import {StyleSheet} from 'react-native';
// import {"red", "yellow"} from '../../global';

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    icon1: {
      top: 4,
      left: 9,
      position: "absolute",
      color: "rgba(255,255,255,1)",
      fontSize: 20
    },
    rect1: {
      top: 0,
      left: 0,
      width: 30,
      height: 30,
      position: "absolute",
      backgroundColor: "rgba(32,172,212,1)",
      borderRadius: 10
    },
    icon2: {
      color: "rgba(255,255,255,1)",
      fontSize: 20,
      height: 23,
      width: 12,
      marginTop: 5,
      marginLeft: 9
    },
    icon1Stack: {
      width: 30,
      height: 30,
      marginTop: 50,
      marginLeft: 310
    },
    image: {
      width: 295,
      height: 150,
      marginTop: 60,
      marginLeft: 30
    },
    addANote: {
      fontFamily: "roboto-regular",
      color: "#121212",
      fontSize: 20,
      marginTop: 44,
      marginLeft: 34,
      fontWeight: 'bold',
       textAlign: 'center'
    },
    rect2: {
      width: 301,
      height: 130,
      backgroundColor: "rgba(255,255,255,1)",
      borderWidth: 1,
      borderColor: "rgba(155,155,155,1)",
      borderRadius: 10,
      marginTop: 12,
      marginLeft: 30
    },
    writeADescription: {
      fontFamily: "roboto-regular",
      color: "#121212",
      height: 32,
      width: 258,
      marginTop: 9,
      marginLeft: 9
    },
    loremIpsum: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginTop: 67,
      marginLeft: 259
    },
    button1: {
      width: 301,
      height: 50,
      backgroundColor: "rgba(32,172,212,1)",
      borderRadius: 10,
      marginTop: 30,
      marginLeft: 30
    },
    send: {
      fontFamily: "roboto-regular",
      color: "rgba(255,255,255,1)",
      marginTop: 17,
      marginLeft: 140
    }
  });

  export default styles;