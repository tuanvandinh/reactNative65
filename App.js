import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/es/integration/react';
import store from './src/configureStore';
import AppNavigator from './src/navigators/AppNavigator';
import {ReduxNetworkProvider} from 'react-native-offline';

console.disableYellowBox = true;

export default class ReduxWrapper extends Component {
  render() {
    const per = persistStore(store);

    return (
      <Provider store={store}>
        <PersistGate persistor={per}>
          <ReduxNetworkProvider>
            <AppNavigator />
          </ReduxNetworkProvider>
        </PersistGate>
      </Provider>
    );
  }
}
