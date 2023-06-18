import React, { useContext, useState } from 'react';
import {Text, View, TouchableOpacity, StatusBar, Image} from 'react-native';
import Logo from "../../assets/icon/Icon.png"
import {Button, Input} from "galio-framework"
import { AuthContext } from '../../auth/authContext';
import Spinner from 'react-native-loading-spinner-overlay';
const Register = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const {register, isLoading} = useContext(AuthContext);
 
  
  console.log(email);
  console.log(password);
  // console.log(register);
  return (
    <View style={{ flex: 1, justifyContent:'center', alignItems:'center', margin: 20}}>
      <Spinner visible={isLoading}/>
      <StatusBar hidden={true}/>
      <Image source={Logo} style={{width: 150 , height: 150 , resizeMode:"contain"}}/>
      <View style={{marginVertical:20}}/>
      <Text style={{alignSelf:'flex-start', color:"black" }} >Email</Text>
      <Input onChangeText={(text )=>setEmail(text) } placeholder="Email" right icon="mail" family="antdesign" iconColor="gray" returnKeyType='next'/>
      <Text style={{alignSelf:'flex-start', marginTop:10, color:"black"}}>Password</Text>
      <Input onChangeText={(text )=>setPassword(text) } placeholder="password" viewPass right family="antdesign" iconColor="gray" password/>
        <Button  onPress={() => register(email,password,navigation)}  size={'large'} color='black' round style={{width:"100%"}} >Create</Button>
      <View style={{flexDirection:"row", alignItems:"center"}}>
        <Text style={{ color:"gray"}}>Already Have A Account?</Text>
          <TouchableOpacity>
            <Text style={{fontWeight:"bold", color:"gray"}} onPress={() => navigation.navigate("Login")}> Login</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;