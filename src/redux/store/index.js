import { combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import TaskListReducer from "../reducers/TaskListRedcuer";
import UserReducer from '../reducers/UserReducer';
import CreateTaskReducer from './../reducers/CreateTaskReducer';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  CreateTask: CreateTaskReducer,
  TaskList: TaskListReducer,
  User: UserReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}

export default configureStore;