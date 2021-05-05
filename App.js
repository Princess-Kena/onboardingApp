import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AddToCartScreen from './src/screens/AddToCartScreen';
import Beauty from './src/Components/Beauty';
import Discover from './src/Components/Discover';
import DiscoverScreen from './src/screens/DiscoverScreen';
import OnlineShoppingScreen from './src/screens/OnlineShoppingScreen';
import PaymentsSuccessfulScreen from './src/screens/PaymentsSuccessfulScreen';


const Stack = createStackNavigator()
class App extends Component {
  render() {
    return (
      <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="OnlineShopping" component={OnlineShoppingScreen} />
            <Stack.Screen name="AddToCart" component={AddToCartScreen} />
            <Stack.Screen name="PaymentsSucessful" component={PaymentsSuccessfulScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    );
  }
};
const styles = StyleSheet.create({

})





export default App
