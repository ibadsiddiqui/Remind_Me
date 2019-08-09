import { Permissions } from 'expo';

export const getPermissionForCameraRollAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') return false;
    else return true;
}

export const getPermissionForCameraAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status !== 'granted') return false;
    else return true;
}