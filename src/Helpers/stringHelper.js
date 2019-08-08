import moment from "moment";
import { getLocaleDateString, slicingMomentDateUsingAt } from "./timeConverter";
const uuid4 = require('uuid/v4');

export function checkDateAndSlice(year, month, day) {
    if (moment(moment(`${year}0${month + 1}${day}`, "YYYYMMDD")).calendar().includes(" at ")) {
        if (month + 1 < 10) {
            if (day < 10) return new Date(`0${month + 1}/0${day}/${year}`).toLocaleString();
            else return new Date(`0${month + 1}/${day}/${year}`).toLocaleString();
        }
        else {
            if (day < 10) return new Date(`${month + 1}/0${day}/${year}`).toLocaleString();
            else return new Date(`${month + 1}/${day}/${year}`).toLocaleString();
        }
    } else {
        if (month + 1 < 10) {
            if (day < 10) return new Date(`0${month + 1}/0${day}/${year}`).toLocaleString();
            else return new Date(`0${month + 1}/${day}/${year}`).toLocaleString();
        }
        else {
            if (day < 10) new Date(`${month + 1}/0${day}/${year}`).toLocaleString();
            else new Date(`${month + 1}/${day}/${year}`).toLocaleString();
        }
    }
}

export function comparingWithAt(item1, item2) {
    let leftSide = slicingMomentDateUsingAt(getLocaleDateString(item1))
    let rightSide = slicingMomentDateUsingAt(getLocaleDateString(item2.taskDate))
    return leftSide !== rightSide;
}

export function comparingWithOutAt(item1, item2) {
    let leftSide = slicingMomentDateUsingAt(getLocaleDateString(item1))
    let rightSide = slicingMomentDateUsingAt(getLocaleDateString(item2.taskDate))
    return leftSide !== rightSide
}

export function getRandomID() {
    return uuid4();
}