import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen, green } from './Constants';

const Home = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
      {/* <Text style={{ color: 'white', fontSize: 64 }}>Let's start</Text>
      <Text style={{ color: 'white', fontSize: 64, marginBottom: 40 }}>Coding</Text>
       */}
       <View style ={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        Background:'#000000',
        height:200,
        width: 350,
        marginVertical:25,


       }}>
        <Image 
        source={require('./assets/Abhi.jpg')} 
        style={{
          height:200 ,
          width:200,
          borderRadius: 23,
          
          }}/>
       </View>
      <Btn bgColor={green} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
      <Btn bgColor='white' textColor={darkGreen} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({})

export default Home;
