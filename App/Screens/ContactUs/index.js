import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Button
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import RNPickerSelect from 'react-native-picker-select';
import styles from './styles';

function ContactUs(props) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.iconRow}>
      <TouchableOpacity
      onPress = {() => props.navigation.navigate("Dashboard1")}>
        <EntypoIcon name="chevron-small-left" style={styles.icon}></EntypoIcon>
        </TouchableOpacity>
        <Text style={styles.contactUs}>Contact Us</Text>
      </View>
      <Text style={styles.loremIpsum}>Why will you like to contact us?</Text>
      <TouchableOpacity
        
        style={styles.button2}
      >
       <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'I have issues with my package', value: 'I have issues with my package' },
                { label: 'I missed the customer', value: 'I missed the customer' },
                 { label: 'My vehicle broke down', value: 'My vehicle broke down' },
                { label: 'I need a refund', value: 'I need a refund' },
            ]}
        />
        
      </TouchableOpacity>
      <View style={styles.rect2}>
        <TextInput
          placeholder="Write a package description"
          style={styles.writeComplain}
        ></TextInput>
        <Text style={styles.loremIpsum7}>0/150</Text>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("ContactUs")}
        style={styles.button}
      >
        <Text style={styles.loremIpsum8}>Choose file to upload</Text>
      </TouchableOpacity>
      <View style={styles.rect4}>
        <Text style={styles.send}>Send</Text>
      </View>
      <Text style={styles.loremIpsum2}>Tell us about your experience</Text>
      <Text style={styles.attatchFile}>Attatch file</Text>
      <View style={styles.loremIpsum3Stack}>
        <Text style={styles.loremIpsum3}>
          Our customer service try as much as possible
        </Text>
        <Text style={styles.loremIpsum4}>
         respond to your complaints via email within  
        </Text>
        <Text style={styles.loremIpsum5}>
          24 hours. Kindly bear with us. you can call us on line 01-6787-9085
        </Text>
          
      </View>
   <View style={styles.rect4}>
        <Text style={styles.send}>Send</Text>
      </View>
    </View>
     
    </ScrollView>
  );
}



export default ContactUs;
