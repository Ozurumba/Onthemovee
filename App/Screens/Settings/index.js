import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import styles from './styles';


function Settings(props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
      <TouchableOpacity
      onPress={() => props.navigation.navigate("Dashboard1")}>
        <Icon name="chevron-small-left" style={styles.icon}></Icon>
        </TouchableOpacity>
        <View style={styles.settingsStack}>
          <Text style={styles.settings}>Settings</Text>
          <ImageBackground
            source={require("../assets/images/undraw_male_avatar_323b.png")}
            resizeMode="contain"
            style={styles.image}
            imageStyle={styles.image_imageStyle}
          >
            <View style={styles.rect}>
              <Text style={styles.change}>Change</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
      <Text style={styles.mushoodAkintoye}>Mushood Akintoye</Text>
      <Text style={styles.loremIpsum}>TOYOTA CAMRY 2007 - FRTYN</Text>
     
      <Text style={styles.firstName}>First name</Text>
      <View style={styles.lionelRow}>
        <Text style={styles.lionel}>Lionel</Text>
        <View style={styles.rect3}>
          <Text style={styles.change2}>Change</Text>
        </View>
      </View>
      <Text style={styles.lastName}>Last name</Text>
      <View style={styles.okoeguRow}>
        <Text style={styles.okoegu}>Okoegu</Text>
        <View style={styles.rect4}>
          <Text style={styles.change3}>Change</Text>
        </View>
      </View>
      <View style={styles.emailColumnRow}>
        <View style={styles.emailColumn}>
          <Text style={styles.email}>Email</Text>
          <Text style={styles.hiGmailCom}>hi@gmail.com</Text>
        </View>
        <View style={styles.rect5}>
          <Text style={styles.change4}>Change</Text>
        </View>
      </View>
      <Text style={styles.phone}>Phone</Text>
      <View style={styles.loremIpsum2Row}>
        <Text style={styles.loremIpsum2}>+234478595949</Text>
        <View style={styles.rect6}>
          <Text style={styles.change5}>Change</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}
       onPress={() => props.navigation.navigate("SignInn")}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => props.navigation.navigate("ChangePassword")}>
      <Text style={styles.changePassword}>Change Password</Text>
      </TouchableOpacity>
    </View>
  );
}





export default Settings;
