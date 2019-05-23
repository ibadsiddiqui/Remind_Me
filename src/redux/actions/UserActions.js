import { SET_TASK_DESCRIPTION, CREATE_TASK } from "../../constants/Types";

export const setTask = (task) => {
    return {
        type: SET_TASK_DESCRIPTION,
        payload: task 
    }
}