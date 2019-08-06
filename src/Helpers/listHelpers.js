import React from 'react';
import Tab from "../components/Categories/GridView/Tab";

export function tabMappers(list, props) {
    return list.map((item, key) => <Tab key={key} item={item} {...props} />)
}

export function filterListWithFlags(list, flag) {
    return list.filter((item) => item.taskFlag === flag);
}

export function sortArrayAccordingToTime(array) {
    return array.sort((a, b) => new Date(a.taskDate) - new Date(b.taskDate))
}