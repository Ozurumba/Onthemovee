import React, { useState, useEffect, useContext, Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from './styles';
import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-community/async-storage';
import { baseURL } from "../../Global/index";
import {userDetails} from '../../contexts/LogUserContext';


function SignIn(props) {

const {setToken, setRiderID} = useContext(userDetails);

const [email, setEmail] = useState(''),
    [isLoading, setIsloading] = useState(false),
    [password, setPassword] = useState('');


    const signIn = () => {
      if (email === '') {
        Alert.alert(
          'Required Field',
          'Email is required!',
          [
            {
              text: 'OK',
              onPress: () => console.log('Email is required!'),
            },
          ],
          {cancelable: false},
        );
      } else if (password === '') {
        Alert.alert(
          'Required Field',
          'Password is required!',
          [
            {
              text: 'OK',
              onPress: () => console.log('password is required!'),
            },
          ],
          {cancelable: false},
        );
      } else {
        NetInfo.fetch().then((state) => {
          console.log('Is connected?', state.isConnected);
          if (state.isConnected) {
            doSignIn();
          } else {
            Alert.alert(
              'Network Connection',
              'Please check your network connection',
              [
                {
                  text: 'OK',
                  onPress: () => console.log('Network Connection'),
                },
              ],
              {cancelable: false},
            );
          }
        });
      }
    };
  
    doSignIn = async () => {
      console.log('DoSignIn====');
  
      setIsloading(true);
      await axios
        .post(`${baseURL}/login/rider`, {
          email,
          password,
          userType: 'rider',
        })
        .then(({data}) => {
          console.log('Result---------', JSON.stringify(data));
          setIsloading(false);
          setEmail('');
          setPassword('');
          if (data.user.isVerified) {
            setToken(data.token);
            setRiderID(data.user._id);
  
            AsyncStorage.multiSet([
              ['userToken', data.token],
              ['firstname', data.user.firstName],
              ['lastname', data.user.lastName],
              ['email', data.user.email],
              ['phone', data.user.phone],
              ['riderId', data.user._id],
              ['isLoggedIn', 'true'],
            ]);
            navigation.navigate('Dashboard');
          } else {
            navigation.navigate('Verification');
          }
        })
        .catch((err) => {
          console.log(JSON.stringify(err.response.data.error));
          setIsloading(false);
          if (err.response.data.error === 'Password do not match') {
            Alert.alert(
              'Login Error',
              'Invalid email/password. Please check details and try again!',
              [
                {
                  text: 'OK',
                  onPress: () => console.log('OK Pressed'),
                },
              ],
              {cancelable: false},
            );
          } else if (err.response.data.error === 'User does not exist') {
            Alert.alert(
              'Login Error',
              'Invalid email/password. Please check details and try again!',
              [
                {
                  text: 'OK',
                  onPress: () => console.log('OK Pressed'),
                },
              ],
              {cancelable: false},
            );
          } else {
            Alert.alert(
              'Error',
              'Something went wrong. Please check network connection and try again!',
              [
                {
                  text: 'OK',
                  onPress: () => console.log('OK Pressed'),
                },
              ],
              {cancelable: false},
            );
          }
        });
    };

return (
    
    <View style={styles.container}>
      <Text style={styles.weAreOnthemoov}>We are onthemoov</Text>
      <View style={styles.rect}>
        <View style={styles.rect1}></View>
      </View>
      <TouchableOpacity
          onPress={() => props.navigation.navigate("Dashboard1")}
        style={styles.button1}
      >
        <Text style={styles.signIn}>
        {isLoading ? 'Please wait' : 'Sign in'}
          Sign in
          </Text>
      </TouchableOpacity>
      <TouchableOpacity
       onPress={() => props.navigation.navigate("SignUp")}>
      <Text style={styles.signUp}> Sign Up </Text>
      </TouchableOpacity>
      
      <View style={styles.rect2}>
        <TextInput 
        value={email}
        onChangeText={(email) => {
          setEmail(email);
        }}
        placeholder="hi@gmail.com"
        keyboardType="email-address"
        placeholderTextColor="gray"
        
         style={styles.textInput}
         ></TextInput>
      </View>
      <View style={styles.rect3}>
        <View style={styles.textInput1Row}>
          <TextInput 
          value={password}
          onChangeText={(password) => {
            setPassword(password);
          }}
          placeholder="* * * * *" 
          style={styles.textInput1}
          keyboardType="default"
          secureTextEntry={true}
          placeholderTextColor="gray"
          
          />

          <Icon name="eye" style={styles.icon}></Icon>
          
        </View>
        
      </View>
      
      <Text style={styles.emailAddress}>Email address</Text>
      <Text style={styles.password}>Password</Text>
      <Text style={styles.forgotPassword}>Forgot password?</Text>
    </View>
    
  );
}



export default SignIn;
