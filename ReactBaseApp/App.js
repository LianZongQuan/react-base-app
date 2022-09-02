/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-30 15:25:50
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-30 18:02:17
 * @FilePath: \ReactBaseApp\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Link,
  Text,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
  Box,
  Button,
  AspectRatio,
  Image,
  Stack,
  FormControl,
  Select,
  CheckIcon,
  WarningOutlineIcon,
  ScrollView,
  Flex,
  Spacer
} from 'native-base';

import { Provider } from 'react-redux';
import store
 from './redux/store';

//  import HomeScreen from './src/components/HomeScreen/HomeScreen';
import HomeScreen from './src/components/HomeScreen/HomeScreen';
// Color Switch Component
function ToggleDarkMode() {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
const App = () => {
  return (
    <Provider store={store} >


    <NativeBaseProvider >

    <HomeScreen></HomeScreen>



      {/* <Box>
        <Button testID='1'>asd</Button>
      </Box> */}
      {/* <Counter></Counter> */}
      {/* <Center
        _dark={{bg: 'blueGray.900'}}
        _light={{bg: 'blueGray.50'}}
        px={4}
        flex={1}>
        <VStack space={5} alignItems="center">
          <NativeBaseIcon />
          <Heading size="lg">Welcome to NativeBase</Heading>
          <HStack space={2} alignItems="center">
            <Text>Edit</Text>
            <Box
              px={2}
              py={1}
              _dark={{bg: 'blueGray.800'}}
              _light={{bg: 'blueGray.200'}}>
              App.js
            </Box>
            <Text>and save to reload.</Text>
          </HStack>
          <Link href="https://docs.nativebase.io" isExternal>
            <Text color="primary.500" underline fontSize={'xl'}>
              Learn NativeBase
            </Text>
          </Link>
          <ToggleDarkMode />
        </VStack>
      </Center> */}
    </NativeBaseProvider>
    </Provider>
  );
};
export default App;
