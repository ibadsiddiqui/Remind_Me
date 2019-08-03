import { CREATE_TASK, SET_DAYS, TOGGLE_TASK_STATUS } from '../../constants/Types'

const initialState = {
    TaskList: new Array(),
    ListOfDaysSelected: new Set([])
};

const TaskListReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TASK:
            return {
                ...state,
                TaskList: state.TaskList.concat(action.payload),
            };
        case SET_DAYS: {
            return {
                ...state,
                ListOfDaysSelected: new Set([...state.ListOfDaysSelected, action.payload])
            }
        }
        case TOGGLE_TASK_STATUS:
            return {
                ...state,
                TaskList: state.TaskList.map((task, index) => {
                    return task.taskID === action.payload ? {
                        ...task,
                        completed: !task.completed
                    }: task
                })
            }
        default:
            return state;
    }
};

export default TaskListReducer;
