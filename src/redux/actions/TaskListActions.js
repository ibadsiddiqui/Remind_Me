import { CREATE_TASK, SET_DAYS, TOGGLE_TASK_STATUS } from "../../constants/Types";

export const createTask = (task) => {
    return {
        type: CREATE_TASK,
        payload: task
    }
}

export const AddTaskDays = (day) => {
    return {
        type: SET_DAYS,
        payload: day
    }
} 

export const toggleTaskStatus = (status) => {
    return {
        type:TOGGLE_TASK_STATUS,
        payload: status
    }
}