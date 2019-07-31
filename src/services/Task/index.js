import moment from "moment";
import { getRandomID } from "../../helpers/stringHelper";
export default class TaskServices {
    constructor() { }

    static async CreateTask(props) {
        const { taskID, taskDescription, taskFlag, taskDate, taskStartTime, taskEndTime, createTask, addTaskDays, triggerModal } = props;
        let date = moment(taskDate).calendar();
        date = date.includes(" at ") ? date.slice(0, date.indexOf(" at ")) : date;
        if (taskDescription) {
            addTaskDays(date);
            await createTask({
                taskID,
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
        props.resetCreateTaskDetails();
    }
}