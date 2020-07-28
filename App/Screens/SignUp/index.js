import React, { useState, useEffect, useContext, Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import styles from './styles'; 
import axios from axios;
import { baseURL } from "../../Global/index";
import {userDetails} from '../../contexts/riderContext';

function SignUp(props) {

  const {riderId} = useContext(userDetails);

  const [num1, setNum1] = useState(''),
    [firstName, setFirstname] = useState(''),
    [lastName, setLastname] = useState(''),
    [phone, setPhone] = useState(''),
    [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [isLoading, setIsloading] = useState(false);

  const signUP = () => {
    if (firstName === '') {
      Alert.alert(
        'Required Field',
        'Firstname field is empty!',
        [
          {
            text: 'OK',
            onPress: () => console.log('Firstname field is empty!'),
          },
        ],
        {cancelable: false},
      );
    } else if (lastname === '') {
      Alert.alert(
        'Required Field',
        'Lastname field is empty!',
        [
          {
            text: 'OK',
            onPress: () => console.log('Lastname field is empty!'),
          },
        ],
        {cancelable: false},
      );
    } else if (email === '') {
      Alert.alert(
        'Required Field',
        'Email field is empty!',
        [
          {
            text: 'OK',
            onPress: () => console.log('Email field is empty!'),
          },
        ],
        {cancelable: false},
      );
    } else if (password === '') {
      Alert.alert(
        'Required Field',
        'Password field is empty!',
        [
          {
            text: 'OK',
            onPress: () => console.log('Password field is empty!'),
          },
        ],
        {cancelable: false},
      );
    } else {
      NetInfo.fetch().then(state => {
        console.log('Is connected?', state.isConnected);
        if (state.isConnected) {
          doSignUP();
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

  const doSignUP = async () => {
    console.log('doSignUP====');

    setIsloading(true);
    await axios
      .put(`${baseURL}/rider/update/rider`, {
        firstName: firstname,
        lastName: lastname,
        phone,
        email,
        password,
        riderId,
        userType: 'rider',
      })
      .then(({data}) => {
        console.log('Sign up Result---------', JSON.stringify(data));
      })
      .catch(err => {
        setIsloading(false);
      });
  };
    return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.rect2}></View>
        <View style={styles.firstNameRow}>
          <Text style={styles.firstName}>First Name</Text>
          <Text style={styles.lastName}>Last Name</Text>
        </View>
        <View style={styles.rect3Row}>
          <View style={styles.rect3}>
            <TextInput 
            value={firstName}
            onChangeText={(firstName) => {
            setFirstname(firstName)}}
            placeholder="First name" 
            style={styles.textInput5}
            keyboardType="default"
            placeholderTextColor="gray"
            underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.rect4}>
            <TextInput 
            value={lastName}
            onChangeText={(lastName) => {
              setLastname(lastName)
            }}
            placeholder="Last name" 
            style={styles.textInput4}
            keyboardType="default"
            placeholderTextColor="gray"
            underlineColorAndroid="transparent"
            />
          </View>
        </View>
        <Text style={styles.phoneNumber}>Phone number</Text>
        <View style={styles.rect5Row}>
          <View style={styles.rect5}>
           <Icon name="chevron-small-down" style={styles.icon}></Icon>
              <Image
                source={require("../assets/images/flag-button-square-250.png")}
                resizeMode="contain"
                style={styles.image2}
              ></Image>
          </View>
          <View style={styles.rect6}>
            <TextInput
            value={phone} 
            onChangeText= {(phone) => {
              setPhone(phone)}}
            placeholder="+234"
             keyboardType = 'numeric' 
            style={styles.textInput}
            placeholderTextColor="gray"
            underlineColorAndroid="transparent"
            />
          </View>
        </View>
        <Text style={styles.email}>Email</Text>
        <View style={styles.rect7}>
          <TextInput 
          value={email}
          onChangeText={(email) => {
            setEmail(email)
          }}
          placeholder= "hi@gmail.com"
           keyboardType="email-address"
           placeholderTextColor="lightgray"
           underlineColorAndroid="transparent"
          style={styles.textInput2}/>
        </View>
        <Text style={styles.password}>Password</Text>
        <View style={styles.rect8}>
          <TextInput 
          value={password}
          onChangeText={(password) => {
            setPassword(password);
          }}
          placeholder="* * * * * * *" 
          keyboardType="default"
          secureTextEntry={true}
          placeholderTextColor="lightgray"
          style={styles.textInput3}></TextInput>
        </View>

        <Text style={styles.password}>Confirm Password</Text>
        <View style={styles.rect8}>
          <TextInput 
          value={cpassword}
          onChangeText={(cpassword) => {
            setPassword(cpassword);
          }}
          placeholder="* * * * * * *" 
          keyboardType="default"
          secureTextEntry={true}
          placeholderTextColor="lightgray"
          style={styles.textInput3}></TextInput>
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("DriverInfo")}
          style={styles.button}
        >
          <Text style={styles.signUp}>
          {isLoading ? 'Please wait' : 'Sign Up'}
            Sign up
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={() => props.navigation.navigate("SignIn")}>
        <Text style={styles.signIn}>Sign in?</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
    
  );
}




export default SignUp;
