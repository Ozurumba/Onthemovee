import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  ScrollView
} from "react-native";
import MapView from "react-native-maps";
import Icon from "react-native-vector-icons/Octicons";
import SideMenuItems from '../components/sidemenu';
import SideMenu from 'react-native-side-menu';
import styles from './styles';


function Dashboard3(props) {
  
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
        <TouchableOpacity 
        onPress ={() => setOpenMenu(!openMenu)}
        style={styles.button}>
          <Icon name="three-bars" style={styles.icon}></Icon>
        </TouchableOpacity>
        <Image
          source={require("../assets/images/7_avatar-512.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <View style={styles.rect4}>
          <Text style={styles.loremIpsum}>10 Ligali Street..</Text>
        </View>
      </View>
      <ScrollView>
      <View style={styles.rect}>
        <View style={styles.rect2}>
          <Text style={styles.yourLocation}>Your location</Text>
        </View>
        <View style={styles.rect3}></View>
        <Text style={styles.noOrdersYet}>You have an order request!</Text>
        <TouchableOpacity
        onPress={() => props.navigation.navigate("ReqRej")}
        >
        <Text style={styles.swipeUp}> Swipe up</Text>
        </TouchableOpacity>
      </View>
       </ScrollView>
    </View>
    </SideMenu>
   
  );
}



export default Dashboard3;
