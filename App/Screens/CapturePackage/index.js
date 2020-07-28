import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import OcticonsIcon from "react-native-vector-icons/Octicons";
import Svg, { Ellipse } from "react-native-svg";
import FeatherIcon from "react-native-vector-icons/Feather";
import styles from './styles';

function CapturePackage(props) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.rect}>
        <OcticonsIcon name="x" style={styles.icon2}></OcticonsIcon>
      </View>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 90 90" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={45}
            cy={45}
            rx={45}
            ry={45}
          ></Ellipse>
        </Svg>
        <TouchableOpacity
         onPress={() => props.navigation.navigate("Capture")}>
        >
        <FeatherIcon name="camera" style={styles.icon}></FeatherIcon>
        </TouchableOpacity>
      </View>
      <Text style={styles.loremIpsum}>Tap to capture package</Text>
      <View style={styles.rect2}>
        <TextInput
          placeholder="Write a package"
          style={styles.writeAPackage}
        ></TextInput>
        <Text style={styles.loremIpsum2}>0/50</Text>
      </View>
      <Text style={styles.addADeliveryNote}>Add a note</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.send}>Send</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}



export default CapturePackage;
