import React, { useContext, useState } from 'react';
import {Text, View, TouchableOpacity, StatusBar, Image} from 'react-native';
import Logo from "../../assets/icon/Icon.png"
import {Button, Input, Block,theme} from "galio-framework"
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
    
      <View style={{ flex: 1, justifyContent:'center', alignItems:'center', margin:30}}>
        <Spinner visible={isLoading}/>
        <StatusBar hidden={true}/>
        <Image source={Logo} style={{width: 150 , height: 150 , resizeMode:"contain"}}/>
        <View style={{marginVertical:20}}/>
        <Text style={{alignSelf:'flex-start', color:"black" , fontWeight:"bold" }} >Email</Text>
        <Input onChangeText={(text )=>setEmail(text) } style={{ borderColor: theme.COLORS.BLACK }} placeholderTextColor={theme.COLORS.PLACEHOLDER} placeholder="Enter Email" right icon="mail" family="antdesign" iconColor="black" returnKeyType='next'/>
        <Text style={{alignSelf:'flex-start', marginTop:10, color:"black", fontWeight:"bold"}}>Password</Text>
        <Input onChangeText={(text )=>setPassword(text) } style={{ borderColor: theme.COLORS.BLACK }} placeholderTextColor={theme.COLORS.PLACEHOLDER} placeholder="Enter Password" viewPass right family="antdesign" iconColor="black" password/>
          <Button  onPress={() => register(email,password,navigation)}  size={'large'} color='#F97316' round style={{width:"100%"}} >Create</Button>
        <View style={{flexDirection:"row", alignItems:"center"}}>
          <Text style={{ color:"gray"}}>Already Have A Account?</Text>
            <TouchableOpacity>
              <Text style={{fontWeight:"bold", color:"#F97316"}} onPress={() => navigation.navigate("Login")}> Login</Text>
            </TouchableOpacity>
        </View>
      </View>
  );
};

export default Register;