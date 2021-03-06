import { CREATE_TASK, TOGGLE_TASK_STATUS, REMOVE_TASK, ADD_TASK_TO_DATE } from "../../constants/Types";

export const createTask = (task) => {
    return {
        type: CREATE_TASK,
        payload: task
    }
}

export const addTaskToDate = (date, task) => {
    return {
        type: ADD_TASK_TO_DATE,
        payload: task,
        date
    }
}

export const toggleTaskStatus = (taskDate, taskID) => {
    return {
        type: TOGGLE_TASK_STATUS,
        payload: {
            taskDate,
            taskID
        }
    }
}

export const deleteTask = (taskDate, taskID) => {
    return {
        type: REMOVE_TASK,
        payload: {
            taskDate,
            taskID
        }
    }
}