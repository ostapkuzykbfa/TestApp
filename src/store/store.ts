import { init, RematchDispatch, RematchRootState } from '@rematch/core'
import { models, RootModel } from '../model'
import persist from '@rematch/persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import loading, { ExtraModelsFromLoading } from '@rematch/loading'
import select from '@rematch/select'

type FullModel = ExtraModelsFromLoading<RootModel>

export const store = init<RootModel, FullModel>({
    models,
    plugins: [
        loading(),
        select(),
        persist({
            key: 'persist-storage',
            storage: AsyncStorage,
        })
    ]
})

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel, FullModel>