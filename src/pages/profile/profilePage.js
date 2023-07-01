import React, { Alert, Image, TouchableOpacity,RefreshControl } from "react-native"
import {Text, View, StyleSheet,ScrollView} from 'react-native';
import noProfile from "../../assets/image/no-profile.png"
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../../configs";
import axios from 'axios';
import { Button} from "galio-framework";
const Profile = ({navigation}) =>{
    const [isLoading, setIsLoading] = useState(false);
    const  refresh = () =>{
        setIsLoading(false);
    }
    const [users, setUsers] = useState("");
    console.log(users.image_user);
    const profile = async()=>{
        const token = await AsyncStorage.getItem("token");
        console.log(`Token Profile ${token}`);

        const response = await axios.get(`${API_URL}/current-user`,{
           headers:{
            Authorization: `Bearer ${JSON.parse(token)}`
           }
        })
        console.log(response.data)
        setUsers(response.data);
        if (users.izin === null ||
        users.address === null ||
        users.passport === null ||
        users.visa === null
      ) {
        Alert.alert("Anda belum melengkapi Info Akun, mohon lengkapi terlebih dahulu!");
      }
      else{
        console.log("data lengkap !");
      }

    }

    useEffect(() => {
        refresh();
     profile();
    }, [])
    
   
    return (
        <ScrollView refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refresh}/>}>
            <View style={style.headProfile}>
            </View>
            <View style={{alignItems:"center", }}>
                {users.image_user &&
                <Image source={{uri:users.image_user}} style={{width:120, height:120,borderRadius:100,marginTop:-70}}/>
                }
               
               
                <Text style={{color:"black", fontSize:22, fontWeight:"bold", marginTop:20}}>{users.name}</Text>
            </View>
            <View>
            </View>
                <View style={style.cardProfile}>
                    <View style={{margin:20, flexDirection:"row"}}>
                        <Text style={{color: "black", fontSize:15, fontWeight:"bold" }}>Full Name : </Text>
                        <Text style={{color: "black", fontSize:15}}>{users.name} </Text>
                    </View>
                    <View style={{marginLeft:20,marginRight:20,marginBottom:20, flexDirection:"row"}}>
                        <Text style={{color: "black", fontSize:15, fontWeight:"bold" }}>Phone        : </Text>
                        <Text style={{color: "black", fontSize:15}}>{users.phone} </Text>
                    </View>
                    <View style={{marginLeft:20,marginRight:20,marginBottom:20, flexDirection:"row"}}>
                        <Text style={{color: "black", fontSize:15, fontWeight:"bold" }}>Address     : </Text>
                        <Text style={{color: "black", fontSize:15}}>{users.address} </Text>
                    </View>
               
                       
                </View>
                <View style={style.cardProfile}>
                <View style={{margin:20, flexDirection:"row"}}>
                <Icon name="envelope" size={20} color="#F97316" style={{marginRight : 10}}/>
                <Text style={{color: "black", fontSize:15}}> {users.email} </Text>
                    </View>
                </View>
                    
                <View style={style.layoutButtonOrange}>
                <Button style={style.buttonOrange} onPress={()=> navigation.navigate("EditProfile")}>
                    <Text>Edit</Text>
                </Button>
            </View>
                    
            
            
                
           
                
          
        </ScrollView>
       
      
    )
}
const style = StyleSheet.create({
    headProfile: {
        height:150,
        backgroundColor: "#F97316",    
    },
    cardProfile :{
        backgroundColor:"white",
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 5,
        marginTop:20,   
        width:300,
        alignSelf:"center",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
    layoutButtonOrange :{
        marginTop:10,
        marginRight:40,
        flexDirection:"row",
        justifyContent: "flex-end"
    },
    buttonOrange :{
        backgroundColor: "#F97316",
        width: 90,
        height: 40,
        borderRadius:5,
    },
})
export default Profile;