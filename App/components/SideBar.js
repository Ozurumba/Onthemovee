import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import MenuDrawer from 'react-native-side-drawer';
import Dashboard1 from "../Screens/Dashboard1";
import FeatherIcon from "react-native-vector-icons/Feather";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  drawerContent = () => {
    return (
      <TouchableOpacity onPress={this.toggleOpen} style={styles.animatedBox}>
         <EntypoIcon name="chevron-left" style={styles.icon11}></EntypoIcon>
      <Text style={styles.hiTayo}>Hi Tayo</Text>
      <View style={styles.iconRow}>
        <FeatherIcon name="credit-card" style={styles.icon}></FeatherIcon>
        <Text style={styles.wallet}>Wallet</Text>
        
        
      </View>
      <View style={styles.icon2Row}>
        <MaterialCommunityIconsIcon
          name="settings-outline"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.settings}>Settings</Text>
        
      </View>
      <View style={styles.icon3Row}>
        <FeatherIcon name="phone" style={styles.icon3}></FeatherIcon>
        <Text style={styles.contactUs}>Call Us</Text>
        
      </View>
      <View style={styles.icon4Row}>
        <IoniconsIcon
          name="ios-help-circle-outline"
          style={styles.icon4}
        ></IoniconsIcon>
        <Text style={styles.help}>Help</Text>
        
      </View>
      <View style={styles.icon5Row}>
        <IoniconsIcon name="ios-log-out" style={styles.icon5}></IoniconsIcon>
        <Text style={styles.logout}>Logout</Text>
        
      </View>
   
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <MenuDrawer 
          open={this.state.open} 
          drawerContent={this.drawerContent()}
          drawerPercentage={70}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        >
         
            <Dashboard1  clickMe={this.toggleOpen} />
          
        </MenuDrawer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    zIndex: 0
  },
  animatedBox: {
    flex: 1,
    backgroundColor: "#21202E",
    padding: 0,
    margin: 0
  },
  
 
  
  hiTayo: {
    fontFamily: "roboto-regular",
    color: "#fff",
    fontSize: 18,
    marginTop: 50,
    marginLeft: 49
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 26
  },
  wallet: {
    fontFamily: "roboto-regular",
    color: "#fff",
    fontSize: 13,
    marginLeft: 15,
    marginTop: 4
  },
  
  iconRow: {
    height: 30,
    flexDirection: "row",
    marginTop: 69,
    marginLeft: 23,
    marginRight: 170
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 30
  },
  settings: {
    fontFamily: "roboto-regular",
    color: "#fff",
    fontSize: 13,
    marginLeft: 12,
    marginTop: 5
  },
 
  icon2Row: {
    height: 33,
    flexDirection: "row",
    marginTop: 29,
    marginLeft: 22,
    marginRight: 170
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 22
  },
  contactUs: {
    fontFamily: "roboto-regular",
    color: "#fff",
    fontSize: 12,
    marginLeft: 12,
    marginTop: 5
   
  },
  
  icon3Row: {
    height: 33,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 25,
    marginRight: 170
  },
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 29
  },
  help: {
    fontFamily: "roboto-regular",
    color: "#fff",
    fontSize: 13,
    marginLeft: 13,
    marginTop: 9
  },
  
  icon4Row: {
    height: 34,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 27,
    marginRight: 170
  },
  icon5: {
    color: "rgba(128,128,128,1)",
    fontSize: 28
  },
  logout: {
    fontFamily: "roboto-regular",
    color: "#fff",
    fontSize: 13,
    marginLeft: 12,
    marginTop: 6
  },
  
  icon5Row: {
    height: 32,
    flexDirection: "row",
    marginTop: 28,
    marginLeft: 27,
    marginRight: 170
  },
  
  icon11: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    paddingTop:50,
    marginTop: -1,
    marginBottom: 1,
    marginLeft: 156
  }
})


export default App;