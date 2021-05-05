import React from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView, Image } from 'react-native';
import { Foundation, Ionicons } from '@expo/vector-icons'; 


const Discover = ({photo, title,  name, time}) => {
    return (
        <ScrollView style={styles.container}>
            {/* <View style={styles.icons}>
            <Foundation name="thumbnails" size={40} color="black"  style={styles.thumbnail}/>
            <Text style={styles.discover}>Discover</Text>
            <Ionicons name="search" size={40} color="grey" style={styles.search}/>
            </View> */}

            
            <View style={styles.imageCont}>
                <Image source={photo} style={styles.image}/>
                <View  style={styles.tcont}>
                <Text style={styles.title} numberOfLines={3}>
                    {title}
                     </Text>
                </View>
                
            </View>
            <View style={styles.simageCont}>
                <Image source={photo}style={styles.simage} />
                  <Text style={styles.shakana}>{name}...</Text>
                  <View style={styles.dot}></View>
                  <Text style={styles.min}>{time} min read</Text>
                </View>
        </ScrollView>
    );
}
const styles =StyleSheet.create({
    container:{
          marginHorizontal:20,
          marginTop:50,
          backgroundColor:'white'
          

    },
    icons:{
        flexDirection:'row',
        marginBottom:20
        
    },
    search:{
        left:100
    },
    discover:{
        fontSize:35,
        fontWeight:'bold',
        left:50
    },
    imageCont:{
        flexDirection:'row'
    },
    image:{
        height:150,
        width:100,
        display:'flex'
    },
    simage:{
        height:30,
        width:30,
        borderRadius:15
    },
    title:{
        fontWeight:'bold',
        fontSize:20
    },
    tcont:{
        flex:6,
        left:13
    },
    simageCont:{
        flexDirection:'row',
        left:120,
        marginTop:-60
    },
    shakana:{
     color:"grey",
     left:4,
     fontWeight:'bold'
    },
    dot:{
        height:6,
        width:6,
        backgroundColor:'grey',
        borderRadius:3,
        marginTop:8,
        left:10
    },
    min:{
        left:15,
        color:'grey'
    }
})

export default Discover;
