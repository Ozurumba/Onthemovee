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


function SuccessfulPayment1(props) {
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
              source={require("../assets/images/undraw_make_it_rain_iwk4.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
          </View>
          <TouchableOpacity 
          onPress = {() => props.navigation.navigate("Dashboard1")}
          style={styles.button1}>
            <Text style={styles.back1}>Back</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
    </ScrollView>
  );
}




export default SuccessfulPayment1;
