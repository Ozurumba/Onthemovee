import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image, ScrollView } from "react-native";
import MapView from "react-native-maps";
import Icon from "react-native-vector-icons/Octicons";
import Svg, { Ellipse } from "react-native-svg";
import MapViewDirections from 'react-native-maps-directions';
import styles from './styles';

function ReqRej(props) {

let origin = {latitude: 37.3318456, longitude: -122.0296002};
let destination = {latitude: 37.771707, longitude: -122.4053769};
let GOOGLE_MAPS_APIKEY = 'AIzaSyDM9DQOPqmXnIRkdZkAa57rQrWZM-EpOww';

  return (
    <ScrollView>
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
          style={styles.mapView}>
           
          <MapViewDirections
            origin={origin}
            destination={destination}
             apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={13}
              strokeColor="hotpink"
          />
          
          </MapView>
          
        <TouchableOpacity style={styles.button1}>
          <Icon name="three-bars" style={styles.icon1}></Icon>
        </TouchableOpacity>
        
        <View style={styles.rect2}>
          <View style={styles.rect4}></View>
          <Text style={styles.tripInformation}>Trip information</Text>
          <View style={styles.ngnRow}>
            <Text style={styles.ngn}>NGN</Text>
            <Text style={styles.loremIpsum}>1200</Text>
          </View>
        </View>
        <View style={styles.rect3}>
          <View style={styles.ellipseRow}>
            <Svg viewBox="0 0 41.9 38" style={styles.ellipse}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(38,172,209,1)"
                cx={21}
                cy={19}
                rx={21}
                ry={19}
              ></Ellipse>
            </Svg>
            <Text style={styles.loremIpsum2}>10 Akin Ogunlewe Street</Text>
          </View>
          <View style={styles.ellipse1Row}>
            <Svg viewBox="0 0 41.9 38" style={styles.ellipse1}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(74,74,74,1)"
                cx={21}
                cy={19}
                rx={21}
                ry={19}
              ></Ellipse>
            </Svg>
            <Text style={styles.loremIpsum3}>10 Akin Ogunlewe Street</Text>
          </View>
          <Image
            source={require("../assets/images/importing-personal-goods-into-South-Africa.jpg")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <Text style={styles.customerNote}>Customer note</Text>
          <Text style={styles.loremIpsum4}>
            I have a brown small box to move to my friend ....
          </Text>
          <View style={styles.button2Row}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Dashboard3")}
              style={styles.button2}
            >
              <Text style={styles.decline}>Decline</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("StartDelivery")}
              style={styles.button3}
            >
              <Text style={styles.accept}>Accept</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image
          source={require("../assets/images/7_avatar-512.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
         
      </View>
     
    </View>
    </ScrollView>
  );
}



export default ReqRej;
