import { resetTaskDetails, setTaskDate, setTaskDescription, setTaskEndTime, setTaskFlag, setTaskID, setTaskStartTime } from "../actions/CreateTaskActions";
import { addTaskToDate, createTask, deleteTask, toggleTaskStatus } from "../actions/TaskListActions";
import { setProfileImage } from "../actions/UserActions";

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
        profileImage: state.User.profileImage,
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
        toggleTaskStatus: (taskDate, taskID) => {
            dispatch(toggleTaskStatus(taskDate, taskID))
        },
        createTask: (task) => {
            dispatch(createTask(task))
        },
        addTaskToDate: (date, task) => {
            dispatch(addTaskToDate(date, task))
        },
        deleteTask: (taskDate, taskID) => {
            dispatch(deleteTask(taskDate, taskID))
        },

        //////////////////////////////////////////
        setUserProfileImage: (img) => {
            dispatch(setProfileImage(img))
        },
    }
};