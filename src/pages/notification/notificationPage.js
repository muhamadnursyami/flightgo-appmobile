import React, { RefreshControl } from "react-native"
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import { Button,Card } from "galio-framework";

import axios from 'axios';
import { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../../configs";

const Notification = ({navigation}) =>{

    const [isLoading, setIsLoading] = useState(false);
    const  refresh = () =>{
        setIsLoading(false);
    }
    const [menunggu, setMenunggu] = useState({})
    const [diterima, setDiterima] = useState({})
    const [ditolak, setDitolak] = useState({})
    // const [tokenUser, setTokenUser] = useState({});
    // const handleToken = async () =>{
    //     const token = await AsyncStorage.getItem("token");
    //     console.log(`token Notification ${token}`);
    //     setTokenUser(token);
    // }
    // console.log(diterima.product.id);
    const notifMenunggu = async() =>{
        const token = await AsyncStorage.getItem("token");
        console.log(token);
        await axios.get(`${API_URL}/ticket/tansactransaction/notif/menunggu`,{
            headers:{
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        })
        .then((res)=>{
            // console.log(`res :${res.data.notifOk}`);
            setMenunggu(res.data.notifOk);
        }).catch((err) =>{
            console.log(err)
        });
        
    }
    const notifDitolak = async() =>{
        const token = await AsyncStorage.getItem("token");
        // console.log(token);
        await axios.get(`${API_URL}/ticket/tansactransaction/notif/ditolak`,{
            headers:{
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        })
        .then((res)=>{
            setDitolak(res.data.notifReject);
        }).catch((err) =>{
            console.log(err)
        });
        
    }
    const notifDiterima = async() =>{
        const token = await AsyncStorage.getItem("token");
        // console.log(token);
        await axios.get(`${API_URL}/ticket/tansactransaction/notif/diterima`,{
            headers:{
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        })
        .then((res)=>{
            setDiterima(res.data.notifAcc);
        }).catch((err) =>{
            console.log(err)
        });
        
    }
    

    
    useEffect(() => {
        refresh();
        notifMenunggu();
        notifDiterima();
        notifDitolak();
    }, [])
    
    const logout = () =>{
        AsyncStorage.removeItem("token");
        AsyncStorage.removeItem("role");
        navigation.navigate("Login");
    }
    return (
        <ScrollView style={style.container} refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refresh}/>}>
            <View style={style.layoutButtonOrange}>
                <Text style={style.titleDashboard}>Notification</Text>
                <Button style={style.buttonOrange} onPress={()=> logout()}>
                    <Text>Sign Out</Text>
                </Button>
            </View>
            <View style={style.cardNotifikasiTiket}>
                <View style={{margin: 10}}>
                    <Text style={{fontSize:14, color:"black"}}> Status Pemesanan</Text>
                    <View style={{flexDirection:"row", marginTop:10, justifyContent:"space-evenly"}}>
                        <Text style={{fontSize:12, color:"black"}}> Status  :</Text>
                        <Text style={{fontSize:12, color:"blue"}}>Menunggu {menunggu.length} </Text>
                        <Text style={{fontSize:12, color:"green"}}>Berhasil {diterima.length}</Text>
                        <Text style={{fontSize:12, color:"red"}}>Ditolak  {ditolak.length} </Text>
                    </View>
                    <View> 
                        <Text style={{fontSize:14, color:"black",marginTop:30}}>Berhasil Memesan Tiket</Text>
                        {
                            // datanya itu object dari state menunggu, kemudian kita map dalam bentuk object,
                            // menggunakan ObjectValues().map().
                        Object.values(menunggu).map((menunggu,i) =>{
                                 return (<View  key={i} style={{backgroundColor:"#E0F2FE", padding:10, marginTop:10}}>
                                <Text style={{fontSize:12, color:"black"}}>Anda berhasil memesan tiket dari {menunggu.product.kota_asal} ke {menunggu.product.kota_tujuan}</Text>
                                </View>)
                           })
                            
                        
                       }
                        <Text style={{fontSize:14, color:"black",marginTop:30}}>Pembayaran berhasil</Text>
                        {
                            // datanya itu object dari state menunggu, kemudian kita map dalam bentuk object,
                            // menggunakan ObjectValues().map().
                        Object.values(diterima).map((diterima,i) =>{
                                 return (<View  key={i} style={{backgroundColor:"#b5fc97", padding:10, marginTop:10}}>
                                <Text style={{fontSize:12, color:"black"}}>Tiket pesanan anda dari {diterima.product.kota_asal} ke {diterima.product.kota_tujuan} telah diterima</Text>
                                {diterima.checkIn === null ?(
                                    <Button onPress={() => navigation.navigate("Checkin", {id:diterima.id}) } style={{backgroundColor: "#8ff265", color:"black", borderRadius:5, shadowColor:"white",width:60,height:30,borderColor: '#000000', borderStyle: "solid",borderWidth: 1, }}>
                                    <Text style={{color:"black", fontSize:12}}>Checkin</Text>
                                    </Button>) : (<></>)}
                                </View>
                                )
                           })
                       }

                    <Text style={{fontSize:14, color:"black",marginTop:30}}>Pembayaran Ditolak</Text>
                        {
                            // datanya itu object dari state menunggu, kemudian kita map dalam bentuk object,
                            // menggunakan ObjectValues().map().
                        Object.values(ditolak).map((ditolak,i) =>{
                                 return (<View  key={i} style={{backgroundColor:"#fd5a4f", padding:10, marginTop:10}}>
                                <Text style={{fontSize:12, color:"black"}}>Tiket pesanan anda dari {ditolak.product.kota_asal} ke {ditolak.product.kota_tujuan} telah ditolak</Text>
                                
                                </View>)
                           })
                       }
                    </View>
                </View>
            </View>
    </ScrollView>
      
    )
}
const style = StyleSheet.create({
    container : {
        margin:20
    },
    buttonOrange :{
        backgroundColor: "#F97316",
        width: 80,
        height: 30,
        borderRadius:20,
    },
    titleDashboard :{
        color:"#F97316",
        fontSize: 25,
        fontWeight: "bold",
    },
    buttonPutih :{
        backgroundColor: "white",
        width: 80,
        height: 30,
        borderRadius:20,
    },
    layoutButtonOrange :{
        flexDirection:"row",
        justifyContent: "space-between"
    },
    cardNotifikasiTiket: {
        backgroundColor:"white",
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 5,
        borderColor: '#000000',
        borderWidth: 1,
        borderStyle: 'solid',
        marginTop:50,
        
    },
    
})
export default Notification;