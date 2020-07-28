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
import MapViewDirections from 'react-native-maps-directions';
import SideMenuItems from '../components/sidemenu';
import SideMenu from 'react-native-side-menu';
import styles from './styles';


function Dashboard1(props) {

let origin = {latitude: 37.3318456, longitude: -122.0296002};
let destination = {latitude: 37.771707, longitude: -122.4053769};
let GOOGLE_MAPS_APIKEY = 'AIzaSyDM9DQOPqmXnIRkdZkAa57rQrWZM-EpOww';

const [openMenu, setOpenMenu] = useState(false)




  return (

    <View style={styles.container}>
     <SideMenu
      menu={<SideMenuItems navigation={props.navigation} />}
      isOpen={openMenu}
      >
   
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
        >
        
         <MapViewDirections
            origin={origin}
            destination={destination}
             apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={13}
              strokeColor="hotpink"
          />
        </MapView>

              <View  style={styles.button}>
             <TouchableOpacity
              onPress ={() => setOpenMenu(!openMenu)}>
                 <Icon name="three-bars" style={styles.icon}></Icon>
             </TouchableOpacity> 
              </View>
              
      
        <Image
          source={require("../assets/images/7_avatar-512.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <View style={styles.rect4}>
          <Text style={styles.loremIpsum}>10 Ligali Street..</Text>
        </View>
        
      </View>
      <View style={styles.rect}>
        <View style={styles.rect2}>
          <Text style={styles.yourLocation}>Your location</Text>
        </View>
        <TouchableOpacity
        onPress={() => props.navigation.navigate("Dashboard2")}
        >
        <View style={styles.rect3}></View>
        <Text style={styles.noOrdersYet}>No Orders Yet!</Text>
        </TouchableOpacity>
        
      </View>
      </SideMenu>
    </View>
    
   
    

  );
}


export default Dashboard1;
