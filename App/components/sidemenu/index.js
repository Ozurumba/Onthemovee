import React, {useState, useContext, useRef} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';


import styles from './styles';

const SideMenu = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userImg}>
          <EntypoIcon
            style={styles.userIcon}
            name="user"
            color="black"
            size={25}

          />
          
          {/* <Image source={user} style={styles.img} /> */}
        </View>
        <View>
          <Text style={styles.userName}>Ozurumba Obinna</Text>
          <Text style={styles.phoneNumber}>08165177599</Text>
        </View>
      </View>
      <View style={styles.content}>
        
        <TouchableOpacity
          onPress={() => navigation.navigate("EarningStats")}
        >
          <View style={styles.row}>
            <View style={styles.itemRow}>
              <EntypoIcon
                style={styles.itemIcon}
                name="briefcase"
                color="black"
                size={13}
              />
              <Text style={styles.itemText}>Earning Stats</Text>
            </View>
            <EntypoIcon
              style={[styles.itemIcon, {marginRight: 0}]}
              name="chevron-small-right"
              color="black"
              size={20}
            />
            
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity
         onPress={() => navigation.navigate("RecentOrders")}>
          <View style={styles.row}>
            <View style={styles.itemRow}>
              <EntypoIcon
                style={styles.itemIcon}
                name="clock"
                color="black"
                size={13}
              />
              <Text style={styles.itemText}>Orders</Text>
            </View>
            <EntypoIcon
              style={[styles.itemIcon, {marginRight: 0}]}
              name="chevron-small-right"
              color="black"
              size={20}
            />
            
          </View>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={() => navigation.navigate("SuccessfulPayment1")}>
          <View style={styles.row}>
            <View style={styles.itemRow}>
              <EntypoIcon
                style={styles.itemIcon}
                name="credit-card"
                color="black"
                size={13}
              />
              <Text style={styles.itemText}>Cards</Text>
            </View>
            <EntypoIcon
              style={[styles.itemIcon, {marginRight: 0}]}
              name="chevron-small-right"
              color="black"
              size={20}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={() => navigation.navigate("ContactUs")}>
          <View style={styles.row}>
            <View style={styles.itemRow}>
              <EntypoIcon
                style={styles.itemIcon}
                name="new-message"
                color="black"
                size={13}
              />
              <Text style={styles.itemText}>Contact us</Text>
            </View>
            <EntypoIcon
              style={[styles.itemIcon, {marginRight: 0}]}
              name="chevron-small-right"
              color="black"
              size={20}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={() => navigation.navigate("Captured4")}>
          <View style={styles.row}>
            <View style={styles.itemRow}>
              <EntypoIcon
                style={styles.itemIcon}
                name="help-with-circle"
                color="black"
                size={13}
              />
              <Text style={styles.itemText}>Help</Text>
            </View>
            <EntypoIcon
              style={[styles.itemIcon, {marginRight: 0}]}
              name="chevron-small-right"
              color="black"
              size={20}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={() => navigation.navigate("Settings")}>
          <View style={styles.row}>
            <View style={styles.itemRow}>
              <EntypoIcon
                style={styles.itemIcon}
                name="cog"
                color="black"
                size={13}
              />
              <Text style={styles.itemText}>Settings</Text>
            </View>
            <EntypoIcon
              style={[styles.itemIcon, {marginRight: 0}]}
              name="chevron-small-right"
              color="black"
              size={20}
            />
          </View>
        </TouchableOpacity>

         <TouchableOpacity
          onPress={() => navigation.navigate("Captured6")}>
          <View style={styles.row}>
            <View style={styles.itemRow}>
              <EntypoIcon
                style={styles.itemIcon}
                name="pin"
                color="black"
                size={13}
              />
              <Text style={styles.itemText}>Update Vehicle</Text>
            </View>
            <EntypoIcon
              style={[styles.itemIcon, {marginRight: 0}]}
              name="chevron-small-right"
              color="black"
              size={20}
            />
          </View>
        </TouchableOpacity>

      </View>
      <TouchableOpacity
       onPress={() => navigation.navigate("SignIn")}>
        <View style={[styles.row, {marginLeft: 20, marginRight: 20}]}>
          <View style={styles.itemRow}>
            <EntypoIcon
              style={styles.itemIcon}
              name="log-out"
              color="black"
              size={13}
            />
            <Text style={styles.itemText}>Logout</Text>
          </View>
          <EntypoIcon
            style={[styles.itemIcon, {marginRight: 0}]}
            name="chevron-small-right"
            color="black"
            size={20}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress = {'Analytics'}
      >
      <View
      style={[styles.row, { marginBottom: 10, marginLeft: 10}]}
      > 
      <EntypoIcon
      name= "log-in"
      color= 'red'/> 

      


      </View>

      </TouchableOpacity>
    </View>
  );
};


export default SideMenu;
