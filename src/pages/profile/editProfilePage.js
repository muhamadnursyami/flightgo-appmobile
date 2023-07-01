import React, { Alert, Image, TouchableOpacity } from "react-native"
import {Text, View, StyleSheet,ScrollView} from 'react-native';
import noProfile from "../../assets/image/no-profile.png"
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../../configs";
import axios from 'axios';
import {Button, Input,theme} from "galio-framework"
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const EditProfile = ({navigation}) =>{
    const [name, setName] = useState("");
    const [address,setAddress] = useState("");
    const [phone,setPhone] = useState("");
    const [images,setImages] = useState(null);
    const [visa,setVisa] = useState(null);
    const [passport,setPassport] = useState(null);
    const [izin,setIzin] = useState(null);
    const [token, setToken] = useState("");
    console.log(`token edit profile: ${token}`);
    const profile = async()=>{
        const token = await AsyncStorage.getItem("token");
        // console.log(`Token Profile ${token}`);

        const response = await axios.get(`${API_URL}/current-user`,{
           headers:{
            Authorization: `Bearer ${JSON.parse(token)}`
           }
        })
        // console.log(response.data)
        // setName(response.data.name);
        // setAddress(response.data.address);
        // setPhone(response.data.phone);
        setToken(token);
    }
    

    console.log(`name :${name}`);
    console.log(`address :${address}`);
    console.log(`Phone :${phone}`);
    console.log(`images :${images}`);
    console.log(`visa :${visa}`);
    console.log(`passport :${passport}`);
    console.log(`izin :${izin}`);

    const options = {
        title : "Select Image",
        type : "library",
        options :{
            selectionLimit: 1,
            mediaType: 'photo',
            includeBase64: false
        }
    }
    const takePhoto = async(res) =>{
        const result = await launchImageLibrary(options);
        // console.log(result);
        setImages(result);
        Alert.alert(res);
    }
    const takeVisa = async(res) =>{
        const result = await launchImageLibrary(options);
        // console.log(result);
        setVisa(result);
        Alert.alert(res);
    }
    const takePassport = async(res) =>{
        const result = await launchImageLibrary(options);
        // console.log(result);
        setPassport(result);
        Alert.alert(res);
    }
    const takePermit = async(res) =>{
        const result = await launchImageLibrary(options);
        // console.log(result.assets[0].uri);
        setIzin(result)
        Alert.alert(res);
    }

    const handleSubmit = async()=>{
        console.log(`submit`);
        const form = new FormData();
        form.append("name",name);
        form.append("phone", phone);
        form.append("address",address);
        form.append("image_user", {
            uri: images.assets[0].uri,
            type: images.assets[0].type,
            name: images.assets[0].fileName,
        });
        form.append("visa",  {
            uri: visa.assets[0].uri,
            type: visa.assets[0].type,
            name: visa.assets[0].fileName,
        });
        form.append("passport",  {
            uri: passport.assets[0].uri,
            type: passport.assets[0].type,
            name: passport.assets[0].fileName,
        });
        form.append("izin",  {
            uri: izin.assets[0].uri,
            type: izin.assets[0].type,
            name: izin.assets[0].fileName,
        });

        // try {
        //     const response = await axios.put(`${API_URL}/users`, form, {
        //         headers:{
        //             "Content-Type" : "multipart/form-data",
        //              Authorization : `Bearer ${JSON.parse(token)}`
        //         }
        //     })
        //     console.log(response.message)
        // } catch (error) {
        //     console.log(error);
        // }

        try {
    
                const response = await fetch (`${API_URL}/users`,{
                    method: "put",
                    body: form,
                    headers:{
                        "Content-Type" : "multipart/form-data",
                        Authorization : `Bearer ${JSON.parse(token)}`
                    }
                })
                let res = await response.json();
                console.log(res.message);
                // Alert.alert(response.message);
                navigation.navigate("Profile");
                
            
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
      profile();
    }, [])
    
    return (
        <ScrollView style={{margin:20 }}>
            <View>
                <Text style={{color:"#F97316", fontSize:20, fontWeight:"bold"}}>Edit Profile</Text>
            </View>
            <View style={style.cardProfile}>
                <View style={{margin:20}}>
                    <Text style={{color:"red", fontStyle:"italic", textAlign:"center"}}>Wajib disi !!!</Text>    
                    <Text style={{color:"black"}}>Nama: </Text>
                    <Input onChangeText={(text)=> setName(text)} placeholder="Enter name"  returnKeyType='next'/>
                    <Text style={{color:"black"}}>Alamat: </Text>
                    <Input onChangeText={(text)=> setAddress(text)} placeholder="Enter name"  returnKeyType='next'/>
                    <Text style={{color:"black"}}>No Handphone: </Text>
                    <Input onChangeText={(text)=> setPhone(text)} placeholder="Enter name"  returnKeyType='next'/>
                    
                    <Text style={{color:"black"}}>Picture </Text>
                        <Button onPress={() => takePhoto("berhasil menambahkan Photo")} style={{ backgroundColor: "#F97316",
                        width: 100,height: 40,borderRadius:5,marginLeft:-1}}>
                            <Text style={{fontSize:12}}>Upload Picture</Text>
                        </Button>
                    <Text style={{color:"black"}}>Visa </Text>
                        <Button onPress={() => takeVisa("berhasil menambahkan Visa")} style={{ backgroundColor: "#F97316",
                        width: 100,height: 40,borderRadius:5,marginLeft:-1}}>
                            <Text style={{fontSize:12}}>Upload Visa</Text>
                        </Button>
                    <Text style={{color:"black"}}>Passport </Text>
                    <Button onPress={() => takePassport("berhasil menambahkan Passport")} style={{ backgroundColor: "#F97316",
                        width: 100,height: 40,borderRadius:5,marginLeft:-1}}>
                            <Text style={{fontSize:12}}>Upload Passport</Text>
                        </Button>
                        <Text style={{color:"black"}}>Permit/izin tinggal </Text>
                    <Button onPress={() => takePermit("berhasil menambahkan Permit")} style={{ backgroundColor: "#F97316",
                        width: 100,height: 40,borderRadius:5,marginLeft:-1}}>
                            <Text style={{fontSize:12}}>Upload permit</Text>
                        </Button>

                </View>               
            </View>
                    
               
                       
               

                <View style={style.layoutButtonOrange}>
                <Button style={style.buttonOrange} onPress={() => handleSubmit()}>
                    <Text>Simpan</Text>
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
        marginTop:50,   
        width:330,
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
export default EditProfile;