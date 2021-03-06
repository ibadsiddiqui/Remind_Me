import { RESET_CREATE_TASK_DETAILS, SET_TASK_DATE, SET_TASK_DESCRIPTION, SET_TASK_END_TIME, SET_TASK_FLAG, SET_TASK_ID, SET_TASK_START_TIME } from '../../constants/Types';
import { getRandomID } from '../../helpers/stringHelper';
import { TaskCreationObject } from '../../model/CreateTask.model';

const initialState = {
  ...TaskCreationObject
};

const CreateTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASK_ID:
      return {
        ...state,
        taskID: action.payload
      }
    case SET_TASK_DESCRIPTION:
      return {
        ...state,
        taskDescription: action.payload
      };
    case SET_TASK_FLAG:
      return {
        ...state,
        taskFlag: action.payload
      }
    case SET_TASK_DATE:
      return {
        ...state,
        taskDate: action.payload
      }
    case SET_TASK_START_TIME:
      return {
        ...state,
        taskStartTime: action.payload
      }
    case SET_TASK_END_TIME:
      return {
        ...state,
        taskEndTime: action.payload
      }
    case RESET_CREATE_TASK_DETAILS:
      return {
        ...state,
        taskID: getRandomID(),
        taskDescription: "",
        taskFlag: "",
        taskDate: new Date().toLocaleString(),
        taskStartTime: "00:00 AM",
        taskEndTime: "",
        completed: false,
      }
    default:
      return state;
  }
};

export default CreateTaskReducer;
