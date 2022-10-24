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
const AddOptional = ({navigation}) => {

  function jumpOptional(){
    navigation.navigate('自选');
  }

  const noSearch =() =>{
    return (
      <View>
<View style={{alignSelf:'flex-start',marginLeft:12}}> 
        <Text style={{fontSize:screenWidth*0.045}}>热门搜索</Text>
      </View>
      <HStack mt={'3'} style={{width:'100%',justifyContent:'space-evenly'}}>
        <TouchableOpacity style={{borderWidth:1,borderRadius:14,borderColor:"#BBBBBB",width:screenWidth*0.25,height:screenHeight*0.05,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:screenWidth*0.04}}>东方财富</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth:1,borderRadius:14,borderColor:"#BBBBBB",width:screenWidth*0.25,height:screenHeight*0.05,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:screenWidth*0.04}}>阿里巴巴</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth:1,borderRadius:14,borderColor:"#BBBBBB",width:screenWidth*0.25,height:screenHeight*0.05,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:screenWidth*0.04}}>比亚迪</Text>
        </TouchableOpacity>
      </HStack>
      <HStack mt={'3'} style={{width:'100%',justifyContent:'space-evenly'}}>
        <TouchableOpacity style={{borderWidth:1,borderRadius:14,borderColor:"#BBBBBB",width:screenWidth*0.25,height:screenHeight*0.05,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:screenWidth*0.04}}>腾讯</Text>
        </TouchableOpacity>
      </HStack>

      <HStack style={{width:'100%',marginTop:screenHeight*0.1}}>
        <View style={{alignSelf:'flex-start',marginLeft:12,width:'80%'}}> 
          <Text style={{fontSize:screenWidth*0.045}}>历史搜索</Text>
        </View>
        <TouchableOpacity style={{alignSelf:'flex-end'}}>
        <Icon  ml="3" size={screenWidth*0.07} color="gray.400" as={<MaterialIcons name="delete-forever" />} />

        </TouchableOpacity>
      </HStack>

      <HStack mt={'3'} style={{width:'100%',justifyContent:'space-evenly'}}>
        <TouchableOpacity style={{borderWidth:1,borderRadius:14,borderColor:"#BBBBBB",width:screenWidth*0.25,height:screenHeight*0.05,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:screenWidth*0.04}}>东方财富</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth:1,borderRadius:14,borderColor:"#BBBBBB",width:screenWidth*0.25,height:screenHeight*0.05,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:screenWidth*0.04}}>阿里巴巴</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth:1,borderRadius:14,borderColor:"#BBBBBB",width:screenWidth*0.25,height:screenHeight*0.05,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:screenWidth*0.04}}>比亚迪</Text>
        </TouchableOpacity>
      </HStack>
      </View>
      
    )
  }

  return(
    <View style = {styles.background}>
      <HStack style={{width:'100%'}}>
        <View style={{width:'75%',alignItems:'flex-start',height:screenHeight*0.1,justifyContent:'center'}}>
          <Input  ml={'3'} placeholder="请输入股票代码或者公司名称"height={screenHeight*0.06} bg={"#ffffff"} width={screenWidth*0.75} borderRadius="24"  fontSize={screenWidth*0.035} 
            InputLeftElement={<Icon m="2" ml="3" size={screenWidth*0.07} color="gray.400" as={<MaterialIcons name="search" />} />}>
          </Input>
        </View>
        <TouchableOpacity onPress={jumpOptional} style={{width:'25%',alignItems:'flex-end',height:screenHeight*0.1,justifyContent:'center'}}>
          <Text style={{fontSize:screenWidth*0.055,marginRight:20}}>取消</Text>
        </TouchableOpacity>

      </HStack>
      <View>
        

      </View>
      


    </View>
  ) 
  
}
export default AddOptional;
const styles = StyleSheet.create({
  header: {
    backgroundColor:"#ffffff",
    width:"100%",
    height:screenHeight*0.25,
    justifyContent: 'center',
    alignItems:'center'
  },
  background:{
    width:'100%',
    height:'100%',
    alignItems:'center',
    backgroundColor:"#ffffff"

  },
  content:{
    // borderWidth:1,
    height:320,
    width:"100%",
    marginTop:"3%",
    backgroundColor:"#ffffff"
  },
  list:{
    justifyContent:'center',
    alignItems:'center',
    height:screenHeight*0.09,
    width:"100%",
    borderBottomWidth:1,
    borderColor:"#f5f5f5"
  }
  
})