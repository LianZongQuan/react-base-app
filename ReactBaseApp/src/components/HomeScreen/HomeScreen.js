import React, { Component } from 'react';
import {
  Link,Text,HStack,Center,Heading,Switch,useColorMode,NativeBaseProvider,VStack,Box,Button,AspectRatio,Image,Stagger,Stack,FormControl,isOpen,Select,CheckIcon,
  children,Actionsheet,WarningOutlineIcon,ScrollView,Flex,Radio,Spacer,Input,AddIcon,Divider,Checkbox,sidebarItems,View
} from 'native-base';
import { useDisclose } from 'native-base';
import HttpUtil from '../../utils/http';
import { _ScrollView } from 'react-native';
import { Progress } from 'native-base';

const HomeScreen = () => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();
  return <Center _ScrollView = {{}}>
      <Button onPress={onOpen}>Actionsheet</Button>
      <Actionsheet  isOpen={isOpen} onClose={onClose}>
        
        <Actionsheet.Content  _dragIndicatorWrapperOffSet={{
        py: '10'
      }}>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text fontSize="16" color="gray.500" _dark={{
            color: 'gray.300'
          }}>
              Albums
            </Text>
          </Box>
          <Actionsheet.Item>Delete</Actionsheet.Item>
          <Actionsheet.Item>Share</Actionsheet.Item>
          <Actionsheet.Item>Play</Actionsheet.Item>
          <Actionsheet.Item>Favourite</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
      {/* //rn实现少半圆效果 */}
        <View style={{
          overflow: 'hidden',//这行代码不可省略
          top: 30,
          backgroundColor: "#CBCBCB",
          height: 18,
          width: 18,
          borderRadius: 9,
          marginTop: 20
        }}>
          <View style={{ width: 6, height: 18, backgroundColor: 'rgba(34,171,148, 1.0)' }}></View>
        </View>

      <Box w="90%" maxW="400">
        <VStack space="md">
          <VStack mx="4" space="md">
            <Progress colorScheme="primary" value={35} />
            <Progress colorScheme="secondary" value={45} />
            <Progress colorScheme="emerald" value={55} />
            <Progress colorScheme="warning" value={65} />
            <Progress colorScheme="light" value={99} />
          </VStack>
        </VStack>
      </Box>
    </Center>;


}
const test = () =>{
  
}


function Example() {
 
}
export default HomeScreen;