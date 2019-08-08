import { SET_PROFILE_IMAGE } from '../../constants/Types';
import User from './../../model/User.model';


const initialState = User;

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_IMAGE:
            return {
                ...state,
                profileImage: action.payload,
            };
        default:
            return state;
    }
};

export default UserReducer;
