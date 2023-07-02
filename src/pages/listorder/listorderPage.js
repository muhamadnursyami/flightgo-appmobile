import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button,Card } from "galio-framework";
import React, { Alert, Image } from "react-native"
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import { useState ,useEffect} from "react";
import { API_URL } from "../../configs";
import axios from "axios"

const ListOrder = ({navigation}) =>{
    const [transaction, setTransaction] =useState([]);
    const [usersToken, setUsersToken] = useState("");
    // console.log(`isiTransaction ${transaction}`)
    const getTransaction = async () =>{
        const token = await AsyncStorage.getItem("token");
        // console.log(`Token listorder ${token}`)
        const response = await axios.get(`${API_URL}/ticket/transaction/data`,{
            headers :{
                Authorization :`Bearer ${JSON.parse(token)}`
            }
        })
        // console.log(response.data.data)
        setTransaction(response.data.data);
        setUsersToken(token);
    }
    const logout = () =>{
        AsyncStorage.removeItem("token");
        AsyncStorage.removeItem("role");
        navigation.navigate("Login");
    }
    
    const diterima = async(id) =>{
        console.log(`Token Diterima  ${usersToken}`)
        console.log(`Id diterima ${id}`);
        const data ={
            status :"Pesanan Diterima"
        }
        const response = await axios.put(`${API_URL}/ticket/transaction/accept/${id}`,data,{
            headers:{
                Authorization :`Bearer ${JSON.parse(usersToken)}`
            }
        })
        console.log(`Pesanan Diterima ${response}`);
        Alert.alert("Pesanan diterima");
    }
    const ditolak = async(id) =>{
        console.log(`Token Ditolak  ${usersToken}`)
        console.log(`Id ditolak ${id}`);
        const data ={
            status :"Pesanan Ditolak"
        }
        const response = await axios.put(`${API_URL}/ticket/transaction/reject/${id}`,data,{
            headers:{
                Authorization :`Bearer ${JSON.parse(usersToken)}`
            }
        })
        console.log(`Pesanan Ditolak ${response}`);
        Alert.alert("Pesanan ditolak");
    }

    useEffect(() => {
    getTransaction();
    }, [])
    
    return (
       <ScrollView style={style.container} >
        <View style={{flexDirection:"row" , justifyContent:"space-between"}}>
                <Text style={style.titleDashboard}>List Booking order</Text>
                <Button  style={style.buttonOrange}onPress={()=>{logout()}}>logout</Button>
        </View>
        <View style={{backgroundColor:"#D9D9D9", marginTop:20}}>
            <Text style={{color:"black", padding:10, fontWeight:"bold"}}>Table list Booking order</Text>
        </View>
            
             <View style={style.cardListOrder}>
                <View style={{margin:20}}>
                    <Text style={{color:"black", fontSize:12, fontWeight:"bold"}}>Latest Orders</Text>
                   
                    
                        <View style={{flexDirection:"column", marginTop:20}}>
                            <ScrollView style={{flexDirection:"row"}} horizontal showsHorizontalScrollIndicator={false}>
                                    <Text style={{color:"black", fontSize:12, marginRight:20}}>No </Text>
                                    <Text style={{color:"black", fontSize:12, marginRight:20}}>Product Id </Text>
                                    <Text style={{color:"black", fontSize:12, marginRight:60}}>Payment </Text>
                                    <Text style={{color:"black", fontSize:12, marginRight:20}}>Status </Text>
                                    <Text style={{color:"black", fontSize:12, marginRight:20}}>Depature Date </Text>
                                    <Text style={{color:"black", fontSize:12, marginRight:20}}>CheckIn </Text>
                                    <Text style={{color:"black", fontSize:12, marginRight:20}}>Terima </Text>         
                                    <Text style={{color:"black", fontSize:12, marginRight:20}}>Tolak </Text>         
                            </ScrollView>
                        </View>
                        {
                        Object.values(transaction).map((transaction,i) =>{
                            return (
                                <View key={i} style={{flexDirection:"column", marginTop:10, justifyContent:"space-between"}}>
                                    <ScrollView style={{flexDirection:"row"}} horizontal showsHorizontalScrollIndicator={false}>
                                        <Text style={{color:"black", fontSize:12, marginRight:50}}>{i+1} </Text>
                                        <Text style={{color:"black", fontSize:12, marginRight:50}}>{transaction.productId} </Text>
                                        <Image source={{uri:transaction.bukti_Pembayaran}} style={{width:50,height:50,marginRight:50}}/>
                                        <Text style={{color:"black", fontSize:12, marginRight:50}}>{transaction.status} </Text>
                                        <Text style={{color:"black", fontSize:12, marginRight:50}}>{transaction.product.depature_date} </Text>
                                        <Text style={{color:"black", fontSize:12, marginRight:50}}>{transaction.checkIn}</Text>
                                        <Button  onPress={() => diterima(transaction.id)} style={style.buttonOrange}><Text style={{fontSize:10}}>Terima</Text></Button>    
                                        <Button  onPress={() => ditolak(transaction.id)} style={style.buttonOrange}><Text style={{fontSize:10}}>Tolak</Text></Button>    
                                    </ScrollView>
                                </View> 
                            )
                         })
                        }
                        
                    
                </View>
            </View>
            
        </ScrollView>
      
    )
}
    const style = StyleSheet.create({
        container : {
            margin:20,
        },
        scrollRigtToLeft:{
            flexDirection:"row", 
            marginTop:20,
        },
        titleDashboard :{
            marginTop:10,
            color:"#F97316",
            fontSize: 25,
            fontWeight: "bold",
        },
        buttonOrange :{
            backgroundColor: "#F97316",
            width: 70,
            height: 30,
            borderRadius:20,
            marginRight:20
        },
        cardListOrder :{
            backgroundColor:"white",
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 5,
            marginTop:30,
            alignSelf:"center",
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 2,  
            elevation: 5,
        },


        
    })
export default ListOrder;