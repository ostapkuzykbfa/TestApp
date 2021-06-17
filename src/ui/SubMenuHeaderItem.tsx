import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export const SubMenuHeaderItem = ({ item }: { item: string }) => {
  return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={[styles.text]}>{item}</Text>
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
  innerContainer: {
    justifyContent: "center",
    paddingLeft: 16,
    paddingVertical: 10
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
