import React, {useState, useEffect, Component } from 'react';
import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Swiper from 'react-native-swiper';
import styles from './styles';
import { baseURL } from "../../Global/index"

function WelcomeSlider(props) {
  const [ phone, setPhone ] = useState("");

  const verifyPhone = () => {
    fetch(`${baseURL}/auth/verify`, {
      method: "POST",
      headers: {
        ACCEPT: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(phone)
    })
      .then(response => response.json())
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        console.log(err.message);
      });
  }
  return (
    
    <View style={styles.container}>
      <Text style={styles.sendAnything}>Send anything</Text>
      <Text style={styles.loremIpsum}>Move packages anywhere you want.</Text>

      <Swiper
        horizontal 
        from={1} 
        loop 
        timeout={2} 
        springConfig={{ speed: 11 }} 
        minDistanceForAction={0.15} 
        positionFixed
      >

  <View style={{ flex: 1 }}> 
  <Image source={require("../assets/images/undraw_on_the_way_ldaq.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      </View> 

  <View style={{ flex: 1 }} > 
<Image source={require("../assets/images/undraw_logistics_x4dc.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
  </View>


  <View style={{ flex: 1 }} > 
<Image source={require("../assets/images/undraw_navigator_a479.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
  </View>


  <View style={{ flex: 1 }} > 
<Image source={require("../assets/images/undraw_order_a_car_3tww.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
  </View>

</Swiper>

      
      <View style={styles.rect}>
        <Text style={styles.welcome1}>Welcome,</Text>
        <Text style={styles.loremIpsum1}>Get started with your phone.</Text>
        <View style={styles.button2Row}>
          <TouchableOpacity style={styles.button2}>
            <View style={styles.iconStack}>
              <Icon name="chevron-small-down" style={styles.icon}></Icon>
              <Image
                source={require("../assets/images/flag-button-square-250.png")}
                resizeMode="contain"
                style={styles.image2}
              ></Image>
            </View>
          </TouchableOpacity>
          <View style={styles.rect3}>
            <TextInput 
             placeholder="+234" 
             value={phone}
             keyboardType = 'numeric' 
             style={styles.textInput}
             onChange={(e) => setPhone(e.target.value)}
             >
             </TextInput>
          </View>
        </View>
        <TouchableOpacity style={styles.button}
        onPress={() => verifyPhone()}
          
        >
          <Text style={styles.start}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
}



export default WelcomeSlider;
