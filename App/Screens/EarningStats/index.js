import React, { Component } from "react";
import { StyleSheet, View, Text, Switch, TouchableOpacity } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import styles from './styles';

function EarnStat(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectRow}>
        <View style={styles.rect}>
          <Text style={styles.numberOfTrips}>Number of trips</Text>
          <Text style={styles.loremIpsum}>234</Text>
        </View>
        <View style={styles.rect1}>
          <Text style={styles.totalEarnedN}>Total earned (N)</Text>
          <Text style={styles.loremIpsum2}>52,000</Text>
        </View>
      </View>
      
    
      <View style={styles.rect2Row}>
        <View style={styles.rect2}>
          <Text style={styles.totalGainN}>Total gain (N)</Text>
          <Text style={styles.loremIpsum3}>20,500</Text>
        </View>
        <View style={styles.rect3}>
          <Text style={styles.driverScore}>Driver Score</Text>
          <Text style={styles.loremIpsum4}>60%</Text>
        </View>
      </View>
      <View style={styles.iconRow}>
        <TouchableOpacity
        onPress= {() => props.navigation.navigate("Dashboard1")}>
        <EntypoIcon name="chevron-small-left" style={styles.icon}></EntypoIcon>
        </TouchableOpacity>
        <Text style={styles.earningStats}>Earning Stats</Text>
      </View>
      <View style={styles.rect4}>
        <View style={styles.icon2Row}>
          <EntypoIcon name="briefcase" style={styles.icon2}></EntypoIcon>
          <Text style={styles.workAvailability}>Work Availability</Text>
          <Switch value={true} style={styles.switch}></Switch>
        </View>
        <Text style={styles.loremIpsum5}>
          The quick, brown fox jumps over a lazy dog. DJs
        </Text>
        <Text style={styles.loremIpsum6}>
          flock by when MTV ax quiz prog. Junk MTV quiz
        </Text>
        <Text style={styles.loremIpsum7}>
          by fox whelps. Bawds jog, flick quartz, vex .
        </Text>
      </View>
    </View>
  );
}



export default EarnStat;
