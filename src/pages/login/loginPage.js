import React, {useState, useContext, useEffect} from 'react';
import {Text, View, TouchableOpacity,Image, StatusBar} from 'react-native';
import Logo from "../../assets/icon/Icon.png"
import {Button, Input} from "galio-framework"
import { AuthContext } from '../../auth/authContext';

import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const {login, setIsLoading, pesanError} = useContext(AuthContext);
  console.log(email);
  console.log(password);

  // const handleToken = async() =>{
  //   const token = await AsyncStorage.getItem("token");
  //   if(!token) {
  //     navigation.navigate("Login");
  //   }
  //   else{
  //     navigation.navigate("Home");
  //   }
  // }


  // useEffect(() => {
  //   handleToken();
  // })
  
  return (
    <View style={{ flex: 1, justifyContent:'center', alignItems:'center', margin: 20}}>
      <Spinner visible={setIsLoading}/>
      <StatusBar hidden={true}/>
      <Image source={Logo} style={{width: 150 , height: 150 , resizeMode:"contain"}}/>
      <View style={{marginVertical:20}}/>
      <Text style={{alignSelf:'flex-start', color:"black"}}>Email</Text>
      <Input onChangeText={(text )=>setEmail(text) }  placeholder="Email" right icon="mail" family="antdesign" iconColor="gray" returnKeyType='next'/>
      <Text style={{alignSelf:'flex-start', marginTop:10, color:"black"}}>Password</Text>
      <Input onChangeText={(text) => setPassword(text)}  placeholder="password" viewPass right family="antdesign" iconColor="gray" password/>
      <Button size={'large'} color='black' round style={{width:"100%"}}  onPress={() => login(email,password,navigation)} >Login</Button>
      <View style={{flexDirection:"row", alignItems:"center"}}>
        <Text style={{ color:"gray"}}>Don't Have an Account?</Text>
          <TouchableOpacity>
            <Text style={{fontWeight:"bold", color:"gray"}} onPress={() => navigation.navigate("Register")}> Register</Text>
          </TouchableOpacity>
      </View>
      <Text style={{color: "red", marginTop:20}}>{pesanError}</Text>
      
    </View>
  );
};

export default Login;