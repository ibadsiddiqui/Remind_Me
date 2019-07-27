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