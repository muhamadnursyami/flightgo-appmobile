import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import { API_URL } from '../configs';
import { Alert } from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
//   const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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
  return (
    <AuthContext.Provider
      value={{
        register,isLoading     
      }}>
      {children}
    </AuthContext.Provider>
  );
};