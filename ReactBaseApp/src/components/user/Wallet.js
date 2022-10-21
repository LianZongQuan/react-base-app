import React, { Component } from 'react';
import {
   Avatar,HStack,Center,Box,Button,Image
  ,Icon,Flex,Input,View, Container,
} from 'native-base';
import { StyleSheet, TouchableOpacity,Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { Text } from 'react-native';
// import HttpUtil from '../../utils/http';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Wallet = ({navigation}) => {


  return(
    <View style = {styles.background}>
       
      <View style = {styles.header}>
        <HStack style={{marginLeft:"3%",height:screenHeight*0.15}}>
          <View style={{height:screenHeight*0.15,justifyContent:'center'}}>
            <Avatar  style={{width:screenWidth*0.2,height:screenWidth*0.2}}  mr="4" >
              <Image alt='TU'style={{borderRadius:50,width:screenWidth*0.2,height:screenWidth*0.2}} source={require('./images/heard.jpg')} ></Image>
            </Avatar>
          </View>
          <View style={{height:'100%',justifyContent:'center'}}>
            <Text style={{fontSize:screenWidth*0.06,color:"#6C6C6C"}}>仟仟陌陌</Text>
          </View>
          <View style={{height:'100%',justifyContent:'center',marginLeft:10}}>
            <Text style={{fontSize:screenWidth*0.12,color:"#E99D42"}}>0</Text>
          </View>
          <View style={{height:'100%',justifyContent:'center',marginLeft:10}}>
            <Text style={{fontSize:screenWidth*0.06,color:"#6C6C6C"}}>碧湾币</Text>
          </View>
        </HStack>
      </View>
      <Text style={{fontSize:screenWidth*0.055,marginTop:10,marginLeft:20,color:"#6C6C6C",alignSelf:'flex-start'}}>充值</Text>
      <HStack space={4} style={{justifyContent:'space-between',marginTop:10}}>
        <TouchableOpacity style={{width:"28%",height:screenHeight*0.1,borderWidth:1,borderColor:"#FFBF6B", backgroundColor:'rgba(239, 239, 239, 0.79)',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:screenWidth*0.055,color:"#FFBF6B"}}>12碧湾币</Text>
          <Text style={{fontSize:screenWidth*0.045,color:'#9A9A9A'}}>12.00元</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:"28%",height:screenHeight*0.1,backgroundColor:'rgba(239, 239, 239, 0.79)',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:screenWidth*0.055}}>24碧湾币</Text>
          <Text style={{fontSize:screenWidth*0.04,color:'#9A9A9A'}}>24.00元</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:"28%",height:screenHeight*0.1,backgroundColor:'rgba(239, 239, 239, 0.79)',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:screenWidth*0.055}}>36碧湾币</Text>
          <Text style={{fontSize:screenWidth*0.04,color:'#9A9A9A'}}>36.00元</Text>
        </TouchableOpacity>
      </HStack>
      <HStack space={4} style={{justifyContent:'space-between',marginTop:10}}>
        <TouchableOpacity style={{width:"28%",height:screenHeight*0.1,backgroundColor:'rgba(239, 239, 239, 0.79)',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:screenWidth*0.055}}>48碧湾币</Text>
          <Text style={{fontSize:screenWidth*0.04,color:'#9A9A9A'}}>48.00元</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:"28%",height:screenHeight*0.1,backgroundColor:'rgba(239, 239, 239, 0.79)',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:screenWidth*0.055}}>60碧湾币</Text>
          <Text style={{fontSize:screenWidth*0.04,color:'#9A9A9A'}}>60.00元</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:"28%",height:screenHeight*0.1,backgroundColor:'rgba(239, 239, 239, 0.79)',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:screenWidth*0.055}}>72碧湾币</Text>
          <Text style={{fontSize:screenWidth*0.04,color:'#9A9A9A'}}>72.00元</Text>
        </TouchableOpacity>
      </HStack>
      <HStack space={4} style={{justifyContent:'space-between',marginTop:10}}>
        <TouchableOpacity style={{width:"28%",height:screenHeight*0.1,backgroundColor:'rgba(239, 239, 239, 0.79)',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:screenWidth*0.055}}>108碧湾币</Text>
          <Text style={{fontSize:screenWidth*0.04,color:'#9A9A9A'}}>108.00元</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:"28%",height:screenHeight*0.1,backgroundColor:'rgba(239, 239, 239, 0.79)',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:screenWidth*0.055}}>198碧湾币</Text>
          <Text style={{fontSize:screenWidth*0.04,color:'#9A9A9A'}}>198.00元</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:"28%",height:screenHeight*0.1,backgroundColor:'rgba(239, 239, 239, 0.79)',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:screenWidth*0.055}}>298碧湾币</Text>
          <Text style={{fontSize:screenWidth*0.04,color:'#9A9A9A'}}>298.00元</Text>
        </TouchableOpacity>
      </HStack>
      <Text style={{fontSize:screenWidth*0.04,marginTop:10,marginLeft:20,color:"#6C6C6C",alignSelf:'flex-start'}}>关于碧湾币：</Text>
      <Text style={{fontSize:screenWidth*0.04,marginTop:10,marginLeft:20,color:"#6C6C6C",alignSelf:'flex-start'}}>1.碧湾币可以直接用户购买报告等虚拟服务</Text>
      <Button _text={{fontSize:screenWidth*0.055,color:"black"} } colorScheme='rgba(255, 191, 107, 1)' style={{ borderRadius:30,marginTop:"18%", width:"90%", height:screenHeight*0.08,alignItems:'center'}} >
        确认充值
      </Button>


    </View>
  ) 
  
}
export default Wallet;
const styles = StyleSheet.create({
  header: {
    backgroundColor:"rgba(244, 206, 152, 0.47)",
    width:"94%",
    height:screenHeight*0.15,
    marginTop:'4%',
    borderRadius:20,
  },
  background:{
    alignItems:'center',
    backgroundColor:"#ffffff"

  },
  content:{
    // borderWidth:1,
    height:420,
    width:"100%",
    marginTop:"5%",
    backgroundColor:"#ffffff"
  },
  list:{
    justifyContent:'center',
    height:70,
    width:"100%",
    borderBottomWidth:1,
    borderColor:"#f5f5f5"
  }
  
})