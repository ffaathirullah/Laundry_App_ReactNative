import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Akun, Home, Pesanan, Splash} from '../pages';
import {BottomNavigator} from '../component';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => (
  <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Pesanan" component={Pesanan} />
    <Tab.Screen name="Akun" component={Akun} />
  </Tab.Navigator>
);

const Router = () => (
  <Stack.Navigator initialRouteName="Splash">
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
