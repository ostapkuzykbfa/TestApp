import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { CartItem, ListItemSeparator } from '../ui'
import { RootState, Dispatch } from '../store'
import { useSelector, useDispatch } from 'react-redux'
import { numberFormat } from '../core'

export const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  
  const dispatch = useDispatch<Dispatch>()
  
  const increment = (item: any) =>dispatch.cart.addToCart(item.product)
  const decrement = (item: any) => dispatch.cart.decrementItemFromCart(item)

  const renderItem = ({ item }: any) => {
    return <CartItem
      item={item}
      increment={() => increment(item)}
      decrement={() => decrement(item)}
    />
  };

  const totalPrice = cartItems.reduce((p, e) => { return p + e.count * e.product.price }, 0)

  return (
    <View style={styles.container}>
      {cartItems.length == 0
        ? (<View style={[styles.container, styles.activityIndicatorContainer]}>
          <Text>Your cart is empty</Text>
        </View>)
        :
        (<>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            horizontal={false}
            directionalLockEnabled={true}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={ListItemSeparator}
          />
          <View style={styles.totalPriceContainer}>
            <Text style={styles.totalPriceText}>TotalPrice: {numberFormat(totalPrice)}</Text>
          </View>
        </>)
      }
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
  totalPriceContainer: {
    padding: 10,
    backgroundColor: "white"
  },
  totalPriceText: {
    fontWeight: "600"
  }
});
