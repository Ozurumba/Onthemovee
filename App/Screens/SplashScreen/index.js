import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import styles from './styles';

function SplashScreen(props) {
  return (
    <View style={styles.container}>
    <TouchableOpacity
    onPress={() => props.navigation.navigate("WelcomeSlider")}
    >
     <LinearGradient
          colors={['#30D2BB', '#4377EF', ]}
          style={styles.linearGradient}
        >

         <Image
        source={require("../assets/images/on the moov logo white.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
          
        </LinearGradient>
     </TouchableOpacity>
    </View>
  );
}




export default SplashScreen;
