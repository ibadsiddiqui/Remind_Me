import { SET_PROFILE_IMAGE, SET_USERNAME } from "../../constants/Types";

export const setUsername = (name) => {
    return {
        type: SET_USERNAME,
        payload: name
    }
}
export const setProfileImage = (image) => {
    return {
        type: SET_PROFILE_IMAGE,
        payload: image
    }
}