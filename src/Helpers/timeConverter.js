export function hour24Converter(hour, minute) {
    if (hour > 9) {
        if (minute > 9) time = "0" + (hour % 12).toString() + ":" + minute.toString() + " P.M";
        else time = "0" + (hour % 12).toString() + ":0" + minute.toString() + " P.M";
    } else if (hour < 10) {
        if (minute > 9) time = "0" + hour.toString() + ":" + minute.toString() + " A.M";
        else time = "0" + hour.toString() + ":0" + minute.toString() + " A.M";
    }
    return time; // return adjusted time or original string
}

export function tConvert(time) {
    // Check correct time format and split into components
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
    if (time.length > 1) { // If time format correct
        time = time.slice(1);  // Remove full string match value
        time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
        if ((time[0] % 12 || 12) > 9)
            time[0] = +time[0] % 12 || 12; // Adjust hours
        else time[0] = "0" + time[0] % 12 || 12;
    }
    return time.join(''); // return adjusted time or original string
}
