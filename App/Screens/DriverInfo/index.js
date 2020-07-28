import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  Image
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import RNPickerSelect from 'react-native-picker-select';
import styles from './styles';


function DriverInfo(props) {



  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.buttonStack}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("SignIn")}
          style={styles.button}
        >
        <EntypoIcon name="chevron-small-left" style={styles.icon}></EntypoIcon>
        </TouchableOpacity>
      </View>
      <View style={styles.rect}>
      <Text style={styles.vehicleType}>Vehicle type</Text>
       

     
       <View style={styles.rect3}>
       <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Cars', value: 'Cars' },
                { label: 'Truck', value: 'Truck' },
                 { label: 'Van', value: 'Van' },
                { label: 'Motorcycle', value: 'Motorcycle' },
            ]}
        />
        </View>

        <Text style={styles.modalType}>Modal /Type</Text>
      

        <View style={styles.rect3}>
          <TextInput
            placeholder="Toyota Camry"
            style={styles.toyotaCamry}
          ></TextInput>
        </View>
        <Text style={styles.registrationNumber}>Registration number</Text>
        <View style={styles.rect4}>
          <TextInput placeholder="FN13KJQ" style={styles.fn13Kjq}></TextInput>
        </View>
        <Text style={styles.loremIpsum}>Upload driver&#39;s license</Text>
        <TouchableOpacity style={styles.button3}>
          <Text style={styles.loremIpsum4}> Choose file to upload</Text>
        </TouchableOpacity>
        <Text style={styles.loremIpsum2}>Upload vehicle insurance</Text>
        <TouchableOpacity style={styles.button4}>
          <Text style={styles.loremIpsum5}>Choose file to upload</Text>
        </TouchableOpacity>


 
 
        <Text style={styles.loremIpsum3}>Upload images of vehicle</Text>
        <TouchableOpacity style={styles.button5}>
          <Text style={styles.loremIpsum6}>Choose file to upload</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Verification")}
          style={styles.button2}
        >
          <Text style={styles.save}>Save</Text>
        </TouchableOpacity>
        
      </View>
    </View>
    </ScrollView>
  );
}



export default DriverInfo;
