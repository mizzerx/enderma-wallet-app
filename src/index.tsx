import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import App from './app/App';
import store from './app/store';
import colors from './common/colors';
import './common/languages/i18n';

const Main = () => {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={colors.background}
      />
      <App />
    </Provider>
  );
};

export default Main;
