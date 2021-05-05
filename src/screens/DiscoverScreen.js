import React from 'react';
import {View, Text, StyleSheet,   Image, FlatList } from 'react-native';
import Discover from '../Components/Discover';
import f1 from '../../assets/f1.jpg';
import f2 from '../../assets/f2.jpg';
import f3 from '../../assets/f3.jpg';




const DiscoverScreen = () => {
    const Discovery =[
        {
            imgUrl: f1,
            title: 'Does Rain Actually Fall in Rivers As We Think?',
            name : 'Shakana',
            time:'3'
        },
        {
            imgUrl: f2,
            title: 'How Do You Spend Valentines Day Without Flowers',
            name : 'Maxwell',
            time:'5'
        },
        {
            imgUrl: f3,
            title: 'How Did You Celebrate Your Birthday During Quaratine ',
            name : 'Janiece',
            time:'10 '
        },
        {
            imgUrl: f1,
            title: 'Did Corona Affect Ur Bussiness During Lockdown',
            name : 'Jophiel',
            time:'1'
        }
    ]
    return (
          <View>
            <FlatList
            data={Discovery}
            renderItem={({item})=>{
                return <Discover photo={item. imgUrl}
                title={item.title}
                pic={item.imgUrl}
                time={item.time}

                />
            }}
            keyExtractor={(item) => item.time}

            />
          </View>
    );
}

export default DiscoverScreen;
