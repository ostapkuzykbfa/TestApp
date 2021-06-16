import { createModel } from '@rematch/core'
import type { RootModel } from '.'
import { CartItemType, ProductItemType } from '@types';

type CartState = {
  items: CartItemType[]
}

export const cart = createModel<RootModel>()({
  state: {
    items: [],
  } as CartState,
  reducers: {
    addToCart(state: CartState, product: ProductItemType) {
      var mutating = false
      const existingProducts = state.items.map((e) => {
        if (e.product.id == product.id) {
          mutating = true
          return { ...e, count: e.count + 1 }
        }

        return e
      })

      return mutating ? { items: existingProducts } : { items: [...state.items, { count: 1, product: product }] }
    },
    decrementItemFromCart(state: CartState, item: CartItemType) {
      const filteredProducts = state.items.map((e) => {
        if (e.product.id == item.product.id) {
          return { ...e, count: e.count - 1 }
        }

        return e
      }).filter(e => e.count > 0 )

      return { items: filteredProducts }
    },
    removeFromCart(state: CartState, item: CartItemType) {
      return { items: state.items.filter((e) => e.product.id !== item.product.id) }
    },
  },
  effects: (dispatch) => ({
    async getTotalPrice(payload: any, state): Promise<number> {
      return state.cart.items.reduce((p, e) => { return p + e.count * e.product.price }, 0)
    }
  })
})