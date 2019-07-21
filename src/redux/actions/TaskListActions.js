import { CREATE_TASK, SET_TASK_LIST } from "../../constants/Types";

export const createTask = (task) => {
    return {
        type: CREATE_TASK,
        payload: task
    }
}

export const setTaskList = (list) => {
    return {
        type: SET_TASK_LIST,
        payload: list
    }
}