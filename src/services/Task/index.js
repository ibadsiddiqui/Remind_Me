export default class TaskServices {
    constructor() { }

    static async CreateTask(props) {
        const { taskDescription, taskFlag, taskDate, taskStartTime, taskEndTime, createTask, addTaskDays } = props;
        addTaskDays(taskDate);
        await createTask({
            taskDescription,
            taskFlag,
            taskDate,
            taskStartTime,
            taskEndTime,
        });
        console.log(props);
    }
}