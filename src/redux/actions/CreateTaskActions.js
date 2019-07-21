import { SET_TASK_DESCRIPTION, SET_TASK_DATE, SET_TASK_FLAG, } from "../../constants/Types";

export const setTaskDescription = (desc) => {
    return {
        type: SET_TASK_DESCRIPTION,
        payload: desc
    }
}

export const setTaskFlag = (flag) => {
    return {
        type: SET_TASK_FLAG,
        payload: flag
    }
}

export const setTaskDate = (date) => {
    return {
        type: SET_TASK_DATE,
        payload: date
    }
}

export const setTaskTime = (time) => {
    return {
        type: SET_TASK_DATE,
        payload: time
    }
}