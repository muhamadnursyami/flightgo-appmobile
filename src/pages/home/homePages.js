import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button,Card } from "galio-framework";
import React, { Image } from "react-native"
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import LionAir from "../../assets/image/lionAir.png"
import AviaStar from "../../assets/image/aviaStar.png"
import BatikAir from "../../assets/image/batikAir.png"
import GarudaIndonesia from "../../assets/image/garudaIndonesia.png"
import Ioicons from "react-native-vector-icons/Ionicons"
import BCA from "../../assets/image/logo01.png"
import OVO from "../../assets/image/logo02.png"
import VISA from "../../assets/image/logo03.png"
import QRIS from "../../assets/image/logo04.png"
import PERMATA from "../../assets/image/logo05.png"
import BNI from "../../assets/image/logo06.png"
const Home = ({navigation}) =>{

    const logout = () =>{
        AsyncStorage.removeItem("token");
        AsyncStorage.removeItem("role");
        navigation.navigate("Login");
    }
    return (
       <ScrollView style={style.container}>
            <View style={style.layoutButtonOrange}>
            <Text style={style.titleDashboard}>Dashboard</Text>
                <Button style={style.buttonOrange} onPress={()=> logout()}>
                    <Text style={style.buttonText}>Sign Out</Text>
                </Button>
                
            </View>
            <View>  
                <View style={style.sectionAboutUs}>
                    <Text style={style.fontAboutUs}>ABOUT US</Text>
                </View>
                <Text style={style.fontPropertyBlack}>Booking flight ticket with Flightgo. We give many offerswith the best prices for passenger and good services.</Text>
                <View style={style.sectionChildAboutUs}>
                    <Text style={style.firstChildAboutUs}>15</Text>
                    <Text style={style.firstChildAboutUs}>1K</Text>
                    <Text style={style.firstChildAboutUs}>100</Text>
                    <Text style={style.firstChildAboutUs}>4.9</Text>
                </View>
                <View style={style.sectionChildAboutUsSecond}>
                    <Text style={style.fontSecondChildAboutUs}>Years Of Experience</Text>
                    <Text style={style.fontSecondChildAboutUs}>Sucessful Trip</Text>
                    <Text style={style.fontSecondChildAboutUs}>Promos and Offers</Text>
                    <Text style={style.fontSecondChildAboutUs}>Overall Rating</Text>
                </View>

                <Button style={style.findFlight} onPress={()=> navigation.navigate("FindTiket")}>Find Flight</Button>
            </View>
            <Text style={style.titlePopular}>Popular Domestic</Text>
            <View style={style.layout}>
                <View style={style.card}>
                    <View style={style.containterCard}>
                        <Ioicons name="heart-outline" style={style.icon}/>                   
                        <Image source={LionAir} style={style.gambarPesawat}/>
                        <Text style={style.cardText}> Jakarta <Ioicons name="arrow-forward-outline"/> Bandung </Text>
                        <Text style={style.cardText}> $99.00/person</Text>
                        <Button style={style.buttonBooking} onPress={()=> navigation.navigate("FindTiket")}>
                            <Text style={style.textBooking}>Booking Now</Text>
                        </Button>
                    </View>
                </View>
                <View style={style.card}>
                    <View style={style.containterCard}>
                        <Ioicons name="heart-outline" style={style.icon}/>                   
                        <Image source={AviaStar} style={style.gambarPesawat}/>
                        <Text style={style.cardText}> Batam <Ioicons name="arrow-forward-outline"/> Bali </Text>
                        <Text style={style.cardText}> $99.00/person</Text>
                        <Button style={style.buttonBooking} onPress={()=> navigation.navigate("FindTiket")}>
                            <Text style={style.textBooking}>Booking Now</Text>
                        </Button>
                    </View>
                </View>
            </View>
            <Text style={style.titlePopular}>Popular Luar Negeri</Text>
            <View style={style.layout}>
                <View style={style.card}>
                    <View style={style.containterCard}>
                        <Ioicons name="heart-outline" style={style.icon}/>                   
                        <Image source={BatikAir} style={style.gambarPesawat}/>
                        <Text style={style.cardText}> Tanjungpinang <Ioicons name="arrow-forward-outline"/> Jepang </Text>
                        <Text style={style.cardText}> $350.00/person</Text>
                        <Button style={style.buttonBooking} onPress={()=> navigation.navigate("FindTiket")}>
                            <Text style={style.textBooking}>Booking Now</Text>
                        </Button>
                    </View>
                </View>
                <View style={style.card}>
                    <View style={style.containterCard}>
                        <Ioicons name="heart-outline" style={style.icon}/>                   
                        <Image source={GarudaIndonesia} style={style.gambarPesawat}/>
                        <Text style={style.cardText}> Jakarta <Ioicons name="arrow-forward-outline"/> Rusia </Text>
                        <Text style={style.cardText}> $139.00/person</Text>
                        <Button style={style.buttonBooking} onPress={()=> navigation.navigate("FindTiket")}>
                            <Text style={style.textBooking}>Booking Now</Text>
                        </Button>
                    </View>
                </View>
            </View>
            <Text style={style.titlePopular}>A Passenger said about us</Text>
            <ScrollView style={style.scrollRigtToLeft} horizontal showsHorizontalScrollIndicator={false} >
                <View style={style.cardUlasanPenumpang}>
                    <Text style={style.textUlasan}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente delectus"</Text>
                    <Text style={style.authorUlasan}>Budi Gunawan</Text>
                </View>
                <View style={style.cardUlasanPenumpang}>
                    <Text style={style.textUlasan}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente delectus"</Text>
                    <Text style={style.authorUlasan}>Joko Santoso</Text>
                </View>
                <View style={style.cardUlasanPenumpang}>
                    <Text style={style.textUlasan}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente delectus"</Text>
                    <Text style={style.authorUlasan}>Rizki Reza</Text>
                </View>
                <View style={style.cardUlasanPenumpang}>
                    <Text style={style.textUlasan}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente delectus"</Text>
                    <Text style={style.authorUlasan}>Jack berd</Text>
                </View>
                <View style={style.cardUlasanPenumpang}>
                    <Text style={style.textUlasan}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente delectus"</Text>
                    <Text style={style.authorUlasan}>Santoso Aji</Text>
                </View>
            </ScrollView>
            <Text style={style.titlePopular}>Accepted Payment Methods : </Text>
            <View>
               <ScrollView style={style.scrollRigtToLeft} horizontal showsHorizontalScrollIndicator={false}>
                    <Image source={BCA} style={{width:200, height:70, marginRight: 10}}/>
                    <Image source={OVO} style={{width:200, height:70, marginRight: 10}}/>
                    <Image source={VISA} style={{width:200, height:70, marginRight: 10}}/>
                    <Image source={QRIS} style={{width:200, height:70}}/>
                </ScrollView>
                <ScrollView style={style.scrollRigtToLeft} horizontal showsHorizontalScrollIndicator={false}>
                    <Image source={PERMATA} style={{width:200, height:90}}/>
                    <Image source={BNI} style={{width:300, height:80}}/>
                </ScrollView>
            </View>
        </ScrollView>
      
    )
}
    const style = StyleSheet.create({
        container : {
            margin:20,
        },
        buttonOrange :{
            backgroundColor: "#F97316",
            width: 80,
            height: 30,
            borderRadius:20,
        },
        buttonText:{
            fontSize:13,
            color: "white",
        },
        layoutButtonOrange :{
            flexDirection:"row",
            justifyContent: "space-between"
        },
        titleDashboard :{
            color:"#F97316",
            fontSize: 25,
            fontWeight: "bold",
        },
        fontPropertyBlack:{
            color:"black",
            fontSize: 12,
        },
        sectionAboutUs :{
            flexDirection:"row",
            justifyContent: "space-between",
            marginTop:10,
        },
        fontAboutUs :{
            fontSize:18,
            color : "#F97316",
            fontWeight:"bold",
            marginBottom: 15,
        },
        firstChildAboutUs :{
            fontSize: 30,
            color: "#F97316",
            fontWeight:"bold",
        },
        sectionChildAboutUs :{
            flexDirection:"row",
            justifyContent: "space-between",
            marginTop: 10,

        },
        sectionChildAboutUsSecond :{
            flexDirection:"row",
            justifyContent: "space-between",
            marginTop: 5,
        },
        fontSecondChildAboutUs:{
            color:"black",
            fontSize: 10,
        },
        findFlight:{
            marginTop:20,
            backgroundColor: "#F97316",
            width: 120,
            height: 40,
            borderRadius:20, 
            justifyContent:"center", 
            alignSelf:"center"
        },
        titlePopular:{
            marginTop:30,
            color:"black",
            fontWeight:"bold",
            fontSize:17
        },
        card: {
            backgroundColor:"#F97316",
            display: 'flex',
            flexDirection: 'column',
            width: 163,
            height: 253,
            borderRadius: 5,
            borderColor: '#000000',
            borderWidth: 1,
            borderStyle: 'solid',
            marginTop:10,
            marginRight:20,
        },
        layout :{
            flexDirection:"row",
        },
        containterCard: {
             margin:10,
        },
        icon: {
            fontSize:30, 
                alignSelf: "flex-end",
        },
        gambarPesawat:{
            marginTop:20,
            width:120 ,
            height:80,
            justifyContent:"center", 
            alignSelf:"center",  
        },
        cardText:{
            justifyContent:"center", 
            alignSelf:"center",
        },
        buttonBooking : {
            backgroundColor: "white",
            width: 90,
            height: 30,
            borderRadius:5, justifyContent:"center", alignSelf:"center"
        },
        textBooking:{
            color:"#F97316",
             fontSize:12,
        },
        scrollRigtToLeft:{
            flexDirection:"row", 
            marginTop:20,
        },
        cardUlasanPenumpang:{
            backgroundColor: "#13005F", 
            height: 200,
            width:250, 
            marginRight:10, 
            alignItems:"center", 
            justifyContent:"center", 
            borderRadius:5
        },
        textUlasan :{
        color: "white", 
        margin:20,
        },
        authorUlasan: {
            color: "#B5891E", 
            alignSelf:"flex-end", 
            marginRight:30, 
        }


        
    })
export default Home;