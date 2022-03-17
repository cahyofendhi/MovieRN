/* eslint-disable require-jsdoc */
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux';
import AppContainer from './src/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
