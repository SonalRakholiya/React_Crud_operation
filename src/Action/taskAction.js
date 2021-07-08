import { ADD_TASK, IS_COMPLETED_TASK } from "../Constant/type"

export const addTask = (obj) => {
    return {
        type: ADD_TASK,
        payload: obj
    }
}
export const IsCompletedTask = (obj) => {
    return {
        type: IS_COMPLETED_TASK,
        payload: obj
    }
}

export const loadApiData = () => {
    return async (dispatch) => {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/10')
        const res = await data.json()
        if(res) {
            const objTask = {
                taskId: Math.random(),
                taskName: res.title,
                isCompleted: res.completed
              }
              dispatch({
                type: "ADD_TASK_LIST_USING_THUNK",
                payload: objTask
            });
        }
    }
}