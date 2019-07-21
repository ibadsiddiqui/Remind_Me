import { SET_TASK_DESCRIPTION, CREATE_TASK, SET_TASK_DATE, SET_TASK_TIME, SET_TASK_FLAG } from '../../constants/Types'
import { TaskCreationObject } from '../../model/CreateTask.model';

const initialState = {
  ...TaskCreationObject
};

const CreateTaskReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case SET_TASK_TIME:
      return {
        ...state,
        taskTime: action.payload
      }
    case CREATE_TASK:
      return state;
    default:
      return state;
  }
};

export default CreateTaskReducer;
