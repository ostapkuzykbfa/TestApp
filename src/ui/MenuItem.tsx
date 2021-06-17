import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import { MenuItemType } from '@types';

export const MenuItem = ({ item }: { item: MenuItemType }) => {
  const [imageLoadFailed, setImageLoadFailed] = useState(false)

  const { img, name } = item

  return (
    <View style={{ padding: 10 }}>
      <View style={styles.container}>
        <View style={{
          justifyContent: "center",
          paddingLeft: 16
        }}>
          <Text style={[styles.text]}>{name}</Text>
        </View>
        <Image
          source={
            !imageLoadFailed
              ? { uri: img }
              : require('../assets/icons/ImageError.png')
          }
          style={styles.image}
          resizeMode="cover"
          onError={() => setImageLoadFailed(true)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    backgroundColor: "#f2f2f2"
  },
  bottomContainer: {
    backgroundColor: 'black',
    padding: 4,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
  },
  image: { 
    height: 90, 
    width: 120 
  }
});
