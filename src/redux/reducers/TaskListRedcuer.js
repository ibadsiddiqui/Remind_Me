import { CREATE_TASK, SET_DAYS } from '../../constants/Types'

const initialState = {
    TaskList: [],
    ListOfDaysSelected: new Set([])
};

const TaskListReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TASK:
            return {
                ...state,
                TaskList: [...state.TaskList, action.payload],
            };
        case SET_DAYS: {
            return {
                ...state,
                ListOfDaysSelected: new Set([...state.ListOfDaysSelected, action.payload])
            }
        }
        default:
            return state;
    }
};

export default TaskListReducer;
