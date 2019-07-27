import { DatePickerAndroid, TimePickerAndroid } from 'react-native'
import moment from 'moment';

export async function toggleDatePicker(props) {
    const { setTaskDate } = props;
    try {
        const { action, year, month, day } = await DatePickerAndroid.open({
            date: new Date(),
        });
        if (action !== DatePickerAndroid.dismissedAction) { // Selected year, month (0-11), day
            if (month + 1 < 10)
                setTaskDate(moment(moment(`${year}0${month + 1}${day}`, "YYYYMMDD")).calendar())
            else
                setTaskDate(moment(moment(`${year}${month + 1}${day}`, "YYYYMMDD")).calendar())
        }
        if (month + 1 < 10)
            setTaskDate(moment(moment(`${year}0${month + 1}${day}`, "YYYYMMDD")).calendar())
        else
            setTaskDate(moment(moment(`${year}${month + 1}${day}`, "YYYYMMDD")).calendar())

    } catch ({ code, message }) {
        console.warn('Cannot open date picker', message);
    }
};

export async function toggleTimePicker(type, props) {
    switch (type) {
        case "start":
            try {
                const { action, hour, minute } = await TimePickerAndroid.open({
                    hour: 14,
                    minute: 0,
                    is24Hour: false, // Will display '2 PM'
                });
                if (action !== TimePickerAndroid.dismissedAction) {
                    // Selected hour (0-23), minute (0-59)
                    console.log(typeof hour, hour, typeof minute, minute);

                }
            } catch ({ code, message }) {
                console.warn('Cannot open time picker', message);
            }

            break;
        case "end":
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

            break;

        default:
            break;
    }
}