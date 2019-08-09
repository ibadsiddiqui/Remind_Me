import { SET_PROFILE_IMAGE, SET_USERNAME } from '../../constants/Types';
import User from './../../model/User.model';

const UserReducer = (state = User, action) => {
    switch (action.type) {
        case SET_PROFILE_IMAGE:
            return {
                ...state,
                profileImage: action.payload,
            };

        case SET_USERNAME:
            return {
                ...state,
                username: action.payload,
            }
        default:
            return state;
    }
};

export default UserReducer;