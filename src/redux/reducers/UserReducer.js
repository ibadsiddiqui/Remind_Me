import {SET_TASK_DESCRIPTION} from './../../contants/Types'
const initialState = {

};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload
      };

    default:
      return state;
  }
};

export default UserReducer;
