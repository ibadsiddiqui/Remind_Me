import { setTaskDescription, setTaskFlag, setTaskDate, setTaskTime } from "../actions/CreateTaskActions";

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
    }
};