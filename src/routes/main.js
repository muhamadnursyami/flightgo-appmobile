import React, { useContext } from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ioicons from "react-native-vector-icons/Ionicons"

// Screen
// import Splash from '../pages/splashscreen/splashPage';
// import Register from '../pages/register/registerPage';
// import Login from '../pages/login/loginPage';
import Home from '../pages/home/homePages';
// import ListOrder from '../pages/listorder/listorderPage';
import Profile from '../pages/profile/profilePage';
import Wishlist from '../pages/wishlist/wishlistPage';
import History from '../pages/history/historyPage';
import Notification from '../pages/notification/notificationPage';

// ScreenNames
const homeName = "Dashboard";
const profileName = "Profile";
const notificationName="Notification";
const historyName="History";
const wishlistName="Wishlist";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function RouteTab() {


return(

    <Tab.Navigator intialRouteName={homeName}  screenOptions={({route}) => ({
      tabBarIcon: ({focused,color,size }) =>{
        let iconName;
        color ="white";
        let rn = route.name;

        if(rn === homeName){
          iconName = focused ? "home" : "home-outline";
        }
        else if(rn === notificationName){
          iconName = focused ? "notifications" : "notifications-outline";
        }
        else if(rn === wishlistName){
          iconName = focused ? "star" : "star-outline";
        }
        else if(rn === historyName){
          iconName = focused ? "time" : "time-outline";
        }
        else if(rn === profileName){
          iconName = focused ? "person-circle" : "person-circle-outline";
        }

        return <Ioicons name={iconName} size={size} color={color}/>
      },
      tabBarStyle:{
        backgroundColor:"#F97316",
        paddingBottom:10,
        height:70,
      },
      tabBarActiveTintColor: "white",
      tabBarInactiveTintColor:"#DCDCDC",
    })
  }
    >
        
          <Tab.Screen name="Dashboard"  component={Home} options={{headerShown:false}}/>
          <Tab.Screen name="Notification" component={Notification} options={{headerShown:false}}
          />
      
      <Tab.Screen name="Wishlist" component={Wishlist} options={{headerShown:false}}
      />
        <Tab.Screen name="History" component={History} options={{headerShown:false}}
        />
        <Tab.Screen name="Profile" component={Profile} options={{headerShown:false}}
        />
      </Tab.Navigator>
  
) 


}

export default RouteTab;
