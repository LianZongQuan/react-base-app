import React, { Component } from 'react';
import {Pressable,
  Link, Avatar,HStack,Center,Heading,Switch,useColorMode,NativeBaseProvider,VStack,Box,Button,AspectRatio,Image,Stagger,Stack,FormControl,isOpen,Select,CheckIcon,
  children,Actionsheet,WarningOutlineIcon,AlertDialog,Icon,ScrollView,Ionicons,Flex,Radio,Spacer,Input,AddIcon,Divider,Checkbox,sidebarItems,View, Container, IconButton
} from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons, MaterialIcons } from 'react-native-vector-icons'

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
        <HStack style={{marginTop:'4%',marginLeft:"5%"}}>
          <Avatar bg="green.500" mr="4" size={'xl'}>
            RS
          </Avatar>
          <TouchableOpacity onPress={jumpLogin} style={{alignItems:'flex-start'}}>
            <Text style={{fontSize:22,color:"#ffffff",marginTop:15}}>{JSON.parse(user).name}</Text>
            <Text style={{fontSize:22,color:"#ffffff",marginTop:5}}>{JSON.parse(user).phone}</Text>
          </TouchableOpacity>
        </HStack>
      )

    }

  }


  return(
    <View>
      <View style = {styles.header}>
        {head()}
      </View>
    </View>
  ) 
  
}
export default User;
const styles = StyleSheet.create({
  header: {
    backgroundColor:"#4095E5",
    width:"100%",
    height:"40%",
  }
})