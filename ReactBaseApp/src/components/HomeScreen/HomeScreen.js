import React, { Component } from 'react';
import {
  Link,Text,HStack,Center,Heading,Switch,useColorMode,NativeBaseProvider,VStack,Box,Button,AspectRatio,Image,Stagger,Stack,FormControl,isOpen,Select,CheckIcon,
  children,Actionsheet,WarningOutlineIcon,ScrollView,Flex,Radio,Spacer,Input,AddIcon,Divider,Checkbox,sidebarItems
} from 'native-base';
import { useDisclose } from 'native-base';
import HttpUtil from '../../utils/http';
import { _ScrollView } from 'react-native';
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
          <Actionsheet.Item>Cancel</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>;


}
const test = () =>{

}


function Example() {
 
}
export default HomeScreen;