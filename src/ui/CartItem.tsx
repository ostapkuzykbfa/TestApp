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

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

const Colours = {
  Red: 'red',
  Black: 'black',
  Stone: '#38464B',
};

export const CartItem = ({ 
  item, 
  increment, 
  decrement }: {
    item: CartItemType, 
    increment: () => void, 
    decrement: () => void
  }) => {
  const [imageLoadFailed, setImageLoadFailed] = useState(false)

  const { img, name, price, colour } = item.product
  const count = item.count

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "stretch" }}>
      <Image
        source={
          !imageLoadFailed
            ? { uri: img }
            : require('../assets/icons/ImageError.png')
        }
        style={{ height: 100, width: 100 }}
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
  container: {
    flex: 1,
    maxHeight: 300,
    justifyContent: 'flex-end',
    width: WIDTH,
  },
  image: {
    height: HEIGHT - 200,
    width: WIDTH,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
  },
  bottomContainer: {
    backgroundColor: 'black',
    padding: 4,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: WIDTH,
    // padding: 4,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
  },
  nameText: {
    maxWidth: WIDTH * 0.6,
  },
  coloursContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  colour: {
    height: 20,
    width: 20,
    borderRadius: 20,
    marginLeft: 16,
    borderColor: 'white',
    borderWidth: 2,
  },
  buttonContainer: {
    // position: 'absolute',
    // bottom: 8,
    // right: 8,
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  buttonText: {
    color: 'black',
    fontSize: 22,
    fontWeight: '500',
  },
  gradient: {
    height: 140,
    width: WIDTH,
    position: 'absolute',
    top: -140,
    right: 0,
    zIndex: 200,
  },
  changeQuantityButtonsContainer: {
    justifyContent: "space-around",
    width: 44,
    // backgroundColor: "yellow"
  },
  changeQuantityButton: {
    height: 44,
    width: 44
  }
});
