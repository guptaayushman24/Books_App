import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Button, Modal, Pressable, Platform, TextInput ,Image, ScrollView} from 'react-native';
import {WebView} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import  {createBottomTabNavigator}  from '@react-navigation/bottom-tabs';
import Auto from '../components/autobiography'
import Fiction from '../components/fiction'
import AA from '../components/Action_Adventure';
import Romance from '../components/romance';
import Cart from '../components/Cart';
import { Book_Detail } from '../components/autobiography';
const Tab=createBottomTabNavigator();



const AutoIcon=()=>{

    return(

     <View>
        <Image style={style.img1}


        source={require('../assets/Autobiography.png')}>
        </Image>
        </View>
    )
}
const FictionIcon=()=>{
    return(
        <View>
            <Image style={style.img1}
            source={require('../assets/Fiction.png')}>
            </Image>
        </View>

    )
}
const Action_Adventure_Icon=()=>{
    return(
        <View>
            <Image style={style.img1}
            source={require('../assets/Action_Adventure.png')}>
            </Image>
        </View>
    )
}
const RomanceIcon=()=>{
    return(
        <View>
            <Image style={style.img1}
            source={require('../assets/Romance.png')}>

            </Image>
        </View>
    )
}
const AddtoCarticon=()=>{
    return(
        <View>
            <Image style={style.img1}
            source={require('../assets/add_to_cart.png')}>

            </Image>
        </View>
    )
}

export const Tabs=()=>{
    return(

       <Tab.Navigator>
            <Tab.Screen name='Autobiography' component={Auto}
            options={{
                tabBarIcon:AutoIcon,
            }
        }
            />



            <Tab.Screen name='Fiction' component={Fiction}
            options={{
                tabBarIcon:FictionIcon
            }}/>
              <Tab.Screen name='Romance' component={Romance}
            options={{
                tabBarIcon:RomanceIcon
            }}/>

            <Tab.Screen name='Action and Adventure' component={AA}
            options={{
                tabBarIcon:Action_Adventure_Icon
            }}/>

        <Tab.Screen name='Cart' component={Cart}
            options={{
                tabBarIcon:AddtoCarticon
            }}/>

        {/* <Tab.Screen name='Test' component={Test}
            /> */}
        </Tab.Navigator>
    )
}
export default Tab;

const style=StyleSheet.create({
    img1:{
        width:40,
        height:40
    }
})