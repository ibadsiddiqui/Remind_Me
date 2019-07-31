// defaults to localStorage AsyncStorage for react-native
import storage from "redux-persist/lib/storage";

export const persistConfigForTaskList = {
    key: 'TaskList',
    storage,
}
