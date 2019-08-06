import { setTaskDescription, setTaskFlag, setTaskDate, setTaskStartTime, setTaskEndTime, setTaskID, resetTaskDetails } from "../actions/CreateTaskActions";
import { createTask, toggleTaskStatus, deleteTask, addTaskToDate } from "../actions/TaskListActions";

export const mapStateToProps = (state) => {
    return {
        taskID: state.CreateTask.taskID,
        taskDescription: state.CreateTask.taskDescription,
        taskFlag: state.CreateTask.taskFlag,
        taskDate: state.CreateTask.taskDate,
        taskStartTime: state.CreateTask.taskStartTime,
        taskEndTime: state.CreateTask.taskEndTime,
        completed: state.CreateTask.completed,
        TaskList: state.TaskList.TaskList,
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        setTaskID: (ID) => {
            dispatch(setTaskID(ID))
        },
        setTaskDescription: (desc) => {
            dispatch(setTaskDescription(desc))
        },
        setTaskFlag: (flag) => {
            dispatch(setTaskFlag(flag))
        },
        setTaskDate: (date) => {
            dispatch(setTaskDate(date))
        },
        setTaskStartTime: (time) => {
            dispatch(setTaskStartTime(time))
        },
        setTaskEndTime: (time) => {
            dispatch(setTaskEndTime(time))
        },
        resetCreateTaskDetails: () => {
            dispatch(resetTaskDetails())
        },
        toggleTaskStatus: (takID) => {
            dispatch(toggleTaskStatus(takID))
        },
        createTask: (task) => {
            dispatch(createTask(task))
        },
        addTaskToDate: (date, task) => {
            dispatch(addTaskToDate(date, task))
        },
        deleteTask: (id) => {
            dispatch(deleteTask(id))
        },
    }
};