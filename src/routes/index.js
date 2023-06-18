import React, { useContext } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from '../pages/splashscreen/splashPage';
import Register from '../pages/register/registerPage';
import Login from '../pages/login/loginPage';
import Home from '../pages/home/homePages';
// import ListOrder from '../pages/listorder';
// import { AuthContext } from '../auth/AuthContext';

const Stack = createNativeStackNavigator();

function routeStack() {

  // const {userInfo} = useContext(AuthContext);
  // console.log(`userInfo di routes ${userInfo.accessToken}`);

return(

    <Stack.Navigator >
        <Stack.Screen name="Splash" component={Splash}
          options={{
            headerShown:false
          }}
        />
         <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
         <Stack.Screen name="Register" component={Register}
        options={{headerShown:false}}
        /> 
         <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/> 
        {/* <Stack.Screen name="ListOrder" component={ListOrder}
        options={{headerShown:false}}
        /> */}
      </Stack.Navigator>
  
) 


}

export default routeStack;
