import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Octicons";

import styles from './styles';

function Captured6(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button1}>
        <Text style={styles.send}>Send</Text>
      </TouchableOpacity>
      <View style={styles.rect1}>
      <TouchableOpacity
      onPress ={()=> props.navigation.navigate("Dashboard1")}>
        <Icon name="x" style={styles.icon}></Icon>
        </TouchableOpacity>
      </View>
      <Text style={styles.paymentFailed}>Order Cancelled</Text>
      <Text style={styles.loremIpsum}>
        Your application has been received and is being
      </Text>
      <Image
        source={require("../assets/images/undraw_cancel_u1it.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.loremIpsum1}>
        Your application has been received and is being
      </Text>
      <Text style={styles.loremIpsum2}>
        Your application has been received and is being
      </Text>
      <Text style={styles.loremIpsum3}>
        Your application has been received and is being
      </Text>
    </View>
  );
}


export default Captured6;
