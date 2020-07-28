import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import call from 'react-native-phone-call';
import Icon from "react-native-vector-icons/Entypo";
import Svg, { Ellipse } from "react-native-svg";
import styles from './styles';

export default class OrderInfo extends React.Component {
  
  call = () => {
    //handler to make a call
    const args = {
      number: '0000000000',
      prompt: false,
    };

    call(args).catch(console.error);
  };

 constructor (props){
     super (props);
   }   

  render() {
    return (
     
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.iconRow}>
        <TouchableOpacity
        onPress = {()=> this.props.navigation.navigate("StartDelivery3")}
        >
          <Icon name="chevron-small-left" style={styles.icon}></Icon>
          </TouchableOpacity>
          <View style={styles.totalCostColumn}>
            <Text style={styles.totalCost}>Total Cost</Text>
            <View style={styles.ngnRow}>
              <Text style={styles.ngn}>NGN</Text>
              <Text style={styles.loremIpsum3}>1200</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity 
        onPress = {()=> this.props.navigation.navigate("WalletReceipt")}
      style={styles.button2}>
        <Text style={styles.save}>Done</Text>
      </TouchableOpacity>
      <View style={styles.ellipse1Row}>
        <Svg viewBox="0 0 31 27" style={styles.ellipse1}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(74,74,74,1)"
            cx={16}
            cy={14}
            rx={16}
            ry={14}
          ></Ellipse>
        </Svg>
        <Text style={styles.whereTo}>Where to?</Text>
      </View>
      <View style={styles.ellipse2Row}>
        <Svg viewBox="0 0 31 27" style={styles.ellipse2}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(74,74,74,1)"
            cx={16}
            cy={14}
            rx={16}
            ry={14}
          ></Ellipse>
        </Svg>
        <Text style={styles.whereTo2}>Where to?</Text>
      </View>
      <View style={styles.ellipse3Row}>
        <Svg viewBox="0 0 31 27" style={styles.ellipse3}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(74,74,74,1)"
            cx={16}
            cy={14}
            rx={16}
            ry={14}
          ></Ellipse>
        </Svg>
        <Text style={styles.whereTo1}>Where to?</Text>
      </View>
      <View style={styles.receiversNameColumnRow}>
        <View style={styles.receiversNameColumn}>
          <Text style={styles.receiversName}>Receiver&#39;s name</Text>
          <Text style={styles.obinnaOzurumba}>Obinna Ozurumba</Text>
        </View>
        <TouchableOpacity style={styles.button}
        onPress = {()=> this.props.navigation.navigate("CapturePackage")}
        >
          <Text style={styles.chat}>Reach</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.receiversPhoneColumnRow}>
        <View style={styles.receiversPhoneColumn}>
          <Text style={styles.receiversPhone}>Receiver&#39;s phone</Text>
          <Text style={styles.loremIpsum}>+234816517759</Text>
        </View>
        <TouchableOpacity style={styles.button1}>
            <Button title="call" onPress={this.call} />
        </TouchableOpacity>
      </View>
      <Text style={styles.loremIpsum1}>+2348165177599</Text>
      <Text style={styles.receiversPhone1}>Receiver&#39;s phone</Text>
      <Text style={styles.obinnaOzurumba1}>Obinna Ozurumba</Text>
      <Text style={styles.receiversName1}>Receiver&#39;s name</Text>
      <Text style={styles.receiversName2}>Receiver&#39;s name</Text>
      <Text style={styles.obinnaOzurumba2}>Obinna Ozurumba</Text>
      <Text style={styles.receiversPhone2}>Receiver&#39;s phone</Text>
      
    </View>

    );
  }
}



  