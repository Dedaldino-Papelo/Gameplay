import {Text, View, StatusBar } from 'react-native';
import { useEffect } from 'react';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import {Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Background from './src/components/Background/Index';
import { SignIn } from './src/Screens/signIn';
import Home from './src/Screens/Home';
import Routes from './src/routes';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync()
    }
    prepare()
  }, [])

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync()
  }


  return (
    <>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </>
  );
}
