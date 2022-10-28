import React from 'react';
import {
  Link,  HStack, Center, Heading, Switch, useColorMode, NativeBaseProvider, VStack, Box,
   AspectRatio, Image,  FormControl, Select, CheckIcon, WarningOutlineIcon, ScrollView,
  Flex, Spacer
} from 'native-base';
import { Button, Text, View ,Dimensions} from 'react-native';
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
  import UserInfo from './src/components/user/userInfo/UserInfo'
    import UserProfile from './src/components/user/userInfo/UserProfile'
    import ModifyNickname from './src/components/user/userInfo/ModifyNickname';
    import ModifyPassword from './src/components/user/userInfo/ModifyPassword';
    import ModifyPhone from './src/components/user/userInfo/ModifyPhone';
import Optional from './src/components/optional/Optional'
import AddOptional from './src/components/optional/AddOptional';
import Report from './src/components/optional/Report';

import AboutApp from './src/components/user/AboutApp';
import Wallet from './src/components/user/Wallet'
import OrderInfo from './src/components/user/OrderInfo'
import FeedBack from './src/components/user/FeedBack'

import Test from './src/utils/Test'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
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
              initialRouteName="自选"
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  size = screenWidth*0.07;
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
                  fontSize: screenWidth*0.05,
                },
                //导航栏属性
                tabBarStyle:{
                  paddingTop:5,
                  height:screenWidth*0.16,
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
        <Stack.Screen name="登录" component={Login} options={{headerTitleAlign:'center'}}/>
        <Stack.Screen name="注册" component={Register} options={{headerTitleAlign:'center'}} />
        <Stack.Screen name="个人信息" component={UserInfo} options={{headerTitleAlign:'center'}}/>
        <Stack.Screen name="修改昵称" component={ModifyNickname} options={{headerTitleAlign:'center'}}/>
        <Stack.Screen name="个人简介" component={UserProfile} options={{headerTitleAlign:'center'}}/>
        <Stack.Screen name="修改手机号" component={ModifyPhone} options={{headerTitleAlign:'center'}}/>
        <Stack.Screen name="修改密码" component={ModifyPassword} options={{headerTitleAlign:'center'}}/>
        <Stack.Screen name="钱包" component={Wallet} options={{headerTitleAlign:'center'}}/>
        <Stack.Screen name="订单信息" component={OrderInfo} options={{headerTitleAlign:'center'}}/>
        <Stack.Screen name="意见反馈" component={FeedBack} options={{headerTitleAlign:'center'}}/>
        <Stack.Screen name="添加自选" component={AddOptional} options={{headerTitleAlign:'center'}}/>
        <Stack.Screen name="关于" component={AboutApp} options={{headerTitleAlign:'center'}}/>
        <Stack.Screen name="报告" component={Report} options={{headerShadowVisible:'false'}}/>
        
        <Stack.Screen name="测试" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};
export default App;
