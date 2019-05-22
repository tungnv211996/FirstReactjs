import * as types from '../contants/ActionTypes';


export const listAll = () =>{
    return {
        type: types.LIST_ALL,
    }
}
export const addTask = (task) =>{
    return {
        type: types.ADD_TASK,
        task
    }
}
export const deleteTask = (id) =>{
    return {
        type: types.DELETE_TASK,
        id
    }
}
export const editTask = (task) =>{
    return {
        type: types.EDIT_TASK,
        task
    }
}
export const filter = (status) =>{
    return {
        type: types.FILTER,
        status
    }
}

