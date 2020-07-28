import React, {useState, useContext, useRef} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Image,
} from 'react-native';
import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import {baseURL} from '../../global';
import styles from './styles';
import {userDetails} from '../../contexts/UserContext';
import image from '../../images/img3.png';

const SignUp = ({navigation}) => {
  const {customerId} = useContext(userDetails);

  const [num1, setNum1] = useState(''),
    [fname, setFname] = useState(''),
    [surname, setSurname] = useState(''),
    [phone, setPhone] = useState(''),
    [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [isLoading, setIsloading] = useState(false);

  const signUP = () => {
    if (fname === '') {
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
    } else if (surname === '') {
      Alert.alert(
        'Required Field',
        'Surname field is empty!',
        [
          {
            text: 'OK',
            onPress: () => console.log('Surname field is empty!'),
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
      .put(`${baseURL}/customer/update/customer`, {
        firstName: fname,
        lastName: surname,
        phone,
        email,
        password,
        customerId,
        userType: 'customer',
      })
      .then(({data}) => {
        console.log('Sign up Result---------', JSON.stringify(data));
      })
      .catch(err => {
        setIsloading(false);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <View style={styles.marginLR}>
          <Text style={styles.headerLabel}>Send anything</Text>
          <Text>Move packages anywere you want.</Text>
        </View>
        <Image source={image} style={styles.img} />
        <View style={styles.overlay} />
      </View>
      <View style={styles.form}>
        <View style={styles.bgRow}>
          <View style={styles.bar} />
        </View>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView keyboardDismissMode="interactive">
            <View style={styles.LRmargin}>
              <View style={styles.InputRow}>
                <View style={styles.width}>
                  <Text style={styles.label}>Firstname</Text>
                  <TextInput
                    value={fname}
                    onChangeText={fname => {
                      setFname(fname);
                    }}
                    style={[styles.textInput]}
                    placeholder="Firstname"
                    keyboardType="default"
                    placeholderTextColor="lightgray"
                    underlineColorAndroid="transparent"
                  />
                </View>
                <View style={styles.width}>
                  <Text style={styles.label}>Surname</Text>
                  <TextInput
                    value={surname}
                    onChangeText={surname => {
                      setSurname(surname);
                    }}
                    style={[styles.textInput]}
                    placeholder="Surname"
                    keyboardType="default"
                    placeholderTextColor="lightgray"
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
              <View style={{marginTop: 10, marginRight: 20}}>
                <Text style={styles.label}>Phone number</Text>
                <View style={styles.phoneRow}>
                  <View style={styles.flagWrapper}>
                    <View style={styles.flagPart2} />
                    <View style={styles.flagPart3} />
                    <View style={styles.flagPart4} />
                    <EntypoIcon
                      name="chevron-small-down"
                      color="black"
                      size={20}
                    />
                  </View>

                  <TextInput
                    value={phone}
                    onChangeText={number => {
                      setPhone(number);
                    }}
                    style={[styles.textInput, {marginLeft: 20, width: '79%'}]}
                    placeholder="8012345678"
                    keyboardType="number-pad"
                    placeholderTextColor="lightgray"
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>

              <View style={styles.marginTop}>
                <Text style={styles.label}>Email</Text>
                <View>
                  <TextInput
                    value={email}
                    onChangeText={email => {
                      setEmail(email);
                    }}
                    style={[styles.textInput]}
                    placeholder="Email"
                    keyboardType="email-address"
                    placeholderTextColor="lightgray"
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>

              <View style={styles.marginTop}>
                <Text style={styles.label}>Password</Text>
                <View>
                  <TextInput
                    value={password}
                    onChangeText={password => {
                      setPassword(password);
                    }}
                    style={[styles.textInput, {marginBottom: 20}]}
                    placeholder="*******"
                    keyboardType="default"
                    secureTextEntry={true}
                    placeholderTextColor="lightgray"
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
            </View>
            <View style={styles.LRmargin}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => signUP()}>
                <Text style={styles.btn}>
                  {isLoading ? 'Please wait' : 'Sign up'}
                </Text>
              </TouchableOpacity>
              <View style={styles.center}>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                  <Text style={styles.resend}>Sign in</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* <View style={{height: 50}} /> */}
          </ScrollView>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default SignUp;
