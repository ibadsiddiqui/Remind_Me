import { DatePickerAndroid, TimePickerAndroid } from 'react-native'

export async function toggleDatePicker() {
    try {
        const { action, year, month, day } = await DatePickerAndroid.open({
            date: new Date(),
        });
        if (action !== DatePickerAndroid.dismissedAction) {
            // Selected year, month (0-11), day
        }
    } catch ({ code, message }) {
        console.warn('Cannot open date picker', message);
    }
};

export async function toggleTimePicker() {
    try {
        const { action, hour, minute } = await TimePickerAndroid.open({
            hour: 14,
            minute: 0,
            is24Hour: false, // Will display '2 PM'
        });
        if (action !== TimePickerAndroid.dismissedAction) {
            // Selected hour (0-23), minute (0-59)
        }
    } catch ({ code, message }) {
        console.warn('Cannot open time picker', message);
    }
}