import { setTaskDescription, setTaskFlag, setTaskDate, setTaskTime } from "../actions/CreateTaskActions";
import { createTask, setTaskList } from "../actions/TaskListActions";

export const mapStateToProps = (state) => {
    return {
        taskDescription: state.CreateTask.taskDescription,
        taskFlag: state.CreateTask.taskFlag,
        taskDate: state.CreateTask.taskDate,
        taskTime: state.CreateTask.taskTime,
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        setTaskDescription: (desc) => {
            dispatch(setTaskDescription(desc))
        },
        setTaskFlag: (flag) => {
            dispatch(setTaskFlag(flag))
        },
        setTaskDate: (date) => {
            dispatch(setTaskDate(date))
        },
        setTaskTime: (time) => {
            dispatch(setTaskTime(time))
        },
        createTask: (task) => {
            dispatch(createTask(task))
        },
        setList: (list) => {
            dispatch(setTaskList(list))
        }
    }
};