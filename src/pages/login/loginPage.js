import React, {useState, useContext} from 'react';
import {Text, View, TouchableOpacity,Image, StatusBar} from 'react-native';
import Logo from "../../assets/icon/Icon.png"
import {Button, Input} from "galio-framework"

// import Spinner from 'react-native-loading-spinner-overlay';
const Login = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  console.log(email);
  console.log(password);

  return (
    <View style={{ flex: 1, justifyContent:'center', alignItems:'center', margin: 20}}>
      {/* <Spinner visible={setIsLoading}/> */}
      <StatusBar hidden={true}/>
      <Image source={Logo} style={{width: 150 , height: 150 , resizeMode:"contain"}}/>
      <View style={{marginVertical:20}}/>
      <Text style={{alignSelf:'flex-start'}}>Email</Text>
      <Input onChangeText={(text )=>setEmail(text) }  placeholder="Email" right icon="mail" family="antdesign" iconColor="gray" returnKeyType='next'/>
      <Text style={{alignSelf:'flex-start', marginTop:10}}>Password</Text>
      <Input onChangeText={(text) => setPassword(text)}  placeholder="password" viewPass right family="antdesign" iconColor="gray" password/>
      <Button size={'large'} color='black' round style={{width:"100%"}}  onPress={() => login(email,password)} >Login</Button>
      <View style={{flexDirection:"row", alignItems:"center"}}>
        <Text style={{ color:"gray"}}>Don't Have an Account?</Text>
          <TouchableOpacity>
            <Text style={{fontWeight:"bold", color:"gray"}} onPress={() => navigation.navigate("Register")}> Register</Text>
          </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default Login;