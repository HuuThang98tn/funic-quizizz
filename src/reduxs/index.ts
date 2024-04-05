import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/index';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const middleware = [thunk];
const initialState = {};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
    blacklist: [], //! không lưu 
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);
export default store;


