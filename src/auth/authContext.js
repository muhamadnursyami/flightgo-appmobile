import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useState} from 'react';
import { API_URL } from '../configs';
import { Alert } from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  // const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [pesanError, setPesanError] = useState("");
  const register = ( email, password,navigation) => {
    // console.log(` aut : ${email}`);
    // console.log(` aut : ${password}`);

    setIsLoading(true);
   axios.post(`${API_URL}/register-member`,{
    email, password
   }).then((res) =>{
      console.log(res.data);
      Alert.alert(
        "Registeration Successfull",
        "Please login your account",
        [
          {
            text:"Ok",
            onPress: () => navigation.navigate("Login")
          }
        ]
      )
      setIsLoading(false);
   }).catch((err) =>{
    console.log(err)
    setIsLoading(false);
   })
  }



  const login  = (email, password, navigation) => {

    // console.log(`login page ${email}`);
    // console.log(`login page ${password}`); 
    setIsLoading(true);
    axios.post(`${API_URL}/login`,{
      email,password
    }).then((res)=>{
      AsyncStorage.setItem('token', JSON.stringify(res.data.data.accessToken));
      AsyncStorage.setItem('role', JSON.stringify(res.data.data.role));
      // console.log(`token ${res.data.data.accessToken}`);
      // console.log(`role ${res.data.data.role}`);
      // console.log(AsyncStorage.getItem("token"));
      // console.log(AsyncStorage.getItem("role"));
      const user = res.data.data.role;
      if(user === "member"){
        navigation.navigate("Home");
      }
      else{
        navigation.navigate("ListOrder")
      }

      setIsLoading(false);
        // let dataUser = res.data.data;
        // setUserInfo(dataUser);
        // console.log(res.data.data);
    }).catch((err)=>{
      setPesanError("Email atau password anda salah");
      setIsLoading(false);
    })

  }

 
  return (
    <AuthContext.Provider
      value={{
        register,isLoading,login,pesanError     
      }}>
      {children}
    </AuthContext.Provider>
  );
};