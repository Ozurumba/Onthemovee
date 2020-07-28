import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import styles from './styles';


function ChangePassword(props) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.rect1}></View>
        <Text style={styles.oldPassword}>Old password</Text>
        <View style={styles.rect2}>
          <TextInput 
          placeholder="*******" 
          keyboardType="default"
          secureTextEntry={true}
          placeholderTextColor="lightgray"
          style={styles.textInput}></TextInput>
        </View>
        <Text style={styles.newPassword}>New password</Text>
        <View style={styles.rect3}>
          <TextInput 
          placeholder="*******" 
          keyboardType="default"
          secureTextEntry={true}
          placeholderTextColor="lightgray"
          style={styles.textInput1}></TextInput>
        </View>
        <Text style={styles.confirmPassword}>Confirm password</Text>
        <View style={styles.rect4}>
          <TextInput 
          placeholder="*******" 
          keyboardType="default"
          secureTextEntry={true}
          placeholderTextColor="lightgray"
          style={styles.textInput2}></TextInput>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Dashboard1")}
          style={styles.button}
        >
          <Text style={styles.change}>Change</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
}



export default ChangePassword;
