import React from 'react';
import { RootNavigator } from './navigation'
import APIProvider from './api/APIProvider';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { store } from './store'
import { getPersistor } from '@rematch/persist'

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={getPersistor()}>
        <APIProvider>
          <RootNavigator />
        </APIProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;