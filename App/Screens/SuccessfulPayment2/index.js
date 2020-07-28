import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  
} from "react-native";
import styles from './styles';


function SuccessfulPayment2(props) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.scrollArea1}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea1_contentContainerStyle}
        >
          <View style={styles.successfulPayment1Stack}>
            <Text style={styles.successfulPayment1}>Successful Payment</Text>
            <Image
              source={require("../assets/images/undraw_successful_purchase_uyin.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
          </View>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.back1}>Back</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
    </ScrollView>
  );
}





export default SuccessfulPayment2;
