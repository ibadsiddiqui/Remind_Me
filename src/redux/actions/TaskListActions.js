import { CREATE_TASK, SET_DAYS } from "../../constants/Types";

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