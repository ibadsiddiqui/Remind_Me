export default class TaskServices {
    constructor() { }

    static async CreateTask(props) {
        const { TaskList, taskDescription, taskFlag, triggerModal } = props;
        if (taskDescription && taskFlag) {
            const { addTaskToDate,  createTask, taskID, taskDescription, taskFlag, taskDate, taskStartTime, taskEndTime } = props;
            let isNewDate = typeof TaskList.find((item) => item.date === new Date(taskDate).toLocaleDateString()) === "undefined" ? true : false
            if (TaskList.length === 0 || isNewDate) {
                await createTask({
                    date: new Date(taskDate).toLocaleDateString(),
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
                addTaskToDate(new Date(taskDate).toLocaleDateString(), {
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