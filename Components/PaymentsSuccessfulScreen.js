import React from 'react';
import { StatusBar} from 'expo-status-bar';
import {Text, Image, View, StyleSheet, TouchableOpacity, } from 'react-native';


const PaymentSuccessfulScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.heading}>PAYMENT SUCCESSFUL</Text>
            
                <Text style={styles.detailedText}>
                Online shopping is a form of electronic commerce which allows
                 consumers to directly buy goods or services from a seller 
                 over the Internet using a web browser or a mobile app.
                 Peopls shop online because they can review and compare dozens of 
                  stores and products at once. 

                </Text>
            </View>
            <Image source={require('../assets/success.png')} style={styles.image} />
            
                <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Get Started</Text></TouchableOpacity>
                <View style={styles.options}>
                   <View style={styles.status}></View>
                   <View style={styles.status}></View>
                   <View style={styles.statusOn}></View>
               
                </View>
            <Text style={styles.previous}>Previous</Text>
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        
        marginTop:50,
        marginHorizontal:50,
        
         },
         textContainer:{
            marginVertical:15,
            
            
            
         },
         heading:{
             fontSize:22,
             fontWeight:'bold',
             marginBottom:15
         },
         detailedText:{
       marginBottom:15,
       fontSize:15,
       color:'#100d14'
         },
         image:{
             height:280,
             width:300
         },
         button:{
             height:50,
             width:130,
             backgroundColor:'#896be3',
             borderRadius:50,
             justifyContent:'center',
             alignItems:"center",
             marginHorizontal:70,
             marginTop:25,
             marginBottom:50,
         },
         buttonText:{
             color:'white',
             fontWeight:'bold',
             fontSize:20
             
         },
         options:{
             flexDirection:'row',
             
         },
         statusOn:{
             height:8,
             width:16,
             borderRadius:20,
             backgroundColor:'#896be3',
            left:100,
             marginHorizontal:3
         },
         status:{
             height:8,
             width:8,
             borderRadius:8,
             backgroundColor:'grey',
             left:100,
             marginHorizontal:2

         },
         previous:{
             color:'#141414',
             alignItems:'flex-start'
 
        }
})

export default PaymentSuccessfulScreen;
