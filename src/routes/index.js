import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../pages/splashscreen';
import Register from '../pages/register';
import Login from '../pages/login';

const Stack = createNativeStackNavigator();

function routeStack() {
  return <Stack.Navigator >

    <Stack.Screen name="Splash" component={Splash}
      options={{
        headerShown:false
      }}
    />
    <Stack.Screen name="Register" component={Register}
     options={{
      headerShown:false
    }}
    />
    <Stack.Screen name="Login" component={Login}
     options={{headerShown:false}}
    />
  </Stack.Navigator>;
}

export default routeStack;
