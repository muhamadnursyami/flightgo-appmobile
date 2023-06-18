import React from "react-native"
import {Text, View} from 'react-native';
import { Button } from "galio-framework";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ListOrder = ({navigation}) =>{
    const logout = () =>{
       AsyncStorage.removeItem("token");
        AsyncStorage.removeItem("role");
        navigation.navigate("Login");
    }
    return (
        <View>
            <Text style={{color: "black"}}>LIST ORDER</Text>
            <Button onPress={()=>{logout()}}>logout</Button>
        </View>
    )
}

export default ListOrder;