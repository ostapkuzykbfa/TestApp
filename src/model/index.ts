import { Models } from '@rematch/core'
import { cart } from './cart'
import { menu } from './menu'

export interface RootModel extends Models<RootModel> {
	cart: typeof cart,
	menu: typeof menu
}

export const models: RootModel = { cart, menu }