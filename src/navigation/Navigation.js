import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScrollingScreen from '../screens/ScrollingScreen';
import SplashScreen from '../screens/SplashScreen';
import Home from '../screens/Home';
import Login from '../screens/Login';

import Dashboard from '../screens/Dashboard';
import Section from '../screens/Section';
import Test from '../screens/Test';
import VideoScreen from '../screens/VideoScreen';


// import ScrollingScreen from '../screens/ScrollingScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name='Splash' component={SplashScreen} options={
          {
            headerShown: false,
            statusBarStyle: 'auto'
          }
        } />
        <Stack.Screen name='home' component={Home} options={
          { headerShown: false }
        } />
        <Stack.Screen name='login' component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name='Dashboard' component={Dashboard}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name='Section' component={Section}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name='Test' component={Test}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name='Video' component={VideoScreen}
        options={{
          headerShown:false
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation