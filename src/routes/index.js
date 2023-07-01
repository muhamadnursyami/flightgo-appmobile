import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


// Screen
import Splash from '../pages/splashscreen/splashPage';
import Register from '../pages/register/registerPage';
import Login from '../pages/login/loginPage';
import ListOrder from '../pages/listorder/listorderPage';
import RouterTab from "../routes/main";
import FindTiket from '../pages/findTiket/findTiketPage';
import Payment from '../pages/payment/paymentPage';
import Checkin from '../pages/checkin/checkingPage';
import EditProfile from '../pages/profile/editProfilePage';

const Stack = createNativeStackNavigator();


function routeStack() {


return(

    <Stack.Navigator screenOptions={{}}>
        <Stack.Screen name="Splash" component={Splash}
          options={{
            headerShown:false
          }}
        />
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
         <Stack.Screen name="Register" component={Register}
        options={{headerShown:false}}
        />
        <Stack.Screen name="ListOrder" component={ListOrder}
        options={{headerShown:false}}
        />

        <Stack.Screen name="Home" component={RouterTab} options={{headerShown:false}}/>
        <Stack.Screen name="FindTiket" component={FindTiket} options={{headerShown:false}}/>
        <Stack.Screen name="Payment" component={Payment} options={{headerShown:false}}/>
        <Stack.Screen name="Checkin" component={Checkin} options={{headerShown:false}}/>
        <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown:false}}/>
      </Stack.Navigator>
  
) 


}

export default routeStack;
