import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "galio-framework";
import React from "react-native"
import {Text, View} from 'react-native';


const Home = ({navigation}) =>{

    const logout = () =>{
        AsyncStorage.removeItem("token");
        AsyncStorage.removeItem("role");
        navigation.navigate("Login");
    }
    return (
       <View>
            <Text style={{color: "black"}}>Hello world Home Landing page</Text>
            <Button onPress={()=>{logout()}}>logout</Button>
        </View>
      
    )
}

export default Home;