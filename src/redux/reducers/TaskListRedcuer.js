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
                ...state.TaskList.push(action.payload)
            };
        case SET_DAYS: {
            return {
                ...state,
                ...state.ListOfDaysSelected.add(action.payload)
            }
        }
        default:
            return state;
    }
};

export default TaskListReducer;
