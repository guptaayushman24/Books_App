import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Button, Modal, Pressable, Platform, TextInput, Image, ScrollView } from 'react-native';
import { WebView } from 'react-native'


const BookView = ({ imageSource, basePrice, title, authorname }) => {
  const [number, Setnumber] = useState(1);
  const [show, Setshow] = useState(false);
  const handleCallback = (childData) => {
    Setnumber(childData);
  }
  const handleAddToCart = () => {
    Setshow(true);
  }
  // Function for adding the items into the cart

  const addToCart = async () => {

    try {
      const response = await fetch('http://10.0.2.2:3000/api/add-to-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          authorname,
          quantity: number,
          basePrice       // Add basePricr:basePrice
        }),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (


    <View style={style.main}>
      <View style={style.main1}>
        <View style={style.newView}>
          <View>
            <Image style={style.img} source={imageSource} />
            <Text style={style.priceStyle}>Rs: {basePrice * number}</Text>
            <View style={style.btn1}>
              {show ? (
                <Addtocartdesign handleCallback={handleCallback} />
              ) : (
                <TouchableOpacity style={style.btn} onPress={handleAddToCart}>
                  <Text style={style.txt}>Order Now</Text>
                </TouchableOpacity>
              )}
            </View>
            <TouchableOpacity style={style.addtocart} onPress={addToCart}>
              <Text>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.title}>
          <Text style={{ fontSize: 20, color: 'red' }}>
            Title:- {title}
          </Text>
          <Text style={{ fontSize: 15, color: 'green', marginTop: 20 }}>
            Author Name:- {authorname}
          </Text>
        </View>
      </View>
    </View>
  );
};
const Auto = () => {
  return (
    <ScrollView>
      <View>
        {/* 1st Book View  */}
        <BookView imageSource={require('../assets/Action_and_adventure.png')} basePrice={169} title={'Treasure Island'} authorname={'Robert Louis Stevenson'} />
        {/* 2nd Book View */}
        <BookView imageSource={require('../assets/Sherlockhomes.png')} basePrice={412} title={'The Return Of Sherlock Homes'} authorname={'Arthur Conan Doyle'} />
        {/* 3rd Book View*/}
        <BookView imageSource={require('../assets/HarryPoter.png')} basePrice={1799} title={"Harry Poter and the Philosopher's Stone"} authorname={'J.K. Rowling and Mary GrandPre'} />
        {/* 4th Book View*/}
        <BookView imageSource={require('../assets/Wrath_of_poseidon.png')} basePrice={1792} title={'Wrath Of Poseidon'} authorname={'Clive Cussler and Robin Burcell'} />
        {/* 5th Book View*/}
        <BookView imageSource={require('../assets/North_of_Laramie.png')} basePrice={736} title={'North Of Laramie'} authorname={'William W.'} />
        {/* 6th Book View*/}
        <BookView imageSource={require('../assets/TheSecret.png')} basePrice={584} title={'The Secret: A Jack Reacher Novel: 28 '} authorname={'Lee Child'} />
        {/* 7th Book View*/}
        <BookView imageSource={require('../assets/GaleForce.png')} basePrice={3207} title={'Gale Force'} authorname={'Owen Laukkanen'} />
        {/* 8th Book View*/}
        <BookView imageSource={require('../assets/Swissfamily.png')} basePrice={136} title={'The Swiss Family Robinson (Single Classics)'} authorname={'Johann David and John D. Seelye'} />
        {/* 9th Book View*/}
        <BookView imageSource={require('../assets/War_of_lanka.png')} basePrice={330} title={'War Of Lanka'} authorname={'Amish Tripathi'} />
        {/* 10th Book View*/}
        <BookView imageSource={require('../assets/Hour_of_the_assassin.png')} basePrice={822} title={'Hour Of The Assassin:A Novel'} authorname={'Matthew Quirk'} />

      </View>
    </ScrollView>
  )
}
export default Auto;
const style = StyleSheet.create({
  main: {

    flex: 1,
  },
  main1: {
    flex: 1,
    flexDirection: "row"
  },
  btn: {
    margin: 20,
    padding: 10,
    backgroundColor: "black",
    width: 120,
    height: 40,
    borderRadius: 20,
    justifyContent: "space-evenly",
    alignItems: "center"

  },
  txt: {
    textAlign: "center",
    fontSize: 15,
    color: '#b17fd5',
  },
  title: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    width: 20,
    borderColor: "black"
  },
  img: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  priceStyle: {
    marginLeft: 60,
    marginTop: 10,
    fontSize: 20,
    width: 100,
    height: 35,
    borderRadius: 10,
    marginRight: 50
  },
  newView: {
    flex: 1,
    flexDirection: "column"
  },
  btn1: {
    flex: 1,
    justifyContent: "space-between",
    marginLeft: 20,
    marginStart: 20,
    alignItems: "flex-start",
    marginHorizontal: 10,
  },
  addtocart: {
    flex: 1,
    marginLeft: 40,
    marginBottom: 10,
    backgroundColor: "#fa8900",
    width: 120,
    height: 40,
    borderRadius: 20,
    justifyContent: "space-evenly",
    alignItems: "center",

  },
  btndesign: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  plustext: {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    width: 50,
    height: 26,
  },
  minustext: {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    width: 50,
    height: 26,
  },
  number: {
    backgroundColor: 'black',
    color: 'blue',
    textAlign: 'center',
    fontSize: 20,
    width: 50,
    height: 26,
  },
  mainbtn: {
    marginBottom: 10,
  }



})

const Addtocartdesign = ({ handleCallback }) => {
  const [number, setNumber] = useState(1);

  const increment = () => {
    setNumber(number + 1);
    handleCallback(number + 1);
  };

  const decrement = () => {
    if (number > 1) {
      setNumber(number - 1);
      handleCallback(number - 1);
    }
  };
  return (
    <View style={style.mainbtn}>
      <View style={style.btndesign}>
        <View style={style.plus}>
          <TouchableOpacity onPress={increment}>
            <Text style={style.plustext}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={style.number}>{number}</Text>
        <View style={style.minus}>

          <TouchableOpacity onPress={decrement}>
            <Text style={style.minustext}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

