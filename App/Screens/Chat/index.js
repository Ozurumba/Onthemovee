import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TextInput, ScrollView, TouchableOpacity } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Svg, { Ellipse } from "react-native-svg";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import styles from './stlyes';

function Chat(props) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <View style={styles.iconRow}>
          <TouchableOpacity
          onPress={() => props.navigation.navigate("OrderInfo")}>
            <EntypoIcon
              name="chevron-small-left"
              style={styles.icon}
            ></EntypoIcon>
            </TouchableOpacity>
            <Svg viewBox="0 0 30 29" style={styles.ellipse}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(230, 230, 230,1)"
                cx={15}
                cy={14}
                rx={15}
                ry={14}
              ></Ellipse>
            </Svg>
            <Text style={styles.moshoodAdenuga}>Moshood Adenuga</Text>
          </View>
        </View>
        <Image
          source={require("../assets/images/undraw_message_sent_1030.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.today}>Today</Text>
      </View>
      <View style={styles.ellipse2Row}>
        <Svg viewBox="0 0 23 23" style={styles.ellipse2}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={12}
            cy={12}
            rx={12}
            ry={12}
          ></Ellipse>
        </Svg>
        <View style={styles.rect2}>
          <Text style={styles.loremIpsum}>Hi Moshood I want to deliver</Text>
        </View>
      </View>
      <View style={styles.ellipse3Row}>
        <Svg viewBox="0 0 23 23" style={styles.ellipse3}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={12}
            cy={12}
            rx={12}
            ry={12}
          ></Ellipse>
        </Svg>
        <View style={styles.rect3}>
          <Text style={styles.iAmAtOnikpan}>I am at Onikpan</Text>
        </View>
      </View>
      <View style={styles.rect4}>
        <Text style={styles.iAmOnMyWay}>I am on my way,</Text>
      </View>
      <View style={styles.rect5}>
        <Text style={styles.loremIpsum2}>The color of my Motorcycle</Text>
         
      </View>
      <View style={styles.rect6Row}>
        <View style={styles.rect6}>
          <TextInput
            placeholder="Type a message"
            style={styles.typeAMessage}
          ></TextInput>
        </View>
        <TouchableOpacity>
        <View style={styles.rect7}>
          <IoniconsIcon name="md-send" style={styles.icon2}></IoniconsIcon>
        </View>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
}



export default Chat;
