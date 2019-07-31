import { SET_TASK_DESCRIPTION, SET_TASK_DATE, SET_TASK_FLAG, SET_TASK_START_TIME, SET_TASK_END_TIME, SET_TASK_ID, RESET_CREATE_TASK_DETAILS, } from "../../constants/Types";

export const setTaskID = (ID) => {
    return {
        type: SET_TASK_ID,
        payload: ID
    }
}

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

export const setTaskStartTime = (time) => {
    return {
        type: SET_TASK_START_TIME,
        payload: time
    }
}

export const setTaskEndTime = (time) => {
    return {
        type: SET_TASK_END_TIME,
        payload: time
    }
}

export const resetTaskDetails = () => {
    return {
        type: RESET_CREATE_TASK_DETAILS
    }
}