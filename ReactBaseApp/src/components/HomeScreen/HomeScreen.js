import React, { Component } from 'react';
import {
   Avatar,HStack,Center,Box,Button
  ,Icon,Flex,Input,View, Container,
} from 'native-base';
import { StyleSheet, TouchableOpacity,Image,Dimensions, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Swiper from 'react-native-swiper';

import { Text } from 'react-native';
import HttpUtil from '../../utils/http';

const HomeScreen = ({navigation}) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  return(
    <View style = {styles.background}>
        <Image  style={{borderWidth:1,width:400,height:100,marginTop:'6%'}}  source={require('./images/head_icon.png')}></Image>
      <Input placeholder="请输入股票代码或者公司名称"height={"8%"} width="90%" borderRadius="24" mt={'10'} py="3" px="1" fontSize="22" 
        InputLeftElement={<Icon m="2" ml="3" size="10" color="gray.400" as={<MaterialIcons name="search" />} />}>
      </Input>
      <ScrollView >
      <Swiper style={styles.wrapper}
       showsButtons={true}
       width={screenWidth*0.94}
       height={screenHeight*0.4}
       showsButtons={false} 
       >
        {/* <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View> */}
        <Image  style={{width:screenWidth*0.94,height:screenHeight*0.4}}  source={require('./images/image1.png')}></Image>
        <Image  style={{width:screenWidth*0.94,height:screenHeight*0.4}}  source={require('./images/image1.png')}></Image>
        <Image  style={{width:screenWidth*0.94,height:screenHeight*0.4}}  source={require('./images/image1.png')}></Image>

      </Swiper>

      </ScrollView>
      
 
    
    </View>
  ) 
   

  

}
export default HomeScreen;
const styles = StyleSheet.create({
  wrapper: {marginTop:'5%'},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
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
    flex:1,
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