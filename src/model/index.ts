import { Models } from '@rematch/core'
import { cart } from './cart'

export interface RootModel extends Models<RootModel> {
	cart: typeof cart,
}

export const models: RootModel = { cart }