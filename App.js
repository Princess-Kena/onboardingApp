import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddToCartScreen from './Components/AddToCartScreen';
import OnlineShoppingScreen from './Components/OnlineShoppingScreen';
import PaymentSuccessfulScreen from './Components/PaymentsSuccessfulScreen';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       <PaymentSuccessfulScreen/>
      </View>
    );
  }
};
const styles = StyleSheet.create({

})





export default App
