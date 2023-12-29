import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Button, Modal, Pressable, Platform, TextInput, Image, ScrollView } from 'react-native';
import { WebView } from 'react-native'
const BookViewfiction = ({ imageSource, basePrice, title, authorname }) => {
  const [number, Setnumber] = useState(1);
  const [show, Setshow] = useState(false);
  const handleCallback = (childData) => {
    Setnumber(childData);
  }
  const handleAddToCart = () => {
    Setshow(true);
  }
  // Function for adding the items into the cart
  const addtocart = async () => {
    try {

      const response = await fetch('http://10.0.2.2:3000/api/add-to-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          authorname,
          quantity: number,
          basePrice
        })
      })
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
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
                <Addtocartdesignfinction handleCallback={handleCallback} />
              ) : (
                <TouchableOpacity style={style.btn} onPress={handleAddToCart}>
                  <Text style={style.txt}>Order Now</Text>
                </TouchableOpacity>
              )}
            </View>
            <TouchableOpacity style={style.addtocart} onPress={addtocart}>
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
  )
};

const Fiction = () => {
  return (
    <View>
      <ScrollView>
        {/* 1st Book View*/}
        <BookViewfiction imageSource={require('../assets/the_monk_who_sold_his_ferrari.png')} basePrice={199} title={'The Monk Who Sold His Ferrari'} authorname={'Robin Sharma'} />
        {/* 2nd Book View*/}
        <BookViewfiction imageSource={require('../assets/Atomic_Habit.png')} basePrice={544} title={'Atomic Habits'} authorname={'James Clear'} />
        {/* 3rd Book View*/}
        <BookViewfiction imageSource={require('../assets/seven_good_habits.png')} basePrice={383} title={'The 7 Habits Of Highly Effective People'} authorname={'Stephen R. Covey'} />
        {/* 4th Book View*/}
        <BookViewfiction imageSource={require('../assets/ataleoftwocities.png')} basePrice={192} title={'A Tale Of Two Cities'} authorname={'Charles Dickens'} />
        {/* 5th Book View*/}
        <BookViewfiction imageSource={require('../assets/The_Psychology_Of_Money.png')} basePrice={280} title={'The Psychology Of Money'} authorname={'Morgan Housel'} />
        {/* 6th Book View*/}
        <BookViewfiction imageSource={require('../assets/Think_and_grow_Rich.png')} basePrice={99} title={'Think And Grow Rich'} authorname={'Napoleon Hill and Andrew Carnegie'} />
        {/* 7th Book View*/}
        <BookViewfiction imageSource={require('../assets/Subconscious_Mind.png')} basePrice={115} title={'The Power Of Your Subconscious Mind'} authorname={'Joseph Murphy'} />
        {/* 8th Book View*/}
        <BookViewfiction imageSource={require('../assets/The_Alchemist.png')} basePrice={289} title={'The Alchemist'} authorname={'Paulo Coelho'} />
        {/* 9th Book View*/}
        <BookViewfiction imageSource={require('../assets/Memory.png')} basePrice={1724} title={'You Can Have An Amazing Memory'} authorname={"Dominic O' Brien"} />
        {/* 10th Book View*/}
        <BookViewfiction imageSource={require('../assets/Rich_Dad_Poor_Dad.png')} basePrice={436} title={'Rich Dad Poor Dad'} authorname={"Robert T. Kiyosaki"} />
      </ScrollView>
    </View>
  )
}
export default Fiction


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

const Addtocartdesignfinction = ({ handleCallback }) => {
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