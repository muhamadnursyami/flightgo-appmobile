import React, { RefreshControl } from "react-native"
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import { Button,Card } from "galio-framework";
import axios from 'axios';
import { useEffect, useState } from "react";
import Ioicons from "react-native-vector-icons/Ionicons"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../../configs";


const History = ({navigation}) =>{
    const [history, setHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const  refresh = () =>{
        setIsLoading(false);
    }
    // console.log(`MemberHistory ${history}`)
    const historyUser = async() =>{
        const token = await AsyncStorage.getItem("token");
        // console.log(`token HistoryUser ${token}`);
        const response = await axios.get(`${API_URL}/ticket/transaction/data/history/member`,{
            headers: {
                Authorization :`Bearer ${JSON.parse(token)}`
            } 
        })
        // console.log(response.data);
        setHistory(response.data.memberHistory)
    }
    const logout = () =>{
        AsyncStorage.removeItem("token");
        AsyncStorage.removeItem("role");
        navigation.navigate("Login");
    }
   
    useEffect(() => {
        refresh();
        historyUser();
    }, [])
    
    return (
       
        <ScrollView style={style.container} refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refresh}/>}>
        <View style={style.layoutButtonOrange}>
            <Text style={style.titleDashboard}>History</Text>
            <Button style={style.buttonOrange} onPress={()=> logout()}>
                <Text >Sign Out</Text>
            </Button>
        </View>
        
                
               
                    {
                        Object.values(history).map((history, i)=>{
                            return (
                                <View key={i} style={style.cardHistoryTiket}> 
                                    <View style={{margin: 10}}>
                                        <Text style={{color: "black"}}>Penerbangan {history.product.jenis_penerbangan} {history.product.depature_date}</Text>
                                            <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:20}}>
                                                <Text  style={{color: "black"}}>{history.product.kota_asal}</Text>
                                                <Ioicons name="arrow-forward-outline" style={{color:"black", fontSize: 12}}/>
                                                <Text  style={{color: "black"}}>{history.product.kota_tujuan}</Text>
                                            </View>
                                            <View style={{flexDirection:"column", alignItems:"center", marginTop:20}}>
                                                <Text  style={{color: "black"}}> Status Pembayaran </Text>
                                                <Text  style={{color: "black", marginTop:10}}> {history.status} </Text>
                                                
                                                {history.checkIn !== null ?(<Text style={{color: "black", margin:10, fontWeight:"bold"}}>Kamu sudah Checkin</Text>) 
                                                 :(<Button style={style.buttonOrange} onPress={() => navigation.navigate("Checkin", {id: history.id})}>Checkin</Button>)
                                            }
                                               
                                            </View>
                                    </View>
                                </View>
                            )
                        })

                    }
               
        
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
    cardHistoryTiket: {
        backgroundColor:"white",
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 5,
        // borderColor: '#000000',
        // borderWidth: 1,
        // borderStyle: 'solid',
        marginTop:20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
        
        
    },
})
export default History;