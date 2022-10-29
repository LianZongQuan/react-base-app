import React, { Component } from 'react';
import {
   Avatar,HStack,Center,Box,Button,Image
  ,Icon,Flex,Input,View, Container,Select,TextArea, Link 
} from 'native-base';
import { StyleSheet, TextInput, TouchableOpacity,Dimensions, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import WebView from 'react-native-webview';
import * as WeChat from 'react-native-wechat-lib';
import { Text } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
// import * as WeChat from 'react-native-wechat-lib';
import HttpUtil from '../../utils/http'
import { Path } from 'react-native-svg';
import CircleProgressView from '../../utils/CircleProgressView';

const Report = ({navigation}) => {
  React.useEffect(() => {
    WeChat.registerApp('wx99653092cabe7bf8', '').then(res => {
      console.log("是否已经注册微信：" + res)
    })
  },[]);

  function wx(){
    WeChat.openWXApp();
  }
  function download(){
    Linking.openURL('http://192.168.10.186:8080/test.pdf')
  }
  return(
    <View style={{height:screenHeight*1,alignItems:'center'}}>

      <HStack style={{width:screenWidth,height:screenHeight*0.1}}>
        <View style={{width:screenWidth*0.55,height:screenHeight*0.1,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:20}}>东方财富2021年报</Text>
        </View>

        <View style={{width:screenWidth*0.14,height:screenHeight*0.1,justifyContent:'center',alignItems:'center'}}>
          <CircleProgressView raduis={screenHeight*0.035} progressBaseColor={'#BEBEBE'} progressColor = {'#E87777'} baseProgressWidth={4} progressWidth={4} progress={87} >
            <View style={{alignItems:'center',justifyContent:'center'}} >
              <Text style={{fontSize:18}}>
                87
              </Text>
            </View>
            </CircleProgressView>
        </View>
        <TouchableOpacity onPress={wx} style={{width:screenWidth*0.15,height:screenHeight*0.1,justifyContent:'center',alignItems:'center'}}>
          <Icon  as={<AntDesign name="wechat" />} size={screenWidth*0.07} ml="2" color="#81B337" />
        </TouchableOpacity>
        <TouchableOpacity onPress={download} style={{width:screenWidth*0.15,height:screenHeight*0.1,justifyContent:'center',alignItems:'center'}}>
          <Icon  as={<AntDesign name="download" />} size={screenWidth*0.07} ml="2" color="#215476" />
        </TouchableOpacity>
      </HStack>
      <View style={{width:screenWidth,height:screenHeight*0.9}}>
        <WebView style={{}} source={{ uri: 'http://cxlzpblog.cn/' }} />
      </View>
    </View>

  )
  
}
export default Report;
const styles = StyleSheet.create({

  background:{
    width:'100%',
    height:'100%',
    alignItems:'center',
    backgroundColor:"#f5f5f5"

  },

  
})