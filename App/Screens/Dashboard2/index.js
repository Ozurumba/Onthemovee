import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,

} from "react-native";
import MapView from "react-native-maps";
import Icon from "react-native-vector-icons/Octicons";
import SideMenuItems from '../components/sidemenu';
import SideMenu from 'react-native-side-menu';
import styles from './styles';

function Dashboard2(props) {

 const [openMenu, setOpenMenu] = useState(false)
 
  return (
 <SideMenu
      menu={<SideMenuItems navigation={props.navigation} />}
      isOpen={openMenu}
      >
      
    <View style={styles.container}>
      <View style={styles.mapViewStack}>
        <MapView
          provider={MapView.PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 6.4352622,
            longitude: 3.440491,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          customMapStyle={[]}
          style={styles.mapView}
        ></MapView>
        
        <View style={styles.rect}>
          <Text
            
            style={styles.yourLocation}
          >Your Location is...</Text>
        </View>
       
        <View style={styles.rect2}>
          <View style={styles.rect3}></View>
        <TouchableOpacity
        onPress={() => props.navigation.navigate("Dashboard3")}
        >
          <Text style={styles.noOrdersYet}>No orders yet</Text>
        </TouchableOpacity>
        </View>
       
        <Image
          source={require("../assets/images/undraw_empty_xct9.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        
        <TouchableOpacity 
        onPress ={() => setOpenMenu(!openMenu)}
        style={styles.button1}
         
        ></TouchableOpacity>

         <TouchableOpacity
              onPress ={() => setOpenMenu(!openMenu)}>
        <Icon name="three-bars" style={styles.icon}></Icon>
        </TouchableOpacity>
        
        <View style={styles.rect4}>
          <Text style={styles.loremIpsum}>10 Ligali Ayo...</Text>
        </View>
        <Image
          source={require("../assets/images/7_avatar-512.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
      </View>
    </View>
    </SideMenu>
  
  );
}


export default Dashboard2;

