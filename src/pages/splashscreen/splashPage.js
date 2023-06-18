import React from 'react';
import { useEffect } from 'react';
import {Text, View, Image, StatusBar} from 'react-native';
import Logo from "../../assets/icon/Icon.png"
const Splash = ({navigation}) => {
  const switchToRegister = () =>{
    navigation.navigate("Register");
  }

  const timeMove = async () =>{
    try {
      setTimeout(switchToRegister, 2000);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    timeMove();
  }, [])
  
  return (
    <View style={{ flex: 1, justifyContent:'center', alignItems:'center' }}>
      <Image source={Logo} style={{width: 150 , height: 150 , resizeMode:"contain"}}/>

    </View>
  );
};

export default Splash;
