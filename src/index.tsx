import React from 'react';
import { RootNavigator } from './navigation'
import APIProvider from './api/APIProvider';
import { Provider } from 'react-redux'

import { store } from './store'

const App = () => {
  return (
    <Provider store={store}>
      <APIProvider>
        <RootNavigator />
      </APIProvider>
    </Provider>
  );
};

export default App;