import { getLocaleDateString } from "../../helpers/timeConverter";

export default class TaskServices {
    constructor() { }

    static async CreateTask(props) {
        const { TaskList, taskDescription, taskFlag, triggerModal } = props;
        if (taskDescription && taskFlag) {
            const { addTaskToDate, createTask, taskID, taskDescription, taskFlag, taskDate, taskStartTime, taskEndTime } = props;
            let isNewDate = typeof TaskList.find((item) => item.date === getLocaleDateString(taskDate)) === "undefined" ? true : false
            if (TaskList.length === 0 || isNewDate) {
                await createTask({
                    date: getLocaleDateString(taskDate),
                    data: [{
                        taskID,
                        taskDescription,
                        taskFlag,
                        taskDate,
                        taskStartTime,
                        taskEndTime,
                    }]
                });
            } else {
                addTaskToDate(getLocaleDateString(taskDate), {
                    taskID,
                    taskDescription,
                    taskFlag,
                    taskDate,
                    taskStartTime,
                    taskEndTime,
                })
            }
        }
        triggerModal(); // to toggle the create task modal
        TaskServices.ResetTaskDetails(props);
    }

    static ResetTaskDetails(props) {
        props.resetCreateTaskDetails();
    }
}