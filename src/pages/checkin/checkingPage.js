import React, { Alert, Dimensions, Image } from "react-native"
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import { Button,Card } from "galio-framework";
import axios from 'axios';
import { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../../configs";


const Checkin = ({route,navigation}) =>{

    const [orders, setOrders] = useState({})
    const [tokenUsers, setTokenUsers] = useState({});
    console.log(`Token user ${tokenUsers}`);
    const {id} = route.params;
    console.log(`id ${id}`);
    const orderProduct = async () =>{
        const token = await AsyncStorage.getItem("token");
        // console.log(`Token ${token}`)
        setTokenUsers(token);
        const response = await axios.get(`${API_URL}/ticket/transaction/data/${id}`,{
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        })
        setOrders(response.data.data.product);
        console.log(response.data.data.product);
    }
            
    const checkin = async() =>{
        console.log(`token checkin ${tokenUsers}`)
        const data = {
            checkIn : new Date()
        }
        const response = await axios.put(`${API_URL}/ticket/transaction/check-in/${id}`, data,{
            headers:{
                Authorization: `Bearer ${JSON.parse(tokenUsers)}`
            }
        })
        console.log(response.data.message);
        Alert.alert(response.data.message);
        navigation.navigate("Home");
    }


    const logout = () =>{
       AsyncStorage.removeItem("token");
        AsyncStorage.removeItem("role");
        navigation.navigate("Login");
    }

    useEffect(() => {
        orderProduct();
    }, [])
    

    return (
        <ScrollView style={style.container}>
            <View style={{margin:20}}>
                <View style={style.layoutButtonPutih}>
                <Text style={style.titleFindTiket}>Check-in</Text>
                    <Button style={style.buttonPutih} onPress={()=> logout}>
                        <Text style={style.buttonText}>Sign Out</Text>
                    </Button>
                </View>  
                <View style={style.cardChekinTiket}> 
                    <View style={style.containerCardChekinTiket}>
                    <Text style={{color:"black",fontSize: 14}}>Depature Time</Text>
                            <View style={style.detailFindTiket}>
                                <Text style={style.fontPropertyBlack}>{orders.depature_time}</Text>
                                <Text style={style.fontDetailSecondFindTiket}>{orders.kota_asal} ({orders.kode_negara_asal})</Text>
                            </View>
                            <View style={style.detailFindTiket}>
                                <Text style={style.fontDetailSecondFindTiket}>{orders.depature_date}</Text>   
                                <Text style={style.fontDetailSecondFindTiket}>{orders.bandara_asal}</Text>
                            </View>
                            <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:10}}>
                                <Text style={style.fontDetailSecondFindTiket}>1h 50m</Text>
                                <Text style={style.fontDetailSecondFindTiket}>{orders.kota_tujuan} ({orders.kode_negara_tujuan})</Text>
                            </View>
                                <Text style={{alignSelf:"flex-end",marginTop:5,color:"#A9A9A9",fontSize: 10,}}>{orders.bandara_tujuan}</Text>
                                <Text style={{marginTop:5,color:"black",fontSize: 14}}>Round Trip Depature Time</Text>
                            <View style={style.detailFindTiket}>
                                <Icon name="hand-holding" size={14} color="black" style={{marginLeft : 10}}/>
                                <Icon name="receipt" size={14} color="green" style={{marginRight : 20}} />
                            </View>
                            <View style={style.detailFindTiket}>
                                <Text style={{ marginTop:10,color:"#A9A9A9",fontSize: 10, }}>Non Refundable</Text>
                                <Text style={{ marginTop:10,color:"#A9A9A9",fontSize: 10, }}>Reschedule</Text>
                            </View>
                            <View style={style.detailFindTiket}>
                                <Icon name="cube" size={14} color="black" style={{marginLeft : 10, marginTop: 10}}/>
                                <Icon name="external-link-alt" size={14} color="black" style={{marginRight : 20, marginTop: 10}} />
                            </View>
                            <View style={style.detailFindTiket}>
                                <Text style={{ marginTop:10,color:"#A9A9A9",fontSize: 10, }}>20kg</Text>
                                <Text style={{ marginTop:10,color:"#A9A9A9",fontSize: 10, }}>Entertainment</Text>
                            </View>
                            <View style={{flexDirection:"row",justifyContent:"space-between", marginTop:20 }}>
                                <Text style={{color:"black"}}>Total price</Text>
                                <Text style={{color:"black", fontSize:14}}> Rp. 
                                    {orders.total_price}
                                </Text>
                            </View>
                            <View style={{alignSelf:"center", marginTop:10}}>
                                {orders.checkIn !== null ?  
                                (
                                    <Button style={style.buttonOrange} onPress={() => checkin()}>Checkin</Button>
                                )   :
                                (<Text style={{color:"black"}}> Kamu sudah Check-in</Text>)
                            }
                            </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
const style = StyleSheet.create({
    container : {
        backgroundColor:"#F97316"
    },
    layoutButtonPutih :{
        flexDirection:"row",
        justifyContent: "space-between"
    },
    titleFindTiket :{
        color:"white",
        fontSize: 25,
        fontWeight: "bold",
    },
    buttonPutih :{
        backgroundColor: "white",
        width: 80,
        height: 30,
        borderRadius:20,
    },
    buttonText:{
        fontSize:13,
        color: "#F97316",
    },
    cardChekinTiket: {
        backgroundColor:"white",
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 5,
        borderColor: '#000000',
        borderWidth: 1,
        borderStyle: 'solid',
        marginTop:70,
        marginRight:10,
    },
    containerCardChekinTiket:{
        margin :30,
       
    },
    detailFindTiket :{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    fontPropertyBlack:{
        color:"black",
        fontSize: 12,
    },
    fontDetailSecondFindTiket:{
        marginTop:5,
        color:"#A9A9A9",
        fontSize: 10,
    },
    fontDetailFindTiket:{
        alignSelf : "center",
        marginTop:10,
        color:"black",
        fontSize: 12,
    },
    buttonOrange :{
        backgroundColor: "#F97316",
        width: 80,
        height: 40,
        borderRadius:5,
    },
})
export default Checkin;
