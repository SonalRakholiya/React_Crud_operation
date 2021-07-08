import { ADD_TASK, IS_COMPLETED_TASK } from "../Constant/type";

const initialState = {
    data: []
}
export const taskReducer = (state = initialState, action) => {
    switch (action.type) {

        case "ADD_TASK_LIST_USING_THUNK":
            return {
                ...state, data: [action.payload, ...state.data]
            }

        case ADD_TASK:
            return {
                ...state, data: [action.payload, ...state.data]
            }

        case IS_COMPLETED_TASK:
            return {
                data: action.payload
            }

        default:
            return state
    }

}
