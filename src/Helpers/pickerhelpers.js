import { ImagePicker } from 'expo';
import { DatePickerAndroid, TimePickerAndroid } from 'react-native';
import { getPermissionForCameraAsync, getPermissionForCameraRollAsync } from './permissionsHelper';
import { checkDateAndSlice } from './stringHelper';
import { hour24Converter } from './timeConverter';

export async function toggleDatePicker(props) {
    const { setTaskDate } = props;
    try {
        const { action, year, month, day } = await DatePickerAndroid.open({
            date: new Date(),
            minDate: new Date()
        });
        if (action !== DatePickerAndroid.dismissedAction) { // Selected year, month (0-11), day
            setTaskDate(checkDateAndSlice(year, month, day));
        }
    } catch ({ code, message }) {
        console.warn('Cannot open date picker', message);
    }
};

export async function toggleTimePicker(type, props) {
    const { setTaskStartTime } = props;
    switch (type) {
        case "start":
            try {
                const { action, hour, minute } = await TimePickerAndroid.open({
                    hour: new Date().getHours(),
                    minute: new Date().getMinutes(),
                    is24Hour: false, // Will display '2 PM'
                });
                if (action !== TimePickerAndroid.dismissedAction) {
                    // Selected hour (0-23), minute (0-59)
                    setTaskStartTime(hour24Converter(hour, minute));
                }
            } catch ({ code, message }) {
                console.warn('Cannot open time picker', message);
            }

            break;
        case "end":
            try {
                const { action, hour, minute } = await TimePickerAndroid.open({
                    hour: new Date().getHours(),
                    minute: new Date().getMinutes(),
                    is24Hour: false, // Will display '2 PM'
                });
                if (action !== TimePickerAndroid.dismissedAction) {
                    // Selected hour (0-23), minute (0-59)
                    setTaskStartTime(hour24Converter(hour, minute));
                }
            } catch ({ code, message }) {
                console.warn('Cannot open time picker', message);
            }
            break;
        default:
            break;
    }
}

export async function profileImagePicker(props) {
    const cameraRollPermission = getPermissionForCameraRollAsync();
    const cameraPermission = getPermissionForCameraAsync();
    const { setUserProfileImage } = props;
    if (cameraPermission && cameraRollPermission) {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            base64: true,
            aspect: [4, 3],
        });
        setUserProfileImage(result.uri)
    }
}