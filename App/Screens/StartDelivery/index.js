import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import MapView from "react-native-maps";
import OcticonsIcon from "react-native-vector-icons/Octicons";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import call from 'react-native-phone-call';
import styles from './styles';

export default class StartDelivery extends React.Component {

call = () => {
    //handler to make a call
    const args = {
      number: '0000000000',
      prompt: false,
    };

    call(args).catch(console.error);
  };

 constructor (props){
     super (props);
   }   

  render() {
  return (
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
          <View style={styles.rect1}></View>
          
        </View>
        <TouchableOpacity style={styles.button1}></TouchableOpacity>
        <OcticonsIcon name="three-bars" style={styles.icon}></OcticonsIcon>
        <Image
          source={require("../assets/images/7_avatar-512.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <View style={styles.rect2}>
        <Image
            source={require("../assets/images/11_avatar-512.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <View style={styles.noraIkejiRow}>
            <Text style={styles.noraIkeji}>Nora Ikeji</Text>
            <Text style={styles.ngn1200}>NGN 1,200</Text>
          </View>
          <View style={styles.loremIpsumRow}>
            <Text style={styles.loremIpsum}>3 stops cash payment</Text>
            <Text style={styles.loremIpsum2}>25 mins</Text>
          </View>
          <View style={styles.icon2Row}>
            <TouchableOpacity onPress={this.call}>
            <FeatherIcon name="phone" style={styles.icon2}></FeatherIcon>
          </TouchableOpacity>
            <Text style={styles.call}>Call</Text>
            
            <FeatherIcon
              name="message-circle"
              style={styles.icon3}
            ></FeatherIcon>
             <TouchableOpacity
             onPress = {()=> this.props.navigation.navigate("Chat")}
             >
            <Text style={styles.chat}>Chat</Text>
            </TouchableOpacity>
            <MaterialIconsIcon
              name="cancel"
              style={styles.icon4}
            ></MaterialIconsIcon>
            <Text style={styles.cancelOrder}>Cancel Order</Text>
          </View>
        </View>
        <TouchableOpacity 
         onPress = {()=> this.props.navigation.navigate("StartDelivery2")}
        style={styles.button2}>
          <Text style={styles.startDelivery}>Start Delivery</Text>
        </TouchableOpacity>
        <View style={styles.rect3}>
          <Text style={styles.computerVillage}>Computer Village...</Text>
        </View>
        <View style={styles.rect4}>
          <Text style={styles.loremIpsum3}>10 Ligali Ayo..</Text>
        </View>
      </View>
    </View>
  );
}
}


