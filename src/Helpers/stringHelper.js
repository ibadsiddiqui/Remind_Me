import moment from "moment";

export function checkDateAndSlice(year, month, day) {
    if (moment(moment(`${year}0${month + 1}${day}`, "YYYYMMDD")).calendar().includes(" at ")) {
        if (month + 1 < 10) return new Date(`${year}/0${month + 1}/${day}`).toLocaleString();
        else return new Date(`${year}/${month + 1}/${day}`).toLocaleString();
    } else {
        if (month + 1 < 10) return new Date(`${year}/0${month + 1}/${day}`).toLocaleString();
        else return new Date(`${year}/${month + 1}/${day}`).toLocaleString();
    }
}

export function comparingWithAt(item1, item2) {
    return item1 !== moment(item2.taskDate).calendar().slice(0, moment(item2.taskDate).calendar().indexOf(" at "))
}

export function comparingWithOutAt(item1, item2) {
    return item1 !== moment(item2.taskDate).calendar();
}