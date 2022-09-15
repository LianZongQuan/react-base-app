import React, { Component } from 'react';
import {
  Link,Text,HStack,Center,Heading,Switch,useColorMode,NativeBaseProvider,VStack,Box,Button,AspectRatio,Image,Stagger,Stack,FormControl,isOpen,Select,CheckIcon,
  children,Actionsheet,WarningOutlineIcon,AlertDialog,Icon,ScrollView,Ionicons,Flex,Radio,Spacer,Input,AddIcon,Divider,Checkbox,sidebarItems,View, Container
} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDisclose } from 'native-base';
import HttpUtil from '../../utils/http';
import { _ScrollView } from 'react-native';
import { Progress } from 'native-base';

const Example = () => {
  return(
    <HStack  justifyContent="center">
      <Spacer></Spacer>
    <Center h="40" w="20" bg="primary.300" rounded="md" shadow={3} />
    <Spacer></Spacer>
    <Center h="40" w="20" bg="primary.500" rounded="md" shadow={3} />
    <Spacer></Spacer>
    <Center h="40" w="20" bg="primary.700" rounded="md" shadow={3} />
    <Spacer></Spacer>
  </HStack>
  )
};

const HomeScreen = ({navigation}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onClose = () => setIsOpen(false);

  const cancelRef = React.useRef(null);
  return(
    <View bg={"#ffffff"} style = {{width:"100%",height:"100%"}} alignItems="center">
      <Center shadow="1" rounded="2xl" bg="white:alpha.20" style = {{marginTop:"10%",width:"90%",height:"30%"}}>
        <HStack flexDirection={"row"} style = {{borderWidth:1}} >
          <Text fontSize={"2xl"} h = {"10"} style = {{borderWidth:1,padding:0}}>当期日期：</Text>
          <Select style = {{borderWidth:1}}  h = {"10"} minWidth="100" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} >
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
        </HStack>


      </Center>
      <Center shadow="1" rounded="2xl" bg="white:alpha.20" style = {{marginTop:"10%",width:"90%",height:"30%"}}>
      </Center>
    </View>


  ) 
   

  

}
export default HomeScreen;