import React from 'react';
import {
  Link, Text, HStack, Center, Heading, Switch, useColorMode, NativeBaseProvider, VStack, Box,
  Button, AspectRatio, Image,  FormControl, Select, CheckIcon, WarningOutlineIcon, ScrollView,
  Flex, Spacer
} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomeScreen from './src/components/HomeScreen/HomeScreen';
import Test1 from './src/components/test1';

// const Stack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
function App() {
  return (
    <Provider store={store} >
      <NativeBaseProvider >
        <NavigationContainer>

          <Stack.Navigator initialRouteName="主页">
            <Stack.Screen name="主页"
              options={{
                  header: ({ navigation }) => { },
                  title: '',
              }}
              component={HomeScreen}>
            </Stack.Screen>
            <Stack.Screen name="测试"
              options={{
                  header: ({ navigation }) => { },
                  title: '',
              }}
              component={Test1}>
            </Stack.Screen>

          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};
export default App;
