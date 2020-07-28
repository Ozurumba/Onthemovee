import React, {useState, useEffect, Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";
import styles from './styles';
import axios from "axios";

function Verification(props) {
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }
  if (!confirm) {
    return (
      <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber('+1 650-555-3434')}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <ImageBackground
          source={require("../assets/images/car.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <Text style={styles.loremIpsum}>Get started with your phone</Text>
        </ImageBackground>
        <View style={styles.rect}>
          <View style={styles.rect2}></View>
          <Text style={styles.verification}>Verification</Text>
          <Text style={styles.loremIpsum2}>
            Your information has been sent to us and is
          </Text>
          <Text style={styles.loremIpsum3}>
            being processed prior to approval.
          </Text>
          <TouchableOpacity 
          onPress={() => confirmCode()}
          onPress={() => props.navigation.navigate("Dashboard1")}
          style={styles.button}>
            <Text style={styles.verify}>Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => props.navigation.navigate("SignIn")}>
          <Text style={styles.resend}>Resend</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.sendAnything}>Send anything</Text>
    </View>
  );
}



export default Verification;
