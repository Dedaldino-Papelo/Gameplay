import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native'
import React from 'react'
import Home from '../Screens/Home';
import { SignIn } from '../Screens/signIn';
import Background from '../components/Background/Index';

const Stack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <Stack.Navigator 
        screenOptions={{
        headerTransparent: true,
        headerShown: false,
        headerStyle: { backgroundColor: 'transparent' },
    }}>
        <Stack.Screen name="Signin" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>

  )
}