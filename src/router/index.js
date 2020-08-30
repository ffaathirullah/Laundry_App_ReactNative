import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Akun from '../pages/Akun';
import Home from '../pages/Home';
import Pesanan from '../pages/Pesanan';
import Splash from '../pages/Splash';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Pesanan" component={Pesanan} />
    <Tab.Screen name="Akun" component={Akun} />
  </Tab.Navigator>
);

const Router = () => (
  <Stack.Navigator initialRouteName="MainApp">
    <Stack.Screen
      name="MainApp"
      component={MainApp}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Splash"
      component={Splash}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default Router;
