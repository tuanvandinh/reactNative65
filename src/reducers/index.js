import {persistCombineReducers} from 'redux-persist';

import {reducer as network} from 'react-native-offline';

import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['network'],
};

export default persistCombineReducers(persistConfig, {
  //  user: UserRedux,

  network: network,
});
