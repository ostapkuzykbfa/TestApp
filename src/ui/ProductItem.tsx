import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ProductItemType} from '@types';

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

const Colours = {
  Red: 'red',
  Black: 'black',
  Stone: '#38464B',
};

export const ProductItem = ({
  product,
  addToCart
}: {
  product: ProductItemType,
  addToCart: (product: ProductItemType) => void
}) => {
  const [imageLoadFailed, setImageLoadFailed] = useState(false);

  const {img, name, price, colour} = product;

  return (
    <View style={styles.container}>
      {imageLoadFailed ? (
        <View style={styles.crashedImageContainer}>
          <Image
            source={require('../assets/icons/ImageError.png')}
            style={styles.crashedImage}
            resizeMode="contain"
            onError={() => setImageLoadFailed(true)}
          />
        </View>
      ) : (
        <Image
          source={{uri: img}}
          style={styles.image}
          resizeMode="contain"
          onError={() => setImageLoadFailed(true)}
        />
      )}

      <View style={styles.bottomContainer}>
        <View style={styles.infoContainer}>
          <Text style={[styles.text, styles.nameText]}>{name}</Text>
          <Text style={styles.text}>{price} $</Text>
        </View>

        <View style={styles.coloursContainer}>
          <View style={[styles.colour, {backgroundColor: Colours[colour]}]} />

          <TouchableOpacity style={styles.buttonContainer} onPress={()=> addToCart(product)}>
            <Image source={require('../assets/icons/ic_addToCart.png')} style={{height: 22, width: 22}}/>
          </TouchableOpacity>
        </View>

        <LinearGradient
          colors={['rgba(255,255,255,0)', 'rgba(0,0,0,1)']}
          style={styles.gradient}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: '100%',
    width: WIDTH,
  },
  image: {
    height: HEIGHT * 0.5,
    width: WIDTH,
  },
  crashedImageContainer: {
    height: HEIGHT * 0.5,
    width: WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  crashedImage: {
    height: 140,
    width: 140,
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
    color: 'white',
    fontSize: 22,
    fontWeight: '500',
  },
  nameText: {
    maxWidth: WIDTH / 1.2,
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
    backgroundColor: 'white',
    borderRadius: 21,
    padding: 10,
    marginBottom: 8,
    marginRight: 8,
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
});