import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export const SubMenuItem = ({ item }: { item: string }) => {
  return (
    <View style={styles.container}>
      <View style={{
        justifyContent: "center",
        paddingLeft: 16
      }}>
        <Text style={styles.text}>{item}</Text>
      </View>
      <Image style={{ height: 22, width: 22, marginRight: 16 }} source={require('../assets/icons/ic_chevron.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    backgroundColor: "#f2f2f2",
    paddingVertical: 10
  },
  text: {
    fontSize: 18,
  },
});
