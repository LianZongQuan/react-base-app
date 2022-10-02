import React, { Component } from 'react';
import {Pressable,
  Link,Text,HStack,Center,Heading,Switch,useColorMode,NativeBaseProvider,VStack,Box,Button,AspectRatio,Image,Stagger,Stack,FormControl,isOpen,Select,CheckIcon,
  children,Actionsheet,WarningOutlineIcon,AlertDialog,Icon,ScrollView,Ionicons,Flex,Radio,Spacer,Input,AddIcon,Divider,Checkbox,sidebarItems,View, Container, IconButton
} from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from 'react-native-vector-icons'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDisclose } from 'native-base';
import HttpUtil from '../../utils/http';
import { TouchableOpacity, _ScrollView } from 'react-native';
import { Progress } from 'native-base';

const HomeScreen = ({navigation}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(1);
  const onClose = () => setIsOpen(false);

  const cancelRef = React.useRef(null);
  return(
    <Box bg="white" h={'1/5'} safeAreaBottom width="100%" maxW="300px" mb={'0'} >
        {/* <Center flex={1}></Center> */}
        <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
            <TouchableOpacity>
            </TouchableOpacity>
        </HStack>
      </Box>
  ) 
   

  

}
export default HomeScreen;