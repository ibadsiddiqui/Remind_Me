export default class TaskServices {
    constructor() { }

    static async CreateTask(props) {
        const { taskID, taskDescription, taskFlag, taskDate, taskStartTime, taskEndTime, createTask, addTaskDays, triggerModal } = props;
        if (taskDescription) {
            addTaskDays(new Date(taskDate).toLocaleDateString());
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