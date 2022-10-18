import React, { Component,useEffect, useState } from 'react';
import {
   Avatar,HStack,Center,Box,Button,Image
  ,Icon,Flex,Input,View, Container,
} from 'native-base';
import { ScrollView, StyleSheet, TouchableOpacity,Dimensions,FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Swiper from 'react-native-swiper';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import RNEChartsPro from "react-native-echarts-pro";
import WebView from "react-native-webview";


import { Text,useColorScheme } from 'react-native';
import HttpUtil from '../../utils/http';

const Optional = ({navigation}) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const [value, setValue] = useState('Unselected');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [item,setItem] = useState(null);

  const pieOption = {
    
    series: [
      {
        width:75,
        height:75,
        silent:'ture',
        name: 'Access From',
        animation:false,
        type: 'pie',
        radius: ['55%', '70%'],
        // avoidLabelOverlap: false,
        label: {
          show: true,
          fontSize: '30',
          position: 'center'
        },
        data: [
          
          { value: 1048, name: '98',
            itemStyle:{
              color :'#000000' 
            }
          },
          { value: 735, name: '' },
        ]
      }
    ]
  };
  const Item = () => (
    <TouchableOpacity  style={{width:screenWidth*0.245,height:75,borderBottomWidth:0.5,justifyContent:'center'}}>
    <RNEChartsPro height={75}   option={pieOption} />
  </TouchableOpacity>
  );
  const DATA = [
    {
      id: "1",
      title: "First Item",
    },
    {
      id: "2",
      title: "Second Item",
    },
    {
      id: "3",
      title: "Third Item",
    },
    {
      id: "4",
      title: "Second Item",
    },
    {
      id: "5",
      title: "Third Item",
    },
    {
      id: "6",
      title: "Second Item",
    },
    {
      id: "7",
      title: "Third Item",
    },
  ];
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
          <HStack>
            <View style={{width:'25%',backgroundColor:'#f5f5f5',justifyContent:'center', alignItems:'center',height:36}}>
              <Text style={{color:'#BEBEBE',fontSize:20}}>名称</Text>
            </View>
            <ScrollView 
              style={{width:'75%'}}
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              bounces={false}
              ref={(ref) => {
                setItem(ref)
              }}
              horizontal={true}>
            <View style={{height:36,flexDirection:'row',backgroundColor:'#f5f5f5', justifyContent:'center'}}>
                <Text style={{color:'#BEBEBE',width:screenWidth*0.245,textAlign:'left', fontSize:20}}>2023一季报</Text>
                <Text style={{color:'#BEBEBE',width:screenWidth*0.245,textAlign:'left', fontSize:20}}>2022三季报</Text>
                <Text style={{color:'#BEBEBE',width:screenWidth*0.245,textAlign:'left', fontSize:20}}>2022一季报</Text>
                <Text style={{color:'#BEBEBE',width:screenWidth*0.245,textAlign:'left', fontSize:20}}>2022年报</Text>
              </View>
            </ScrollView>
          </HStack>
          <HStack>

          <ScrollView style={{width:'25%',height:'100%'}}>
            <View style={{marginLeft:10,height:75,borderBottomWidth:0.5}}>
              <Text style={{fontSize:26,marginTop:10}}>东方财富</Text>
              <HStack>
                <Text style={{fontSize:18,backgroundColor:'#347CAF',color:"#ffffff"}}>SH</Text>
                <Text style={{marginLeft:10,fontSize:18,color:'rgba(149, 29, 29, 0.62)'}}>300059</Text>
              </HStack>
            </View>
            <View style={{marginLeft:10,height:75,borderBottomWidth:0.5}}>
              <Text style={{fontSize:26,marginTop:10}}>东方财富</Text>
              <HStack>
                <Text style={{fontSize:18,backgroundColor:'#347CAF',color:"#ffffff"}}>SH</Text>
                <Text style={{marginLeft:10,fontSize:18,color:'rgba(149, 29, 29, 0.62)'}}>300059</Text>
              </HStack>
            </View>
            <View style={{marginLeft:10,height:75,borderBottomWidth:0.5}}>
              <Text style={{fontSize:26,marginTop:10}}>东方财富</Text>
              <HStack>
                <Text style={{fontSize:18,backgroundColor:'#347CAF',color:"#ffffff"}}>SH</Text>
                <Text style={{marginLeft:10,fontSize:18,color:'rgba(149, 29, 29, 0.62)'}}>300059</Text>
              </HStack>
            </View>
            <View style={{marginLeft:10,height:75,borderBottomWidth:0.5}}>
              <Text style={{fontSize:26,marginTop:10}}>东方财富</Text>
              <HStack>
                <Text style={{fontSize:18,backgroundColor:'#347CAF',color:"#ffffff"}}>SH</Text>
                <Text style={{marginLeft:10,fontSize:18,color:'rgba(149, 29, 29, 0.62)'}}>300059</Text>
              </HStack>
            </View>
            <View style={{marginLeft:10,height:75,borderBottomWidth:0.5}}>
              <Text style={{fontSize:26,marginTop:10}}>东方财富</Text>
              <HStack>
                <Text style={{fontSize:18,backgroundColor:'#347CAF',color:"#ffffff"}}>SH</Text>
                <Text style={{marginLeft:10,fontSize:18,color:'rgba(149, 29, 29, 0.62)'}}>300059</Text>
              </HStack>
            </View>
            <View style={{marginLeft:10,height:75,borderBottomWidth:0.5}}>
              <Text style={{fontSize:26,marginTop:10}}>东方财富</Text>
              <HStack>
                <Text style={{fontSize:18,backgroundColor:'#347CAF',color:"#ffffff"}}>SH</Text>
                <Text style={{marginLeft:10,fontSize:18,color:'rgba(149, 29, 29, 0.62)'}}>300059</Text>
              </HStack>
            </View>
            <View style={{marginLeft:10,height:75,borderBottomWidth:0.5}}>
              <Text style={{fontSize:26,marginTop:10}}>东方财富</Text>
              <HStack>
                <Text style={{fontSize:18,backgroundColor:'#347CAF',color:"#ffffff"}}>SH</Text>
                <Text style={{marginLeft:10,fontSize:18,color:'rgba(149, 29, 29, 0.62)'}}>300059</Text>
              </HStack>
            </View>



          </ScrollView>
          <ScrollView  style={{width:'75%',height:'100%'}}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            bounces={false}
            onScroll={ListScroll}
            horizontal={true}>
            <View  style={{width:screenWidth*0.245}}>
              <FlatList
                renderItem={Item}
              data={ DATA}>
              </FlatList>
            </View>
            <View  style={{width:screenWidth*0.245}}>
              <FlatList
                renderItem={Item}
              data={ DATA}>
              </FlatList>
            </View>
            <View  style={{width:screenWidth*0.245}}>
              <FlatList
                renderItem={Item}
              data={ DATA}>
              </FlatList>
            </View>
            <View  style={{width:screenWidth*0.245}}>
              <FlatList
                renderItem={Item}
              data={ DATA}>
              </FlatList>
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