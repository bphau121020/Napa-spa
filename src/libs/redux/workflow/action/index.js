import { WORK_FLOW } from "../../../constants/actions"

export const addWorkFlowAction = (payload) => {
    return {
        type:WORK_FLOW.ADD_WORK_FLOW,
        payload
    }
} 

export const deleteWorkFlow = (payload) => {
    return {
        type:WORK_FLOW.DELETE_WORK_FLOW,
        payload
    }
}