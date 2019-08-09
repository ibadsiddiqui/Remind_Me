import _ from 'lodash';
import { getLocaleDateString } from './timeConverter';

export function filterListWithFlags(list, flag) {
    return list.filter((item) => item.taskFlag === flag);
}

export function countTask(list, flag) {
    return _.flattenDeep(list.map((item) => item.data.filter((item) => item.taskFlag === flag))).length;
}

export function sortArrayAccordingToTime(array) {
    return array.sort((a, b) => new Date(a.taskDate) - new Date(b.taskDate));
}

export function sortArrayAccordingToDate(array) {
    return array.sort((a, b) => new Date(a.date) - new Date(b.date));
}

export function filterTodaysTask(array) {
    return array.filter(x => getLocaleDateString(x.date) === getLocaleDateString());
}

function filterUsingTasKID(list, action) {
    return list.filter(item => item.taskID !== action.payload.taskID)
}

export function mapFilteredListUsingTaskID(list, action) {
    return list.map((task, _) => {
        return task.date === action.payload.taskDate ?
            task.data.length === 1 ? null :
                {
                    date: task.date,
                    data: filterUsingTasKID(task.data, action),
                }
            : task
    }).filter((item) => !_.isEmpty(item));
}