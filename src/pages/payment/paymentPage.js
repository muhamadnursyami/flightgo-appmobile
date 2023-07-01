import React, { Alert, Dimensions, Image } from "react-native"
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import { Button,Card } from "galio-framework";
import Ioicons from "react-native-vector-icons/Ionicons"
import axios from 'axios';
import { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../../configs";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';



const Payment = ({route,navigation}) =>{
    const [ticket, setTicket] = useState({});
    const [showImage, setshowImages] = useState(null);
    const [tokenUsers, setTokenUsers] = useState({})
    // console.log(`tokenUsers: ${tokenUsers}`)
    // console.log(`Show image : ${showImage}`);
    const{id} = route.params;
    // console.log(`id Payment ${id}`);

    const logout = () =>{
        AsyncStorage.removeItem("token");
        AsyncStorage.removeItem("role");
        navigation.navigate("Login");
    }

    const options = {
        title : "Select Image",
        type : "library",
        options :{
            selectionLimit: 1,
            mediaType: 'photo',
            includeBase64: false
        }
    }

    const openGallery = async() =>{
        
        const result = await launchImageLibrary(options);
        setshowImages(result.assets[0].uri);
        const formData =  new FormData();
            formData.append("bukti_Pembayaran", {
                uri: result.assets[0].uri,
                type: result.assets[0].type,
                name: result.assets[0].fileName,

            });
        console.log(`hasil image :${result.assets[0].uri}`);
         let res = await fetch(`${API_URL}/ticket/transaction/${ticket.id}`,{
            method:"post",
            body: formData,
            headers:{
                "Content-Type" : "multipart/form-data",
                Authorization : `Bearer ${JSON.parse(tokenUsers)}`,
            }
        })
        let response = await res.json();
        Alert.alert(response.message)
        console.log(response.message);
        navigation.navigate("Home");
            
       
        
        
    
    }
    const orderProduct = async () => {
        const token =  await AsyncStorage.getItem("token");
        console.log(`TOKEN Payment ${token}`);
        setTokenUsers(token);
        const response = await axios.get(`${API_URL}/ticket/${id}`,{
            headers:{
                Authorization: `Bearer ${JSON.parse(token)}`
            }
          })
          setTicket(response.data)
      };
    
    useEffect(() => {
    orderProduct();
    
      }, [])
    return (
        <ScrollView style={style.container}>
            <View style={{margin:20}}>
                <View style={style.layoutButtonPutih}>
                <Text style={style.titleFindTiket}>Payment</Text>
                    <Button style={style.buttonPutih} onPress={()=> logout()}>
                        <Text style={style.buttonText}>Sign Out</Text>
                    </Button>
                    
                </View>   
                <View style={style.cardFindTiket}>
                    <View style={style.containerCardFindTiket}>
                        <View style={style.detailFindTiket}>
                            <Text style={{color:"black",fontSize: 14}}>Type : {ticket.bentuk_penerbangan} {ticket.jenis_penerbangan}</Text>
                        </View>
                        <View style={style.detailFindTiket}>
                            <Text style={style.fontDetailFindTiket}>{ticket.bandara_asal}</Text>
                            <Ioicons name="arrow-forward-outline" style={style.fontDetailFindTiket}/>
                            <Text style={style.fontDetailFindTiket}>{ticket.bandara_tujuan}</Text>
                        </View>
                        <View style={style.detailFindTiket}>
                            <Text style={style.fontDetailSecondFindTiket}>{ticket.kode_negara_asal}</Text>
                            <Text style={style.fontDetailSecondFindTiket}>{ticket.kode_negara_tujuan}</Text>
                        </View>
                        <View style={style.detailFindTiket}>
                            <Text style={style.fontDetailFindTiket}>{ticket.depature_time}</Text>
                            <Text style={style.fontDetailFindTiket}> Rp. 
                                <Text style={{color:"red"}}>

                                {ticket.total_price}
                                </Text> /pax</Text>
                        </View>
                        <View style={style.detailFindTiket}>
                            <Text style={style.fontDetailSecondFindTiket}>{ticket.depature_time}</Text>
                        </View>
                    </View>
                </View>
                <View style={style.cardDetailFindTiket}>
                    <View style={style.containerCardFindTiket}>
                        <Text style={{color:"black",fontSize: 14}}>Depature Time</Text>
                            <View style={style.detailFindTiket}>
                                <Text style={style.fontPropertyBlack}>{ticket.depature_time}</Text>
                                <Text style={style.fontDetailSecondFindTiket}>{ticket.kota_asal} ({ticket.kode_negara_asal})</Text>
                            </View>
                            <View style={style.detailFindTiket}>
                                <Text style={style.fontDetailSecondFindTiket}>{ticket.depature_date}</Text>   
                                <Text style={style.fontDetailSecondFindTiket}>{ticket.bandara_asal}</Text>
                            </View>
                            <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:10}}>
                                <Text style={style.fontDetailSecondFindTiket}>1h 50m</Text>
                                <Text style={style.fontDetailSecondFindTiket}>{ticket.kota_tujuan} ({ticket.kode_negara_tujuan})</Text>
                            </View>
                                <Text style={{alignSelf:"flex-end",marginTop:5,color:"#A9A9A9",fontSize: 10,}}>{ticket.bandara_tujuan}</Text>
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
                    </View>
                </View>
                <View style={style.cardtotalPembayaran}>
                    <View style={{margin:10, flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={{color:"black",fontSize: 14}}>Total Price </Text>
                        <Text style={{color:"black",fontSize: 14, fontWeight:"bold"}}>Rp.{ticket.total_price}</Text>
                    </View>
                    <Text style={{color:"black",fontSize: 14,marginTop:20, alignSelf:"center"}}>Bukti Resi Transfer</Text>
                    {
                        showImage &&
                        <Image style={{width:300, height:200, alignSelf:"center", marginBottom:20, marginTop:20}} source={{uri :showImage}}/>
                    }
                    <View style={{flexDirection:"row", justifyContent:"center"}}>
                        <Button style={style.buttonUpload} onPress={() => openGallery()} >Upload</Button>
                       
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
    buttonOrange :{
        marginTop:30,
        backgroundColor: "#F97316",
        width: 100,
        height: 40,
        borderRadius:20,
    },
    buttonUpload :{
        marginTop:10,
        marginBottom:10,
        backgroundColor: "#F97316",
        width: 100,
        height: 40,
        borderRadius:10,
        alignSelf: "center"
    },
    cardtotalPembayaran :{
        backgroundColor:"white",
        display: 'flex',
        flexDirection: 'column',
        
        borderRadius: 5,
        borderColor: '#000000',
        borderWidth: 1,
        borderStyle: 'solid',
        marginTop:20,
        marginRight:10,
    },
    buttonText:{
        fontSize:12,
        color: "black",
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
    layoutButtonPutih :{
        flexDirection:"row",
        justifyContent: "space-between"
    },
    titleFindTiket :{
        color:"white",
        fontSize: 25,
        fontWeight: "bold",
    },
    fontPropertyBlack:{
        color:"black",
        fontSize: 12,
    },
    fontDetailFindTiket:{
        alignSelf : "center",
        marginTop:10,
        color:"black",
        fontSize: 12,
    },
    fontDetailSecondFindTiket:{
        
        marginTop:5,
        color:"#A9A9A9",
        fontSize: 10,
    },
    cardFindTiket: {
        backgroundColor:"white",
        display: 'flex',
        flexDirection: 'column',
        height: 170,
        borderRadius: 5,
        borderColor: '#000000',
        borderWidth: 1,
        borderStyle: 'solid',
        marginTop:70,
        marginRight:10,
    },
    cardDetailFindTiket: {
        backgroundColor:"white",
        display: 'flex',
        flexDirection: 'column',
        height: 260,
        borderRadius: 5,
        borderColor: '#000000',
        borderWidth: 1,
        borderStyle: 'solid',
        marginRight:10,
    },
    containerCardFindTiket:{
        margin :30,
       
    },
    icon: {
        fontSize:25, 
        color:"#F97316"
    },
    detailFindTiket :{
        flexDirection:"row",
        justifyContent:"space-between"
    }

    
})
export default Payment;