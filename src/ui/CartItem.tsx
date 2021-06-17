import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import { CartItemType } from '@types';
import { numberFormat } from '../core'

const WIDTH = Dimensions.get('screen').width;

export const CartItem = ({ 
  item, 
  increment, 
  decrement }: {
    item: CartItemType, 
    increment: () => void, 
    decrement: () => void
  }) => {
  const [imageLoadFailed, setImageLoadFailed] = useState(false)

  const { img, name, price } = item.product
  const count = item.count

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "stretch" }}>
      <Image
        source={
          !imageLoadFailed
            ? { uri: img }
            : require('../assets/icons/ImageError.png')
        }
        style={styles.image}
        resizeMode="contain"
        onError={() => setImageLoadFailed(true)}
      />
      <View style={{ justifyContent: "space-evenly", flex: 1 }}>
        <Text style={[styles.text, styles.nameText]}>{name}</Text>
        <Text style={styles.text}>{numberFormat(price)}</Text>
      </View>

      <View style={{ flexDirection: "row"}}>
        <View style={{ justifyContent: "space-evenly", alignItems: 'center', paddingHorizontal: 4 }}>
          <Text style={styles.text}>Qty:</Text>
          <Text style={styles.text}>{count}</Text>
        </View>
        <View style={styles.changeQuantityButtonsContainer}>
          <TouchableOpacity onPress={increment}>
            <Image
              source={require('../assets/icons/ic_increment.png')}
              style={styles.changeQuantityButton} />
          </TouchableOpacity>
          <TouchableOpacity onPress={decrement}>
            <Image source={require('../assets/icons/ic_decrement.png')}
              style={styles.changeQuantityButton} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: { 
    height: 100,
     width: 100 
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
  },
  nameText: {
    maxWidth: WIDTH * 0.6,
  },
  changeQuantityButtonsContainer: {
    justifyContent: "space-around",
    width: 44,
  },
  changeQuantityButton: {
    height: 44,
    width: 44
  }
});
