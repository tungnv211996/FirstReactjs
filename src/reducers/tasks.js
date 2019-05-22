import * as types from '../contants/ActionTypes';
var data = JSON.parse(localStorage.getItem('tasks'))
var randomID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
};
var initialState = data ? data : [
    {
        id: 1,
        name: 'Ăn',
        status: true,
    },
    {
        id: 2,
        name: 'Ngủ',
        status: true,
    }, {
        id: 3,
        name: 'Code',
        status: true,
    }, {
        id: 4,
        name: 'Run',
        status: false,
    },
];

var taskReducer = (tasks = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return tasks;
        case types.ADD_TASK:
            action.task.id = randomID();
            tasks.push(action.task)
            localStorage.setItem('tasks', JSON.stringify(tasks));
            return [...tasks];
        case types.DELETE_TASK:
            tasks = tasks.filter(i => i.id !== action.id)
            localStorage.setItem('tasks', JSON.stringify(tasks));
            return [...tasks];
        case types.EDIT_TASK:
            tasks = tasks.map(i => i.id === action.task.id ? action.task : i);
            console.log(tasks);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            return [...tasks];
        case types.FILTER:
            let tasksFilter = [...tasks];
            tasksFilter= tasksFilter.filter(i => i.status === action.status)
            return [...tasksFilter];
        default: return tasks;
    }
}
export default taskReducer;