import { createStore, combineReducers } from "redux";
// import { persistStore, persistReducer } from "redux-persist";

// defaults to localStorage AsyncStorage for react-native
// import storage from "redux-persist/lib/storage"; 

import UserReducer  from './../reducers/'

const rootReducer = combineReducers({
  Users: UserReducer,
});

const configureStore = () => {
  let store = createStore(rootReducer);
  return { store };
};

export default configureStore;