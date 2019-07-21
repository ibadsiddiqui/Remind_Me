import { SET_TASK_DESCRIPTION, CREATE_TASK } from './../../constants/Types'

const initialState = {
  task: ""
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASK_DESCRIPTION:
      return {
        ...state,
        task: action.payload
      };
    case CREATE_TASK:
      return state;
    default:
      return state;
  }
};

export default UserReducer;
