import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer as RNNavigationContainer } from '@react-navigation/native';
import { useColorScheme, StatusBar, SafeAreaView, Button, Text, TouchableOpacity, Image, View, StyleSheet } from 'react-native';
import { Home, Cart, Menu, SubMenu } from '../screens';
import { RootState } from '../store'
import { useSelector } from 'react-redux'

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = ({ navigation }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items)

  return (
    <MainStack.Navigator
      headerMode="float"
      screenOptions={{
        cardOverlayEnabled: false,
        gestureEnabled: false,
      }}>
      <MainStack.Screen name="Welcome!"
        component={Home}
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Image
                style={{ height: 22, width: 22, marginRight: 16 }}
                source={require('../assets/icons/ic_cart.png')} />
              {cartItems.length > 0 &&
                <View style={{ backgroundColor: "red", width: 8, height: 8, borderRadius: 4, position: "absolute", left: 7, top: -8 }} />}
            </TouchableOpacity>
          ),
        }} />
    </MainStack.Navigator>
  );
}

const HomeStackScreen = () => {
  return (<RootStack.Navigator mode="modal">
    <RootStack.Screen
      name="Main"
      component={MainStackScreen}
      options={{ headerShown: false }}
    />
    <RootStack.Screen name="Cart"
      component={Cart}
      options={{
        headerTitle: () => <Text>Your Cart</Text>,
        headerBackTitle: "Close",
      }}
    />
  </RootStack.Navigator>)
}

const MenuStackScreen = () => {
  return (
    <MainStack.Navigator
      headerMode="float"
      screenOptions={{
        cardOverlayEnabled: false,
        gestureEnabled: false,
      }}>
      <MainStack.Screen name="Menu" component={Menu} />
      <MainStack.Screen name="SubMenu" component={SubMenu} />
    </MainStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export const Root = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color, size }) => <Image
            source={require('../assets/icons/ic_skirt.png')}
            style={{
              height: size, width: size, tintColor: color
            }}
          />
        }} component={HomeStackScreen} />
      <Tab.Screen
        name="Menu"
        options={{
          tabBarIcon: ({ color, size }) => <Image
            source={require('../assets/icons/ic_bottomMenu.png')}
            style={{
              height: size, width: size, tintColor: color
            }}
          />
        }}
        component={MenuStackScreen} />
    </Tab.Navigator>
  );
};

export const RootNavigator = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RNNavigationContainer>
        <Root />
      </RNNavigationContainer>
    </SafeAreaView>
  );
};