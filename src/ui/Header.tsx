import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Header = () => {
  const navigation = useNavigation();

  const handleCartPress = () => {
    navigation.navigate('Cart');
  };

  const handleLogoPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
       <TouchableOpacity onPress={handleLogoPress}>
        <Text>LOGO ICON HERE</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCartPress}>
        <Text>CART ICON HERE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '100%',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})