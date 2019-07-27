export default class TaskServices {
    constructor() { }

    static async CreateTask(props) {
        const { taskDescription, taskFlag, taskDate, taskStartTime, taskEndTime, createTask, } = props;
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