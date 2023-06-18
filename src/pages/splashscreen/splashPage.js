import React from 'react';
import { useEffect } from 'react';
import {Text, View, Image, StatusBar} from 'react-native';
import Logo from "../../assets/icon/Icon.png"
import AsyncStorage from '@react-native-async-storage/async-storage';
const Splash = ({navigation}) => {
  // const switchToRegister = () =>{
  //   navigation.navigate("Register");
  // }

  // const timeMove =() =>{
  //   try {
  //     setTimeout(switchToRegister, 2000);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  const handleToken = async() =>{
    const token = await AsyncStorage.getItem("token");
    let role = await AsyncStorage.getItem("role");
    // kenapa perlu di parse, karena awalnya data yang disimpan ini belum berbentuk stirng, masing json.
    role = JSON.parse(role);
    console.log(role);
    if(!token) {
      navigation.navigate("Register");
      // navigation.navigate("Login");
    }
    else{
      // navigation.navigate("Home");
      if (role  === "admin"){
        navigation.navigate("ListOrder")
      }
      else {
        navigation.navigate("Home");
      }
    }
  }

  useEffect(() => {
    // timeMove();
    handleToken();
  }, [])
  
  return (
    <View style={{ flex: 1, justifyContent:'center', alignItems:'center' }}>
      <Image source={Logo} style={{width: 150 , height: 150 , resizeMode:"contain"}}/>

    </View>
  );
};

export default Splash;
