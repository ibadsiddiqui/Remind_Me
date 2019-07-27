import { CREATE_TASK } from '../../constants/Types'

const initialState = {
    TaskList: []
};

const TaskListReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TASK:
            return {
                ...state,
                ...state.TaskList.push(action.payload)
            };
        default:
            return state;
    }
};

export default TaskListReducer;
