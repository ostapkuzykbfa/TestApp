import { createModel } from '@rematch/core'
import type { RootModel } from '.'
import { MenuItemType } from '@types';
import { client } from '../api/client';

type MenuState = {
  items: MenuItemType[]
}

export const menu = createModel<RootModel>()({
  state: {
    items: []
  } as MenuState,
  reducers: {
    UPDATE_MENU: (state: MenuState, menu: MenuItemType[]) => {
      return {
        ...state,
        items: menu
      }
    },
  },
  effects: (dispatch: any) => {
    const { menu } = dispatch
    return {
      async getPlayers(): Promise<any> {
        const { data }: { data: MenuItemType[] } = await client.get('/menu')
        menu.UPDATE_MENU(data)
      },
    };
  },
})