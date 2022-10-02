import React, { Component } from 'react';
import {Pressable,
  Link,Text,HStack,Center,Heading,Switch,useColorMode,NativeBaseProvider,VStack,Box,Button,AspectRatio,Image,Stagger,Stack,FormControl,isOpen,Select,CheckIcon,
  children,Actionsheet,WarningOutlineIcon,AlertDialog,Icon,ScrollView,Ionicons,Flex,Radio,Spacer,Input,AddIcon,Divider,Checkbox,sidebarItems,View, Container
} from 'native-base';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { StyleSheet, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HttpUtil from '../../utils/http';

const Register = ({navigation}) => {
  //控制密码是否显示
  const [show, setShow] = React.useState(false);
  //账号
  const [username,setusername] = React.useState('');
  //密码
  const [password,setpassword] = React.useState(''); 
  //电话
  const [phone,setphone] = React.useState('');

  //注册

  function registerUser(){
    let that = this;
    var axios = require('axios');
    var qs = require('qs');
    var data = {
      'username': username,
      'password': password,
      'phone' :  phone
    };
    console.log(data);
    let url = HttpUtil.localUrl+'admin/register/user'
    let header = {};
    HttpUtil.post(url,data,header,function(response){
      if(response.status === 200){
        navigation.navigate('登录')
      }
      // console.log(response);
    })
  }

  return(
    <Box  style = {styles.container}>
      <Center style = {{marginTop:"30%"}} >
        <Stack space={4} w="90%" maxW="450px" mx="auto">
          <Input  
            InputLeftElement={
              <Icon as={<MaterialIcons name="person" />} size={8} ml="2" color="muted.400" />
            }
            fontSize = {'2xl'} 
            onChangeText={(userName)=>setusername(userName)} 
            variant="underlined" placeholder=" 账号">
          </Input>
          <Input 
            type={show ? "text" : "password"}
            InputLeftElement={
              <Icon as={<AntDesign name="lock" />} size={8} ml="2" color="muted.400" />
            }
            InputRightElement={<Pressable onPress={() => setShow(!show)}>
              <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={8} mr="2" color="muted.400" /></Pressable>
            }
            fontSize = {'2xl'} 
            onChangeText={(password)=>setpassword(password)} 
            variant="underlined" placeholder=" 密码" >
          </Input>
          <Input  
            InputLeftElement={
              <Icon as={<AntDesign name="phone" />} size={8} ml="2" color="muted.400" />
            }
            fontSize = {'2xl'}
            onChangeText={(phone)=>setphone(phone)}  
            variant="underlined" placeholder=" 电话">
          </Input>
        </Stack>
      </Center>
      <Center style = {{marginTop:"3%"}}>
        <Stack  alignItems={'center'} w={'full'} >
          <Button onPress={registerUser}  _text={{fontSize:24} } mt={'10'} variant="outline" style={{ fontSize:'100', width:"80%", height:60 ,alignItems:'center'}}>
            注册
          </Button>
        </Stack>
      </Center>
    </Box>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:"#ffffff",
    width:"100%",
    height:"100%",
  }
})
export default Register;