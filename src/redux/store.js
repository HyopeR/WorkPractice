import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {authReducer} from './reducers/authReducer';
import {userReducer} from './reducers/userReducer';
import {usersReducer} from './reducers/usersReducer';
import {themeReducer} from './reducers/themeReducer';
import {adminsReducer} from './reducers/adminsReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme', 'user'],
};

const combinedReducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  users: usersReducer,
  admins: adminsReducer,
  theme: themeReducer,
});
const persistedReducer = persistReducer(persistConfig, combinedReducers);

export default function (initialState = {}) {
  const store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(thunk),
  );

  let persistor = persistStore(store);

  return {store, persistor};
}
