import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';

import { tron } from '../config/ReactotronConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { rootReducer } from '../reducers';

const persistedReducer = persistReducer(
  {
    storage: AsyncStorage,
    key: 'root',
  },
  rootReducer
);

const composedEnhancer = compose(
  applyMiddleware(thunk),
  tron.createEnhancer!(),
  offline(offlineConfig)
);

const store = createStore(persistedReducer, composedEnhancer as any);
const persistor = persistStore(store);

export { store, persistor };
