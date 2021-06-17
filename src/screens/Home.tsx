import React from 'react';
import { useProducts } from '../api';
import { FlatList, ActivityIndicator, View, StyleSheet } from 'react-native';
import { ListItemSeparator, ProductItem } from '../ui';
import { ProductItemType } from '@types';
import { useDispatch } from 'react-redux';
import { RootState, Dispatch } from '../store'

export const Home = () => {
  const { data, isLoading, refetch } = useProducts();

  const dispatch = useDispatch<Dispatch>()

  const addToCart = (item: any) => dispatch.cart.addToCart(item.item)

  const renderItem = (item: any) => {
    return <ProductItem product={item.item} key={item.id} addToCart={() => addToCart(item)} />;
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={[styles.container, styles.activityIndicatorContainer]}>
          <ActivityIndicator color="#000" size="large" />
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          refreshing={isLoading}
          onRefresh={refetch}
          directionalLockEnabled={true}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={ListItemSeparator}
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
