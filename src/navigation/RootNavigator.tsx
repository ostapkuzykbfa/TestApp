import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer as RNNavigationContainer } from '@react-navigation/native';
import { useColorScheme, StatusBar, SafeAreaView, Button, Text, TouchableOpacity, Image, View } from 'react-native';
import { Home, Cart } from '../screens';
import { RootState } from '../store'
import { useSelector } from 'react-redux'

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = ({ navigation }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items)

  return (
    <MainStack.Navigator
      headerMode="float"
      initialRouteName="Home"
      screenOptions={{
        cardOverlayEnabled: false,
        gestureEnabled: false,
      }}>
      <MainStack.Screen name="Home"
        component={Home}
        options={{
          headerTitle: props => <Text>Welcome!</Text>,
          headerLeft: () => (
            <TouchableOpacity>
              <Image
                style={{ height: 22, width: 22, marginLeft: 16 }}
                source={require('../assets/icons/ic_menu.png')} />
            </TouchableOpacity>
          ),
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

export const Root = ({ navigation }) => {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="Cart"
        component={Cart}
        options={{
          headerTitle: props => <Text>Your Cart</Text>,
          headerBackTitle: "Close",
        }}
      />
    </RootStack.Navigator>
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
