import { createStore, combineReducers } from "redux";
// import { persistStore, persistReducer } from "redux-persist";

// defaults to localStorage AsyncStorage for react-native
// import storage from "redux-persist/lib/storage"; 

import CreateTaskReducer  from './../reducers/CreateTaskReducer'

const rootReducer = combineReducers({
  CreateTask: CreateTaskReducer,
});

const configureStore = () => {
  let store = createStore(rootReducer);
  return { store };
};

export default configureStore;