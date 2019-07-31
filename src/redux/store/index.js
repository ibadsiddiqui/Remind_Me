import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";

// import storage from "redux-persist/lib/storage"; 

import CreateTaskReducer from './../reducers/CreateTaskReducer'
import TaskListReducer from "../reducers/TaskListRedcuer";
import { persistConfigForTaskList } from "../../constants/persistConfig";

const rootReducer = combineReducers({
  CreateTask: persistReducer(persistConfigForTaskList, CreateTaskReducer),
  TaskList: TaskListReducer,
});

const configureStore = () => {
  let store = createStore(rootReducer);
  return { store };
};

export default configureStore;