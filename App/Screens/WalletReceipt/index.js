import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import MapView from "react-native-maps";
import Svg, { Ellipse } from "react-native-svg";
import styles from './styles';

function WalletFund(props) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Icon name="chevron-small-left" style={styles.icon}></Icon>
        <Text style={styles.reciept}>Reciept</Text>
      </View>
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
        <View style={styles.orderId59755Row}>
          <Text style={styles.orderId59755}>Order ID #59755</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.print}>Print</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.riderInformationStackStackRow}>
        <View style={styles.riderInformationStackStack}>
          <View style={styles.riderInformationStack}>
            <Text style={styles.riderInformation}>Rider Information</Text>
            <Image
              source={require("../assets/images/7_avatar-512.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
          </View>
          <Text style={styles.mashoodAdenuga}>Mashood Adenuga</Text>
          <Text style={styles.motorcycleFhgy65}>Motorcycle FHGY65</Text>
        </View>
        <View style={styles.deliveredColumn}>
          <Text style={styles.delivered}>Delivered</Text>
          <Text style={styles.loremIpsum}>15:00:24 march</Text>
        </View>
      </View>
      <Text style={styles.deliveredTo}>Delivered To</Text>
      <View style={styles.ellipseRow}>
        <Svg viewBox="0 0 23.75 25" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(74,74,74,1)"
            cx={12}
            cy={13}
            rx={12}
            ry={13}
          ></Ellipse>
        </Svg>
        <Text style={styles.loremIpsum2}>12 Olademeji close, Ikoyi</Text>
      </View>
      <View style={styles.ellipse1Row}>
        <Svg viewBox="0 0 23.75 25" style={styles.ellipse1}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(74,74,74,1)"
            cx={12}
            cy={13}
            rx={12}
            ry={13}
          ></Ellipse>
        </Svg>
        <Text style={styles.loremIpsum3}>12 Olademeji close, Ikoyi</Text>
      </View>
      <Text style={styles.paymentInformation}>Payment Information</Text>
      <View style={styles.baseFareRow}>
        <Text style={styles.baseFare}>Base Fare</Text>
        <Text style={styles.ngn600}>NGN 600</Text>
      </View>
      <View style={styles.timeRow}>
        <Text style={styles.time}>Time</Text>
        <Text style={styles.ngn601}>NGN 600</Text>
      </View>
      <View style={styles.distanceRow}>
        <Text style={styles.distance}>Distance</Text>
        <Text style={styles.ngn602}>NGN 600</Text>
      </View>
      <View style={styles.totalRow}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.ngn1800}>NGN 1,800</Text>
      </View>
    </View>
    </ScrollView>
  );
}




export default WalletFund;
