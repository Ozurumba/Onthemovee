import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import OcticonsIcon from "react-native-vector-icons/Octicons";
import styles from './styles';

function PictureNote(props) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.icon1Stack}>
        <OcticonsIcon name="x" style={styles.icon1}></OcticonsIcon>
        <View style={styles.rect1}>
          <OcticonsIcon name="x" style={styles.icon2}></OcticonsIcon>
        </View>
      </View>
      <Image
        source={require("../assets/images/importing-personal-goods-into-South-Africa.jpg")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.addANote}>Add a note</Text>
      <View style={styles.rect2}>
        <TextInput
          placeholder="Write a description"
          style={styles.writeADescription}
        ></TextInput>
        <Text style={styles.loremIpsum}>0/50</Text>
      </View>
      <TouchableOpacity style={styles.button1}>
        <Text style={styles.send}>Send</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

export default PictureNote;
