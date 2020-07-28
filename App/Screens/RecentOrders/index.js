import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import MapView from "react-native-maps";
import styles from './styles';

function RecentOrders(props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconStack}>
      <TouchableOpacity
        onPress= {() => props.navigation.navigate("Dashboard1")}>
        <Icon name="chevron-small-left" style={styles.icon}></Icon>
        </TouchableOpacity>
        
        <View style={styles.ordersStack}>
          <Text style={styles.orders}>Orders</Text>
          <Image
            source={require("../assets/images/undraw_deliveries_131a.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
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
          <Image
            source={require("../assets/images/11_avatar-512.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
        </View>
        
        <View style={styles.rect}>
        <TouchableOpacity
         onPress={() => props.navigation.navigate("WalletReceipt")}>
          <View style={styles.mashoodAdenugaRow}>
            <Text style={styles.mashoodAdenuga}>Mashood Adenuga</Text>
            <Text style={styles.ngn1200}>NGN 1,200</Text>
          </View>
        </TouchableOpacity>

          <View style={styles.loremIpsumRow}>
            <Text style={styles.loremIpsum}>3 Stops Delivered</Text>
            <Text style={styles.loremIpsum2}>24 march</Text>
          </View>
        </View>
      </View>
    </View>
  );
}


export default RecentOrders;
