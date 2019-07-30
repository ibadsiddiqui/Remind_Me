import moment from "moment";
import { replaceTaskTimeWithStartTime } from "../../helpers/timeConverter";
export default class TaskServices {
    constructor() { }

    static async CreateTask(props) {
        const { taskDescription, taskFlag, taskDate, taskStartTime, taskEndTime, createTask, addTaskDays, triggerModal } = props;
        await replaceTaskTimeWithStartTime(props)
        let date = moment(taskDate).calendar();
        date = date.includes(" at ") ? date.slice(0, date.indexOf(" at ")) : date;
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
        triggerModal(); // to toggle the create task modal
        TaskServices.ResetTaskDetails(props);
    }

    static ResetTaskDetails(props) {
        props.setTaskDescription("");
        props.setTaskFlag("");
        props.setTaskDate(new Date().toLocaleString());
        props.setTaskStartTime("00:00 A.M");
    }
}