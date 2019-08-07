import { CREATE_TASK, TOGGLE_TASK_STATUS, REMOVE_TASK, ADD_TASK_TO_DATE } from '../../constants/Types'
import { sortArrayAccordingToTime, sortArrayAccordingToDate, mapFilteredListUsingTaskID } from '../../helpers/listHelpers';

const initialState = {
    TaskList: [
        // {
        //     "data": [
        //         {
        //             "taskDate": "Thu Aug  8 00:41:17 2019",
        //             "taskDescription": "askldnasld",
        //             "taskEndTime": "",
        //             "taskFlag": "Work",
        //             "taskID": "31d8ce6b-a04f-452f-93a7-ceaa0c01190c",
        //             "taskStartTime": "00:00 A.M",
        //         },
        //     ],
        //     "date": "08/08/19",
        // },
        // {
        //     "data": [
        //         {
        //             "taskDate": "Fri Aug  9 12:42:00 2019",
        //             "taskDescription": "asndkajsnd",
        //             "taskEndTime": "",
        //             "taskFlag": "Meeting",
        //             "taskID": "6c6f6b7a-f9d2-4256-850a-0c9452812abb",
        //             "taskStartTime": "00:42 A.M",
        //         },
        //     ],
        //     "date": "08/09/19",
        // },
    ]
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
                    return task.date === action.payload.taskDate ? {
                        date: task.date,
                        data: task.data.map((item, _index) => item.taskID === action.payload.taskID ? {
                            ...item,
                            completed: !item.completed
                        } : item),
                    } : task
                })
            }
        case REMOVE_TASK:
            return {
                ...state,
                TaskList: state.TaskList.length !== 1 ?
                    mapFilteredListUsingTaskID(state.TaskList, action)
                    : state.TaskList[0].data.length === 1 ?
                        [] : mapFilteredListUsingTaskID(state.TaskList, action)
            }
        default:
            return state;
    }
};

export default TaskListReducer;
