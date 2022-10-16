import React, { Component } from 'react';
import {
   Avatar,HStack,Center,Box,Button,Image
  ,Icon,Flex,Input,View, Container,
} from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { Text } from 'react-native';
import HttpUtil from '../../utils/http';

const User = ({navigation}) => {
  //用户数据
  const [user, setuser] = React.useState(null);
  
  React.useEffect(() => {
    focus=navigation.addListener('focus',()=>{
      getUser();
    })
  });

  function jumpLogin(){
    navigation.navigate('登录')
  }
  
  async function getUser(){
    let user_info = await AsyncStorage.getItem('user_info');
    // user = user_info;
    setuser(user_info)
    // console.log(user);
   
  }

  //控制显示用户信息
  function head(){
    if(user === null){
      return(
        <HStack style={{marginTop:'4%',marginLeft:"5%"}}>
          <Avatar bg="green.500" mr="4" size={'xl'}>
            RS
          </Avatar>
          <TouchableOpacity onPress={jumpLogin} style={{alignItems:'center'}}>
            <Text style={{fontSize:32,color:"#ffffff",marginTop:10}}>登录/注册</Text>
          </TouchableOpacity>
        </HStack>
      )
    }else{
      return(
        <HStack style = {{marginLeft:"5%"}} >
          <Avatar bg="green.500" mr="4" size={'xl'}>
            RS
          </Avatar>
          <TouchableOpacity onPress={jumpLogin} style={{alignItems:'flex-start'}}>
            <Text style={{fontSize:30,color:"#ffffff",marginTop:15}}>{JSON.parse(user).name}</Text>
            <Text style={{fontSize:22,color:"#ffffff",marginTop:5}}>{JSON.parse(user).phone}</Text>
          </TouchableOpacity>
        </HStack>
      )

    }

  }


  return(
    <View style = {styles.background}>
       
      <View style = {styles.header}>
        {head()}
      </View>
      <View style = {styles.content}>
        <TouchableOpacity style={styles.list}>
          <HStack style = {{marginLeft:"3%"}}>
            <Icon as={<AntDesign name="user" />} size={8} ml="2" color="#2DB7F5" />
            <Text style = {{fontSize:22,width:'80%',marginLeft:10}}>个人信息</Text>
            <Icon style ={{marginRight:20}} as={<AntDesign name="right" />} size={8} ml="2" />
          </HStack>     
        </TouchableOpacity>
        <TouchableOpacity style={styles.list}>
          <HStack style = {{marginLeft:"3%"}}>
            <Icon as={<AntDesign name="wallet" />} size={8} ml="2" color="#54BCBD" />
            <Text style = {{fontSize:22,width:'80%',marginLeft:10}}>钱包</Text>
            <Icon style ={{marginRight:20}} as={<AntDesign name="right" />} size={8} ml="2" color="muted.400" />
          </HStack>     
        </TouchableOpacity>
        <TouchableOpacity style={styles.list}>
          <HStack style = {{marginLeft:"3%"}}>
            <Icon as={<AntDesign name="profile" />} size={8} ml="2" color="#F4CE98" />
            <Text style = {{fontSize:22,width:'80%',marginLeft:10}}>订单信息</Text>
            <Icon style ={{marginRight:20}} as={<AntDesign name="right" />} size={8} ml="2" color="muted.400" />
          </HStack>     
        </TouchableOpacity>
        <TouchableOpacity style={styles.list}>
          <HStack style = {{marginLeft:"3%"}}>
            <Icon as={<MaterialIcons name="feedback" />} size={8} ml="2" color="#BD3124" />
            <Text style = {{fontSize:22,width:'80%',marginLeft:10}}>意见反馈</Text>
            <Icon style ={{marginRight:20}} as={<AntDesign name="right" />} size={8} ml="2" color="muted.400" />
          </HStack>     
        </TouchableOpacity>
        <TouchableOpacity style={styles.list}>
          <HStack style = {{marginLeft:"3%"}}>
            <Icon as={<MaterialCommunityIcons name="eye-off-outline" />} size={8} ml="2" color="#377F7F" />
            <Text style = {{fontSize:22,width:'80%',marginLeft:10}}>隐私政策</Text>
            <Icon style ={{marginRight:20}} as={<AntDesign name="right" />} size={8} ml="2" color="muted.400" />
          </HStack>     
        </TouchableOpacity>
        <TouchableOpacity style={styles.list}>
          <HStack style = {{marginLeft:"3%"}}>
            <Icon as={<AntDesign name="exclamationcircleo" />} size={8} ml="2" color="#FCCA00" />
            <Text style = {{fontSize:22,width:'80%',marginLeft:10}}>关于</Text>
            <Icon style ={{marginRight:20}} as={<AntDesign name="right" />} size={8} ml="2" color="muted.400" />
          </HStack>     
        </TouchableOpacity>
      </View>
      <Button _text={{fontSize:24} } colorScheme='rgba(222, 134, 143, 0.75)' style={{ borderRadius:20,marginTop:"20%", width:"90%", height:60 ,alignItems:'center'}} >
        退出登录
      </Button>


    </View>
  ) 
  
}
export default User;
const styles = StyleSheet.create({
  header: {
    backgroundColor:"#68A4CF",
    width:"94%",
    height:"18%",
    marginTop:'5%',
    borderRadius:20,
    justifyContent: 'center',
  },
  background:{
    alignItems:'center',
    backgroundColor:"#f5f5f5"

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