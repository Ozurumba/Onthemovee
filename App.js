import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  createAppContainer,
} from '@react-navigation/stack';

import SplashScreen from './App/Screens/SplashScreen';
import WelcomeSlider from './App/Screens/WelcomeSlider'
import SignIn from './App/Screens/SignIn';
import Chat from './App/Screens/Chat';

import SignUp from './App/Screens/SignUp';
import DriverInfo from './App/Screens/DriverInfo';
import Dashboard1 from './App/Screens/Dashboard1';
import Dashboard2 from './App/Screens/Dashboard2';
import Dashboard3 from './App/Screens/Dashboard3';
import ReqRej from './App/Screens/ReqRej';
import OrderInfo from './App/Screens/OrderInfo';
import WalletReceipt from './App/Screens/WalletReceipt';
import RecentOrders from './App/Screens/RecentOrders';
import Settings from './App/Screens/Settings';
import SuccessfulPayment1 from './App/Screens/SuccessfulPayment1';
import SuccessfulPayment2 from './App/Screens/SuccessfulPayment2';
import Verification from './App/Screens/Verification';
import StartDelivery from './App/Screens/StartDelivery';
import StartDelivery2 from './App/Screens/StartDelivery2';
import StartDelivery3 from './App/Screens/StartDelivery3';
import CapturePackage from './App/Screens/CapturePackage';
import Captured5 from './App/Screens/Captured5';
import EarningStats from './App/Screens/EarningStats';
import ContactUs from './App/Screens/ContactUs';
import Captured4 from './App/Screens/Captured4';
import Captured6 from './App/Screens/Captured6';
import ChangePassword from './App/Screens/ChangePassword';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SplashScreen"
          component={SplashScreen}
        />
        
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="WelcomeSlider"
          component={WelcomeSlider}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="DriverInfo"
          component={DriverInfo}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Chat"
          component={Chat}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Dashboard1"
          component={Dashboard1}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Dashboard2"
          component={Dashboard2}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Dashboard3"
          component={Dashboard3}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="ReqRej"
          component={ReqRej}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="OrderInfo"
          component={OrderInfo}
        />
       
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="RecentOrders"
          component={RecentOrders}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Settings"
          component={Settings}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SuccesfulPayment1"
          component={SuccessfulPayment1}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Verification"
          component={Verification}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="StartDelivery"
          component={StartDelivery}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="StartDelivery2"
          component={StartDelivery2}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="StartDelivery3"
          component={StartDelivery3}
        />

         <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="CapturePackage"
          component={CapturePackage}
        />
       <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Captured5"
          component={Captured5}
        />
      <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SuccessfulPayment1"
          component={SuccessfulPayment1}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="ContactUs"
          component={ContactUs}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="EarningStats"
          component={EarningStats}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Captured4"
          component={Captured4}
        />
         
         <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Captured6"
          component={Captured6}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SuccessfulPayment2"
          component={SuccessfulPayment2}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="ChangePassword"
          component={ChangePassword}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="WalletReceipt"
          component={WalletReceipt}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
