import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export const SubMenuHeaderItem = ({ item }: { item: string }) => {
  return (
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
        backgroundColor: "#f2f2f2"
      }}>
        <View style={{
          justifyContent: "center",
          paddingLeft: 16,
          paddingVertical: 10
        }}>
          <Text style={[styles.text]}>{item}</Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 135,
    justifyContent: 'flex-end',
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
});
