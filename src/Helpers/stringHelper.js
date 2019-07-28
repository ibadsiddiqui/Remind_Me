import moment from "moment";

export function checkDateAndSlice(year, month, day) {
    if (moment(moment(`${year}0${month + 1}${day}`, "YYYYMMDD")).calendar().includes(" at ")) {
        if (month + 1 < 10) return moment(moment(`${year}0${month + 1}${day}`, "YYYYMMDD")).calendar();
        else return moment(moment(`${year}${month + 1}${day}`, "YYYYMMDD")).calendar();
    } else {
        if (month + 1 < 10) return moment(moment(`${year}0${month + 1}${day}`, "YYYYMMDD")).calendar();
        else return moment(moment(`${year}${month + 1}${day}`, "YYYYMMDD")).calendar();
    }
}