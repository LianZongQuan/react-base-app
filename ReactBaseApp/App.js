import React from 'react';
import {
  Link,  HStack, Center, Heading, Switch, useColorMode, NativeBaseProvider, VStack, Box,
   AspectRatio, Image,  FormControl, Select, CheckIcon, WarningOutlineIcon, ScrollView,
  Flex, Spacer
} from 'native-base';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import store from './redux/store';

import HomeScreen from './src/components/HomeScreen/HomeScreen';
import Login from './src/components/login/Login';
import Register from './src/components/register/Register'
import User from './src/components/user/User';
import Optional from './src/components/optional/Optional'
import Test from './src/utils/Test'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <Provider store={store} >
      <NativeBaseProvider >
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ fullScreenGestureEnabled: true, contentStyle: { backgroundColor: '#ffffff' } }}>
        <Stack.Screen name="Home" 
          options={{
            header: ({ navigation }) => { },
            title: '',
        }}>
          {() => (
            <Tab.Navigator
              initialRouteName="首页"
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  size = 34;
                  if (route.name === '首页') {
                    iconName = focused
                      ? 'home'
                      : 'home-outline';
                    return <Ionicons name={iconName} size={size} color={color} />;
                  } else if (route.name === '自选') {
                    iconName = focused ? 'pluscircle' : 'pluscircleo';
                    return <AntDesign name={iconName} size={size} color={color} />;
                  }else if (route.name === '我的') {
                    iconName = focused ? 'user-circle-o' : 'user-circle';
                    return <FontAwesome name={iconName} size={size} color={color} />;
                  }
                },
                //标签属性
                tabBarLabelStyle: {
                  fontSize: 20,
                },
                //导航栏属性
                tabBarStyle:{
                  height:70,
                },
                //选中颜色
                tabBarActiveTintColor: '#4095E5',
                //未选中颜色
                tabBarInactiveTintColor: 'gray',
                headerShown: false
            })}>
              <Tab.Screen name="首页" component={HomeScreen}/>
              <Tab.Screen name="自选" component={Optional} />
              <Tab.Screen name="我的" component={User} />
            </Tab.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen name="登录" component={Login} />
        <Stack.Screen name="注册" component={Register} />
        <Stack.Screen name="测试" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};
export default App;
