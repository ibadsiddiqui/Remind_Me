import React from 'react';
import Tab from "../components/Categories/GridView/Tab";
import _ from 'lodash'
export function tabMappers(list, props) {
    return list.map((item, key) => <Tab key={key} item={item} {...props} />)
}

export function filterListWithFlags(list, flag) {
    return list.filter((item) => item.taskFlag === flag);
}

export function countTask(list, flag) {
    return _.flattenDeep(list.map((item) => item.data.filter((item) => item.taskFlag === flag))).length;
}

export function sortArrayAccordingToTime(array) {
    return array.sort((a, b) => new Date(a.taskDate) - new Date(b.taskDate))
}

export function sortArrayAccordingToDate(array) {
    return array.sort((a, b) => new Date(a.date) - new Date(b.date))
}

export function filterTodaysTask(array) {
    return array.filter(x => new Date(x.date).toLocaleDateString() === new Date().toLocaleDateString())
}

export function mapFilteredListUsingTaskID(list, action) {
    return list.map((task, index) => {
        return task.date === action.payload.taskDate ?
            task.data.length === 1 ? { data: [], date: "" } :
                {
                    date: task.date,
                    data: task.data.filter((item, _index) => item.taskID !== action.payload.taskID),
                }
            : task
    })
}