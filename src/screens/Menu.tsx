import React from 'react';
import { FlatList, ActivityIndicator, View, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuItem } from '../ui';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { RootState, Dispatch } from '../store';

export const Menu = ({navigation}: {navigation: any}) => {
  const isLoading = useSelector((state: RootState) => state.loading.models.menu)
  const data = useSelector((state: RootState) => state.menu.items)

  const dispatch = useDispatch<Dispatch>()
  
  useEffect(() => {
		dispatch.menu.getPlayers()
	}, [])
  
  const renderItem = (item: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('SubMenu', { menuItem: item.item.name }) }>
        <MenuItem item={item.item} key={item.item.id} />
      </TouchableOpacity>
    )
  };

  const ItemSeparatorComponent = () => <View style={{ height: 10 }} />;

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={[styles.container, styles.activityIndicatorContainer]}>
          <ActivityIndicator color="#000" size="large" />
        </View>
      ) : (
        <FlatList
          style={{ backgroundColor: "white" }}
          data={data}
          renderItem={renderItem}
          refreshing={isLoading}
          directionalLockEnabled={true}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={ItemSeparatorComponent}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityIndicatorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});