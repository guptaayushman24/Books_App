import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Button, Modal, Pressable, Platform, TextInput, Image, ScrollView, FlatList, Alert } from 'react-native';
import { WebView } from 'react-native'
import axios from "axios"
import { useNavigation } from '@react-navigation/native';
const Cart = () => {
  const [items, setItems] = useState([]);
  const showpayment = () => {
    Alert.alert(`Your total payment is Rs.${total}`);
  }
  useEffect(() => {
    getApiData();
  }, []);



  const getApiData = async () => {
    try {

      const response = await axios.get('http://10.0.2.2:3000/api/add-to-cart');


      console.log(response.data); // Log the entire response
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  // const calculateTotal=()=>{
  let total = 0;
  items.forEach((item) => {
    total += item.totalprice;
  });
  console.log(total);
  // }
  // const navigation=useNavigation();
  const deletePost = async (id) => {
    try {
      console.log("Deleting post with ID:", id);
      await axios.delete(`http://10.0.2.2:3000/api/add-to-cart/${id}`);
      console.log("Post deleted:", id);
      // Update your state or perform any other necessary actions
      setItems(items.filter((post) => post._id !== id));
    } catch (error) {
      console.log("Error deleting post:", error);
    }
  };

  return (
    <ScrollView>
      <View style={style.main}>
        {items.map((item, index) => (
          <View key={index} style={style.card}>
            <Text style={style.title}>Title: {item.title}</Text>
            <Text style={style.authorname}>Author Name: {item.authorname}</Text>
            <Text style={style.quantity}>Quantity: {item.quantity}</Text>
            <Text style={style.totalprice}>Total Price: {item.totalprice}</Text>
            <TouchableOpacity style={style.dltbtn} onPress={() => deletePost(item._id)}>
              <Text style={style.txt}>Delete Order</Text>
            </TouchableOpacity>
          </View>
        ))}

        <View style={style.box2}>

          <TouchableOpacity style={style.totalbtn} onPress={showpayment}>
            <Text style={style.totaltxt}>Total Price</Text>
          </TouchableOpacity>
        </View>
      </View>


    </ScrollView>
  );
}


export default Cart;
const style = StyleSheet.create({
  main: {
    flex: 1,
  },
  card: {
    flex: 1,
    // backgroundColor:"red",
    borderRadius: 35,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black'
  },
  box2: {
    flex: 0.5,
    // backgroundColor:"green",
  },
  title: {
    margin: 15,
    fontSize: 20,
    color: "red"
  },
  authorname: {
    marginBottom: 10,
    marginLeft: 15,
    fontSize: 20,
    color: "green"
  },
  quantity: {
    marginBottom: 10,
    marginLeft: 15,
    fontSize: 20,
    color: "#7a5792"
  },
  totalprice: {
    marginBottom: 10,
    marginLeft: 15,
    marginTop: 5,
    fontSize: 20,
    color: "#fa8900"
  },
  dltbtn: {
    alignItems: "center",
    backgroundColor: "#eb4440",
    width: 80,
    height: 40,
    marginLeft: 140,
    borderRadius: 10,
    marginBottom: 10
  },
  txt: {
    textAlign: "center",
    marginTop: 10,
  },
  totalbtn: {
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 10,
    width: "100%",
    height: 40
  },
  totaltxt: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold"
  }

})