import { CREATE_TASK, TOGGLE_TASK_STATUS, REMOVE_TASK, ADD_TASK_TO_DATE } from '../../constants/Types'
import { sortArrayAccordingToTime, sortArrayAccordingToDate } from '../../helpers/listHelpers';

const initialState = {
    TaskList: new Array(),
};

const TaskListReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TASK:
            return {
                ...state,
                TaskList: sortArrayAccordingToDate(state.TaskList.concat(action.payload)),
            };
        case ADD_TASK_TO_DATE:
            return {
                ...state,
                TaskList: state.TaskList.map((item, index) => {
                    return item.date === action.date ? {
                        date: item.date,
                        data: sortArrayAccordingToTime(item.data.concat(action.payload))
                    } : item
                })
            }
        case TOGGLE_TASK_STATUS:
            return {
                ...state,
                TaskList: state.TaskList.map((task, index) => {
                    return task.taskID === action.payload ? {
                        ...task,
                        completed: !task.completed
                    } : task
                })
            }
        case REMOVE_TASK:
            return {
                ...state,
                TaskList: state.TaskList.filter((item) => item.taskID !== action.payload)
            }
        default:
            return state;
    }
};

export default TaskListReducer;
