import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { storeData, getStoreData } from './src/components/storage/projectAsyncStorage';
import HomeScreen from './src/components/screens/HomeScreen';
import Login from './src/components/screens/Login'
import Registration from './src/components/screens/Registration';
import SplashScreen from './src/components/screens/SplashScreen';
export default function App() {
  const Stack = createNativeStackNavigator()

  
  /* const [initialRouteName, setInitialRouteName] = useState('');

  useEffect(function () {
    authUser()
  }, [])
  const authUser = async () => {
    let userData = await getStoreData('userData')

    if (userData) {
      if (userData.loggedIn) {
        // alert('hi')
        setInitialRouteName('HomeScreen')
      }
      else {
        setInitialRouteName('Login')
      }
    }
    else {
      setInitialRouteName('Registration')
    }


  }  */
    // console.log('initialRouteNameeeeeee',typeof initialRouteName)
     //alert(initialRouteName)
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'SplashScreen'}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
