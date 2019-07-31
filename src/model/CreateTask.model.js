import { getRandomID } from "../helpers/stringHelper";

export const TaskCreationObject = {
    taskID: getRandomID(),
    taskDescription: "",
    taskFlag: "",
    taskDate: new Date().toLocaleString(),
    taskStartTime: "00:00 A.M",
    taskEndTime: "",
    completed: false,
};