import React, { Component,useEffect, useState } from 'react';
import {
   Avatar,HStack,Center,Box,Button,Image
  ,Icon,Flex,Input,View, Container,
} from 'native-base';
import { ScrollView, StyleSheet, TouchableOpacity,Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Swiper from 'react-native-swiper';
import SegmentedControl from '@react-native-segmented-control/segmented-control';


import { Text,useColorScheme } from 'react-native';
import HttpUtil from '../../utils/http';

const Optional = ({navigation}) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const [value, setValue] = useState('Unselected');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [item,setItem] = useState(null);

  const _onChange = (event) => {
    setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
  };

  const _onValueChange = (val) => {
    setValue(val);
    console.log(val)
  };

  const ListScroll = (e) => {
      const x1 = e.nativeEvent.contentOffset.x;
      if (Platform.OS === 'ios') {
        item.setNativeProps({
          contentOffset: { x: x1, y: 0, animated: false },
        });
      } else {
        item.scrollTo({ x: x1, y: 0, animated: false });
      }
    

  };


  return(
    
     <View style={{ flex: 1,backgroundColor:"#f5f5f5",alignItems:'center' }}>
      <HStack style={{width:'100%', marginTop:"5%", justifyContent:'space-between'}} >
        <Text style={{marginLeft:20, fontSize:26}}>自选</Text>
        <HStack style={{ marginRight:20}}>
          <Button _text={{color:'#E99D42'}} style={{backgroundColor:'#FFFFFF',borderColor:'#E99D42',borderWidth:2,}}>全部</Button>
          <Button>上交所</Button>
          <Button>深交所</Button>
        </HStack>
      </HStack>
      <Input placeholder="请输入股票代码或者公司名称"height={"7%"} width="90%" borderRadius="24" mt={'6'} py="3" px="1" fontSize="22" 
        InputLeftElement={<Icon m="2" ml="3" size="10" color="gray.400" as={<MaterialIcons name="search" />} />}>
      </Input>
      <View style={styles.segmentContainer}>
        <SegmentedControl
        style={{backgroundColor:'#ffffff',height:40,width:400}}
        tintColor="rgba(189, 49, 36, 0.56)"
        values={['最新', '年报', '中报', '季报']}
        selectedIndex={1}
        selectedIndex={selectedIndex}
        onChange={_onChange}
        onValueChange={_onValueChange}
        fontStyle={{color: '#BEBEBE',fontSize:18}}
        activeFontStyle={{color: '#ffffff',fontSize:18}}
        />
      </View>

      <HStack style={{width:'98%',height:'50%',alignItems:'center',backgroundColor:'#ffffff'}}>
        <ScrollView stickyHeaderIndices={[0]} >
          <HStack style={{}}>
            <View style={{width:'25%',justifyContent:'center', alignItems:'center',height:36}}>
              <Text style={{color:'#BEBEBE',fontSize:20}}>名称</Text>
            </View>
            <ScrollView 
              style={{width:'75%',borderWidth:1}}
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              bounces={false}
              ref={(ref) => {
                setItem(ref)
              }}
              horizontal={true}>
            <View style={{height:36,borderWidth:1, justifyContent:'center'}}>
                <Text style={{width:screenWidth*0.245,textAlign:'center', fontSize:20}}>HELLo</Text>


              </View>

            </ScrollView>
          </HStack>
          <HStack>

          <ScrollView style={{width:'25%',height:'100%',borderWidth:1}}>
            <Text style={{fontSize:40}}>HELLo</Text>
            <Text style={{fontSize:40}}>HELLo</Text>
            <Text style={{fontSize:40}}>HELLo</Text>
            <Text style={{fontSize:40}}>HELLo</Text>
            <Text style={{fontSize:40}}>HELLo</Text>
            <Text style={{fontSize:40}}>HELLo</Text>

            <Text style={{fontSize:40}}>HELLo</Text>
            <Text style={{fontSize:40}}>HELLo</Text>
            <Text style={{fontSize:40}}>HELLo</Text>
            <Text style={{fontSize:40}}>HELLo</Text>
            <Text style={{fontSize:40}}>HELLo</Text>

          </ScrollView>
          <ScrollView  style={{width:'75%',height:'100%',borderWidth:1}}

              // scrollEnabled={false}

              scrollEventThrottle={16}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              bounces={false}
              onScroll={ListScroll}
          horizontal={true}>
            <View>
            <Text style={{fontSize:40}}>HELLo</Text>
            <Text style={{fontSize:40}}>HELLo</Text>
            <Text style={{fontSize:40}}>HELLo</Text>
            <Text style={{fontSize:40}}>HELLo</Text>
            <Text style={{fontSize:40}}>HELLo</Text>
            <Text style={{fontSize:40}}>HELLo</Text>
            </View>
            <View>
            <Text style={{fontSize:40}}>HELLo</Text>
            <Text style={{fontSize:40}}>HELLo</Text>
            <Text style={{fontSize:40}}>HELLo</Text>
            <Text style={{fontSize:40}}>HELLo</Text>
            <Text style={{fontSize:40}}>HELLo</Text>
            <Text style={{fontSize:40}}>HELLo</Text>
            </View>
            <View>
            <Text style={{fontSize:40}}>HELLo</Text>
            <Text style={{fontSize:40}}>HELLo</Text>
            <Text style={{fontSize:40}}>HELLo</Text>
            <Text style={{fontSize:40}}>HELLo</Text>
            <Text style={{fontSize:40}}>HELLo</Text>
            <Text style={{fontSize:40}}>HELLo</Text>
            </View>
          </ScrollView>
          </HStack>

          </ScrollView>
        </HStack>



      </View>


  
  ) 
}
export default Optional;
const styles = StyleSheet.create({
  wrapper: {},
  segmentContainer: {
    marginBottom: 10,

    marginTop:20,marginRight:30,width:'100%', alignItems:'flex-end'
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#9DD6EB'
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
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold'
  },

  
})