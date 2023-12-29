import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Button, Modal, Pressable, Platform, TextInput, Image, ScrollView } from 'react-native';
import { WebView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabActions } from '@react-navigation/native';
import { Tabs } from './components/tab';

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>


)
};

export default App;


const style = StyleSheet.create({
  main: {
    flex: 1
  },

})
