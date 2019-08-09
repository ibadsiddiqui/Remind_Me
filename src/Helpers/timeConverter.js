import moment from "moment";

export function hour24Converter(hour, minute) {
    if (hour > 9) {
        if (hour >= 10 && hour < 12) {
            if (minute > 9) return (hour % 12).toString() + ":" + minute.toString() + " AM";
            else return (hour % 12).toString() + ":0" + minute.toString() + " AM";
        }
        else if (hour <= 23 && hour > 21) {
            if (minute > 9) return (hour % 12).toString() + ":" + minute.toString() + " PM";
            else return (hour % 12).toString() + ":0" + minute.toString() + " PM";
        } else {
            if (minute > 9) return "0" + (hour % 12).toString() + ":" + minute.toString() + " PM";
            else return "0" + (hour % 12).toString() + ":0" + minute.toString() + " PM";
        }
    } else if (hour < 10) {
        if (minute > 9) return "0" + hour.toString() + ":" + minute.toString() + " AM";
        else return "0" + hour.toString() + ":0" + minute.toString() + " AM";
    }
}

export function replaceTaskTimeWithStartTime(props) {
    const { setTaskDate, taskDate, taskStartTime } = props;
    let starttimeHours = taskStartTime.slice(0, 2)
    let starttimeMinutes = getSlicedMinutesFromFalse24Hours(taskStartTime);
    let newDate;
    if (taskStartTime.includes("AM.")) newDate = getLocaleString(setMinutesForDate(setHoursForDate(taskDate, starttimeHours), starttimeMinutes));
    else newDate = getLocaleString(setMinutesForDate(setHoursForDate(taskDate, starttimeHours, 12), starttimeMinutes));
    setTaskDate(newDate);
}

export function getHours(date) {
    return new Date(date).getHours()
}

export function getMinute(date) {
    return new Date(date).getMinutes();
}

function setHoursForDate(date, hours, Hours24 = 0) {
    return new Date(date).setHours(parseInt(hours) + Hours24);
}

function setMinutesForDate(date, minutes) {
    return new Date(date).setMinutes(minutes)
}

function getSlicedMinutesFromFalse24Hours(time) {
    return parseInt(time.slice(time.indexOf(":") + 1, time.indexOf(":") + 3))
}

function getLocaleString(date) {
    return new Date(date).toLocaleString()
}

export function getLocaleDateString(date) {
    if (typeof date !== "undefined")
        return new Date(date).toLocaleDateString()
    return new Date().toLocaleDateString()
}

export function slicingMomentDateUsingAt(date) {
    if (moment(date).calendar().includes(" at ")) {
        return moment(date).calendar().slice(0, moment(date).calendar().indexOf(" at "))
    } else return moment(date).calendar()
}