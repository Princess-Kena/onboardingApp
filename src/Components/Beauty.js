import React from 'react';
import {View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import { Ionicons, SimpleLineIcons, MaterialIcons  } from '@expo/vector-icons'; 


const Beauty = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.icons}>
            <Ionicons name="chevron-back" size={40} color="black" />
            <Text style={styles.beauty}>Beauty</Text>
            <View  style={styles.ficons}>
            <SimpleLineIcons name="earphones" size={24} color="black" />
            <MaterialIcons name="favorite-outline" size={24} color="black" />
            <Ionicons name="share-social-outline" size={24} color="black" />
            </View>
            </View>
            <Image source={require('../../assets/f1.jpg')} style={styles.image} />
            <View>
                <Text style={styles.title}>
                    Focus on Learning and Creating
                     Rather Than Entertainment and 
                     Distraction
                </Text>
            </View>
            <View style={styles.scontainer}>
                <Image source ={require('../../assets/ch.jpg')} style={styles.simage}/>
                <Text style={styles.dennis}>Dennis Madu</Text>
                <View style={styles.dot}></View>
                <Text style={styles.min}>8 mins read</Text>
            </View>
            <View>
                <Text style={styles.dtext}>
                You know that phone calls are distracting. 
                But did you know that texts—or even just the 
                knowledge that you’ve received one—can disrupt
                 your attention and affect your performance?

                       In a recent study, participants who received 
                text notifications made three times as many 
                errors on a task as those who received none,
                 according to research from Florida State 
                 University.

                “At the outset, we were not sure that we would 
                even get a measurable effect, because most of
                 the research looks at people picking the phone
                  up and looking at it,” says Ainsley Mitchum, 
                  one of the study’s authors who now works on
                   traffic safety research for the state of 
                   California. 
                </Text>
            </View>
        </ScrollView>
    );
}
const styles =StyleSheet.create({
    container:{
        marginVertical:30,
        marginHorizontal:30
    },
    icons:{
        flexDirection:'row',
        marginTop:40
    
    },
    ficons:{
        left:80,
        flexDirection:'row',
    
    },
    beauty:{
        fontSize:25,
        fontWeight:'bold',
        marginBottom:25
        
    },
    image:{
        height:230,
        width:280,
        marginBottom:25
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
    },
    scontainer:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:25,
        marginTop:20
        
    },
    simage:{
        height:40,
        width:40,
        borderRadius:20
    },
    dennis:{
        left:10,
        fontWeight:'bold'
    },
    dot:{
        height:8,
        width:8,
        borderRadius:4,
        backgroundColor:'grey',
        left:30
    },
    min:{
        left:40,
        color:'#626e82'
    },
    dtext:{
        fontSize:18,
        color:'#626e82'
    }



})

export default Beauty;
