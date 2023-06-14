import React from 'react';
import {Text, View, TouchableOpacity, StatusBar, Image} from 'react-native';
import Logo from "../../assets/icon/Icon.png"
import {Button, Input} from "galio-framework"
const Register = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent:'center', alignItems:'center', margin: 20}}>
      <StatusBar hidden={true}/>
      <Image source={Logo} style={{width: 150 , height: 150 , resizeMode:"contain"}}/>
      <View style={{marginVertical:20}}/>
      <Text style={{alignSelf:'flex-start'}}>Email</Text>
      <Input placeholder="Email" right icon="mail" family="antdesign" iconColor="gray" returnKeyType='next'/>
      <Text style={{alignSelf:'flex-start', marginTop:10}}>Password</Text>
      <Input placeholder="password" viewPass right family="antdesign" iconColor="gray" password/>
        <Button size={'large'} color='black' round style={{width:"100%"}}>Create</Button>
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