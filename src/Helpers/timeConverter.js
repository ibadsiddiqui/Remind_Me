import moment from "moment";

export function hour24Converter(hour, minute) {
    if (hour > 9) {
        if (hour >= 10 && hour < 12) {
            if (minute > 9) time = (hour % 12).toString() + ":" + minute.toString() + " A.M";
            else time = (hour % 12).toString() + ":0" + minute.toString() + " A.M";
        }
        else if (hour <= 23 && hour > 21) {
            if (minute > 9) time = (hour % 12).toString() + ":" + minute.toString() + " P.M";
            else time = (hour % 12).toString() + ":0" + minute.toString() + " P.M";
        } else {
            if (minute > 9) time = "0" + (hour % 12).toString() + ":" + minute.toString() + " P.M";
            else time = "0" + (hour % 12).toString() + ":0" + minute.toString() + " P.M";
        }
    } else if (hour < 10) {
        if (minute > 9) time = "0" + hour.toString() + ":" + minute.toString() + " A.M";
        else time = "0" + hour.toString() + ":0" + minute.toString() + " A.M";
    }
    return time; // return adjusted time or original string
}

export async function replaceTaskTimeWithStartTime(props) {
    const { setTaskDate, taskDate, taskStartTime } = props;
    let starttimeHours = taskStartTime.slice(0, 2)
    let starttimeMinutes = await getSlicedMinutesFromFalse24Hours(taskStartTime);
    let newDate;
    if (taskStartTime.includes("A.M.")) newDate = await getDateLocalString(setMinutesForDate(setHoursForDate(taskDate, starttimeHours), starttimeMinutes));
    else newDate = await getDateLocalString(setMinutesForDate(setHoursForDate(taskDate, starttimeHours, 12), starttimeMinutes));
    setTaskDate(newDate);
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

function getDateLocalString(date) {
    return new Date(date).toLocaleString()
}

export function slicingMomentDateUsingAt(date) {
    if (moment(date).calendar().includes(" at ")) {
        return moment(date).calendar().slice(0, moment(date).calendar().indexOf(" at "))
    } else return moment(date).calendar()
}