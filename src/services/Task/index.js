import moment from "moment";
export default class TaskServices {
    constructor() { }

    static async CreateTask(props) {
        const { taskDescription, taskFlag, taskDate, taskStartTime, taskEndTime, createTask, addTaskDays } = props;
        let date = moment(taskDate).calendar();
        date = date.includes(" at ") ? date.slice(0, date.indexOf(" at ")) : date
        if (taskDescription) {
            addTaskDays(date);
            await createTask({
                taskDescription,
                taskFlag,
                taskDate,
                taskStartTime,
                taskEndTime,
            });
        }
        console.log(props);
        TaskServices.ResetTaskDetails(props);
    }

    static ResetTaskDetails(props) {
        props.setTaskDescription("");
        props.setTaskFlag("");
        props.setTaskDate(new Date().toLocaleString());
        props.setTaskStartTime("00:00 A.M");
    }
}