import * as types from '../contants/ActionTypes';
// var randomID = () => {
//     return '_' + Math.random().toString(36).substr(2, 9);
// };

var taskReducer = (tasks = [], action) => {
    switch (action.type) {
        case types.LIST_ALL:
            if(action.tasks !== undefined)
            tasks = action.tasks
            return tasks;
        case types.ADD_TASK:
            // tasks.push(action.task)
            return [...tasks, action.task];
        case types.DELETE_TASK:
            tasks = tasks.filter(i => i.id !== action.id)
            return [...tasks];
        case types.EDIT_TASK:
            // tasks = tasks.map(i => i.id === action.task.id ? action.task : i);
            return [...tasks.map(i => i.id === action.task.id ? action.task : i)];
        case types.FILTER:
            let tasksFilter = [...tasks];
            tasksFilter= tasksFilter.filter(i => i.status === action.status)
            return [...tasksFilter];
        default: return tasks;
    }
}
export default taskReducer;