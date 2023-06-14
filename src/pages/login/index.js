import React, {useEffect,useState} from 'react';
import {Text, View, TouchableOpacity,Image, StatusBar} from 'react-native';
import Logo from "../../assets/icon/Icon.png"
import {Button, Input} from "galio-framework"
const Login = () => {
  const [isLoading, setIsloading] = (false);
   const [form , setForm] = ({
    email : "",
    password: "",
   });


  return (
    <View style={{ flex: 1, justifyContent:'center', alignItems:'center', margin: 20}}>
      <StatusBar hidden={true}/>
      <Image source={Logo} style={{width: 150 , height: 150 , resizeMode:"contain"}}/>
      <View style={{marginVertical:20}}/>
      <Text style={{alignSelf:'flex-start'}}>Email</Text>
      <Input placeholder="Email" right icon="mail" family="antdesign" iconColor="gray" returnKeyType='next'/>
      <Text style={{alignSelf:'flex-start', marginTop:10}}>Password</Text>
      <Input placeholder="password" viewPass right family="antdesign" iconColor="gray" password/>
        <Button size={'large'} color='black' round style={{width:"100%"}}>Login</Button>
      
    </View>
  );
};

export default Login;