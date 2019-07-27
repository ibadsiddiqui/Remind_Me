import { setTaskDescription, setTaskFlag, setTaskDate, setTaskStartTime, setTaskEndTime } from "../actions/CreateTaskActions";
import { createTask, AddTaskDays } from "../actions/TaskListActions";

export const mapStateToProps = (state) => {
    return {
        taskDescription: state.CreateTask.taskDescription,
        taskFlag: state.CreateTask.taskFlag,
        taskDate: state.CreateTask.taskDate,
        taskStartTime: state.CreateTask.taskStartTime,
        taskEndTime: state.CreateTask.taskEndTime,
        TaskList: state.TaskList.TaskList,
        ListOfDaysSelected: state.TaskList.ListOfDaysSelected,
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
        setTaskStartTime: (time) => {
            dispatch(setTaskStartTime(time))
        },
        setTaskEndTime: (time) => {
            dispatch(setTaskEndTime(time))
        },
        createTask: (task) => {
            dispatch(createTask(task))
        },
        addTaskDays: (day) => {
            dispatch(AddTaskDays(day))
        }
    }
};