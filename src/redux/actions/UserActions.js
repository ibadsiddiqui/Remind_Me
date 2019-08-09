import { SET_PROFILE_IMAGE } from "../../constants/Types";

export const setProfileImage = (image) => {
    return {
        type: SET_PROFILE_IMAGE,
        payload: image
    }
}