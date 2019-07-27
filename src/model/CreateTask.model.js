import moment from 'moment'

export const TaskCreationObject = {
    taskDescription: "",
    taskFlag: "",
    taskDate: moment().calendar().slice(0, moment().calendar().indexOf(" at ")),
    taskStartTime: "00:00 A.M",
    taskEndTime: "",
};