import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {createLogger} from 'redux-logger';
import {
  createNetworkMiddleware,
  offlineActionCreators,
  checkInternetConnection,
} from 'react-native-offline';
import {persistStore} from 'redux-persist';

const networkMiddleware = createNetworkMiddleware({
  queueReleaseThrottle: 200,
});
const loggerMiddleware = createLogger({predicate: () => __DEV__});

const middleware = [
  thunk,
  networkMiddleware,
  loggerMiddleware,
  // more middleware
];

const configureStore = () => {
  let store = null;
  store = compose(applyMiddleware(...middleware))(createStore)(reducers);
  const {connectionChange} = offlineActionCreators;
  // https://github.com/rt2zz/redux-persist#persiststorestore-config-callback
  persistStore(store, null, () => {
    // After rehydration completes, we detect initial connection
    checkInternetConnection().then(isConnected => {
      //  console.log(isConnected);
      store.dispatch(connectionChange(isConnected));
      callback(); // Notify our root component we are good to go, so that we can render our app
    });
  });

  return store;
};

export default configureStore();
